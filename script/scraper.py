import requests
import json
import os
from datetime import datetime

# Percorso in cui salvare il file nel tuo progetto Nuxt
JSON_FILE_PATH = "public/sl_papers.json"

TASKS = {
    "Sign Language Production": "Production",
    "Sign Language Translation": "Translation",
    "Sign Language Recognition": "Recognition"
}

def get_existing_papers():
    if os.path.exists(JSON_FILE_PATH):
        with open(JSON_FILE_PATH, 'r', encoding='utf-8') as f:
            try:
                return json.load(f)
            except json.JSONDecodeError:
                return []
    return []

def calculate_score(paper, task_keyword):
    score = 0
    title = paper.get('title', '').lower()
    abstract = paper.get('abstract', '')
    abstract = abstract.lower() if abstract else ''
    
    keyword_lower = task_keyword.lower()
    
    # Match nel Titolo (+50)
    if keyword_lower in title:
        score += 50
    # Match nell'Abstract (+20)
    if keyword_lower in abstract:
        score += 20
        
    return score

def fetch_papers_from_semantic_scholar():
    base_url = "https://api.semanticscholar.org/graph/v1/paper/search"
    existing_papers = get_existing_papers()
    existing_ids = {p['id'] for p in existing_papers}
    
    new_papers = []
    
    for query, task_name in TASKS.items():
        params = {
            "query": query,
            "fields": "title,authors,venue,year,url,abstract,externalIds",
            "limit": 10, # Controlla i primi 10 risultati recenti ogni giorno
            "sort": "publicationDate:desc"
        }
        
        response = requests.get(base_url, params=params)
        if response.status_code == 200:
            data = response.json()
            for item in data.get('data', []):
                # Usa il DOI se disponibile, altrimenti il paperId di Semantic Scholar
                paper_id = item.get('externalIds', {}).get('DOI', item['paperId'])
                
                if paper_id not in existing_ids:
                    score = calculate_score(item, query)
                    
                    authors = ", ".join([a['name'] for a in item.get('authors', [])])
                    
                    new_paper = {
                        "id": paper_id,
                        "title": item.get('title', ''),
                        "authors": authors,
                        "venue": item.get('venue', 'Unknown Venue'),
                        "year": str(item.get('year', datetime.now().year)),
                        "url": item.get('url', ''),
                        "abstract": item.get('abstract', 'No abstract available.'),
                        "task": task_name,
                        "score": score,
                        "dateAdded": datetime.now().strftime("%Y-%m-%d")
                    }
                    new_papers.append(new_paper)
                    existing_ids.add(paper_id)

    # Uniamo i vecchi e i nuovi
    all_papers = existing_papers + new_papers
    
    # Ordiniamo prima per score (dal più alto al più basso) e poi per data di aggiunta
    all_papers.sort(key=lambda x: (x['score'], x['dateAdded']), reverse=True)
    
    # Salviamo nel percorso public/ di Nuxt
    os.makedirs(os.path.dirname(JSON_FILE_PATH), exist_ok=True)
    with open(JSON_FILE_PATH, 'w', encoding='utf-8') as f:
        json.dump(all_papers, f, indent=4, ensure_ascii=False)
        
    print(f"Scraping completato. Aggiunti {len(new_papers)} nuovi paper.")

if __name__ == "__main__":
    fetch_papers_from_semantic_scholar()