export interface SlPaper {
  id: string; // DOI o ID univoco
  title: string;
  authors: string;
  venue: string;
  year: string;
  publicationDate: string; // Data completa ISO (YYYY-MM-DD)
  url: string;
  abstract: string;
  task: string; // 'Production', 'Translation', o 'Recognition'
  score: number; // Punteggio di rilevanza
  dateAdded: string; // Per l'ordinamento cronologico
  showFullAbstract?: boolean;
}