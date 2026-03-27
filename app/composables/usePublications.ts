import type { Publication } from "@/models/publication";

export const usePublications = () => {
  // useFetch carica asincronamente il JSON che verrà generato dallo script
  const { data: publications, pending, error } = useFetch<Publication[]>('/publications.json', {
    default: () => []
  });

  return {
    publications,
    pending,
    error
  };
};