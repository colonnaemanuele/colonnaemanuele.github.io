import hashlib
import json
import os
import re
from datetime import datetime
from urllib.parse import urlencode
from urllib.request import Request, urlopen

JSON_FILE_PATH = "public/sl_papers.json"

TASKS = {
    "Sign Language Production": "Production",
    "Sign Language Translation": "Translation",
    "Sign Language Recognition": "Recognition",
}


def http_get_json(url, params=None, timeout=30):
    full_url = url
    if params:
        full_url = f"{url}?{urlencode(params)}"

    req = Request(full_url, headers={"User-Agent": "sl-paper-scraper/1.0"})
    with urlopen(req, timeout=timeout) as response:
        status = getattr(response, "status", 200)
        payload = response.read().decode("utf-8")
    return status, json.loads(payload)


def normalize_iso_publication_date(publication_date, year):
    if isinstance(publication_date, str):
        value = publication_date.strip()
        if re.match(r"^\d{4}-\d{2}-\d{2}$", value):
            return value
        if re.match(r"^\d{4}-\d{2}$", value):
            return f"{value}-01"
        if re.match(r"^\d{4}$", value):
            return f"{value}-01-01"

    year_str = str(year) if year is not None else ""
    if re.match(r"^\d{4}$", year_str):
        return f"{year_str}-01-01"

    return "1970-01-01"


def ensure_publication_dates(papers):
    for paper in papers:
        paper["publicationDate"] = normalize_iso_publication_date(
            paper.get("publicationDate"),
            paper.get("year"),
        )
        if re.match(r"^\d{4}", paper["publicationDate"]):
            paper["year"] = paper["publicationDate"][:4]

    return papers


def calculate_score(paper, task_keyword):
    score = 0
    title = paper.get("title", "").lower()
    abstract = paper.get("abstract", "")
    abstract = abstract.lower() if abstract else ""

    keyword_lower = task_keyword.lower()

    if keyword_lower in title:
        score += 50
    if keyword_lower in abstract:
        score += 20

    return score


def stable_id(*parts):
    raw = "|".join([p.strip().lower() for p in parts if p and isinstance(p, str)])
    digest = hashlib.sha1(raw.encode("utf-8")).hexdigest()[:16]
    return f"s2-{digest}"


def fetch_papers_from_semantic_scholar():
    base_url = "https://api.semanticscholar.org/graph/v1/paper/search"
    collected = []
    seen_ids = set()

    for query, task_name in TASKS.items():
        params = {
            "query": query,
            "fields": "paperId,title,authors,venue,year,publicationDate,url,abstract,externalIds",
            "limit": 30,
            "sort": "publicationDate:desc",
        }

        try:
            status_code, data = http_get_json(base_url, params=params, timeout=30)
        except Exception as exc:
            print(f"Semantic Scholar non disponibile per '{query}': {exc}")
            continue

        if status_code != 200:
            print(f"Semantic Scholar non disponibile per '{query}': {status_code}")
            continue

        for item in data.get("data", []):
            paper_id = item.get("externalIds", {}).get("DOI") or item.get("paperId")
            if not paper_id:
                paper_id = stable_id(item.get("title", ""), item.get("url", ""), task_name)

            if paper_id in seen_ids:
                continue

            score = calculate_score(item, query)
            authors = ", ".join([a["name"] for a in item.get("authors", [])])
            year = item.get("year", datetime.now().year)

            collected.append(
                {
                    "id": paper_id,
                    "title": item.get("title", ""),
                    "authors": authors,
                    "venue": item.get("venue", "Unknown Venue"),
                    "year": str(year),
                    "publicationDate": normalize_iso_publication_date(item.get("publicationDate"), year),
                    "url": item.get("url", ""),
                    "abstract": item.get("abstract", "No abstract available.") or "No abstract available.",
                    "task": task_name,
                    "score": score,
                    "dateAdded": datetime.now().strftime("%Y-%m-%d"),
                }
            )
            seen_ids.add(paper_id)

    all_papers = ensure_publication_dates(collected)

    if not all_papers:
        print("Nessun paper salvato: Semantic Scholar non disponibile (es. 429). Mantengo il file esistente.")
        return

    all_papers.sort(
        key=lambda x: (
            int(x.get("score", 0)),
            x.get("publicationDate", ""),
            x.get("dateAdded", ""),
        ),
        reverse=True,
    )

    os.makedirs(os.path.dirname(JSON_FILE_PATH), exist_ok=True)
    with open(JSON_FILE_PATH, "w", encoding="utf-8") as f:
        json.dump(all_papers, f, indent=2, ensure_ascii=False)

    print(f"Scraping completato. Salvati {len(all_papers)} paper da Semantic Scholar.")


if __name__ == "__main__":
    fetch_papers_from_semantic_scholar()