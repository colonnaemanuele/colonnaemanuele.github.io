export interface Project {
    id: string;
    topic: string;
    description: string;
    supervisors?: string;
    students?: string;
    status?: string;
    tags: string[];
    image?: string;
    url?: string;
    showFullDescription?: boolean;
}