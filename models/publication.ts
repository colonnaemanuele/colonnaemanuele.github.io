export interface Publication {
    title: string;
    authors: string;
    journal: string;
    year: string;
    pages?: string;
    doi?: string;
    url: string;
    abstract?: string;
    showFullAbstract?: boolean;
  }