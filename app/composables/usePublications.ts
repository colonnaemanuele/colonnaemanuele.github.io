import type { Publication } from "@/models/publication";

export const usePublications = () => {
  // Load JSON from public folder without routing it through page navigation.
  const { data: publications, pending, error } = useAsyncData<Publication[]>('publications', () =>
    $fetch('/publications.json'), {
    default: () => []
  });

  return {
    publications,
    pending,
    error
  };
};