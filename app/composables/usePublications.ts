import type { Publication } from "@/models/publication";

export const usePublications = () => {
  const requestURL = useRequestURL();
  const publicationsUrl = new URL("/publications.json", requestURL.origin).toString();

  const { data: publications, pending, error } = useAsyncData<Publication[]>(
    "publications",
    () => $fetch(publicationsUrl),
    {
      server: false,
      default: () => [],
    }
  );

  return {
    publications,
    pending,
    error
  };
};