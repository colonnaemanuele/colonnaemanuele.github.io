import requests
import json
import os

# Sostituisci questo con il tuo Author ID di Semantic Scholar
# (Ti spiego sotto come trovarlo)
AUTHOR_ID = "2309245017" 
JSON_PATH = "public/publications.json"

def fetch_my_publications():
    url = f"https://api.semanticscholar.org/graph/v1/author/{AUTHOR_ID}/papers"
    params = {
        "fields": "title,authors,venue,year,url,abstract,externalIds",
        "limit": 100 # Prende fino alle tue ultime 100 pubblicazioni
    }
    
    print("Recupero le pubblicazioni per l'autore...")
    response = requests.get(url, params=params)
    
    if response.status_code != 200:
        print(f"Errore API: {response.status_code}")
        return

    data = response.json()
    publications = []
    
    for paper in data.get('data', []):
        # Estrai i nomi degli autori
        authors_list = [a['name'] for a in paper.get('authors', [])]
        authors_str = ", ".join(authors_list)
        
        # Mappa i dati nel formato esatto della tua interfaccia TypeScript
        pub = {
            "title": paper.get('title', ''),
            "authors": authors_str,
            "journal": paper.get('venue', 'Unknown Venue'),
            "year": str(paper.get('year', '')),
            "url": paper.get('url', ''),
            "abstract": paper.get('abstract', '') or 'Nessun abstract disponibile.',
            "showFullAbstract": False
        }
        
        # Aggiungi il DOI se presente
        doi = paper.get('externalIds', {}).get('DOI')
        if doi:
            pub['doi'] = f"https://doi.org/{doi}"
            
        publications.append(pub)
        
    # Ordina i paper dal più recente al più vecchio
    publications.sort(key=lambda x: x['year'], reverse=True)
    
    # Salva il file nella cartella public
    os.makedirs(os.path.dirname(JSON_PATH), exist_ok=True)
    with open(JSON_PATH, 'w', encoding='utf-8') as f:
        json.dump(publications, f, indent=2, ensure_ascii=False)
        
    print(f"Aggiornamento completato! Salvate {len(publications)} pubblicazioni.")

if __name__ == "__main__":
    fetch_my_publications()