export interface Lecture {
    id: string;
    title: string;
    description: string;
    supervisors: string[];
    date: string;
    status?: string;
    tags: string[];
    image?: string;
    pdf?: string;
    showFullDescription?: boolean;
}