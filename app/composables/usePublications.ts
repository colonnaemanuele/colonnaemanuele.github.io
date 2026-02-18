import type { Publication } from "@/models/publication";

export const usePublications = () => {
  const publications = ref<Publication[]>([
    {
      title: "Label Anything: Multi-Class Few-Shot Semantic Segmentation with Visual Prompts",
      authors: "P. De Marinis, N. Fanelli, R. Scaringi, E. Colonna, G. Fiameni, G. Vessio, G. Castellano",
      journal: "European Conference on Artificial Intelligence (ECAI), 2025",
      year: "2025",
      doi: "https://doi.org/10.3233/FAIA251289",
      url: "https://ebooks.iospress.nl/doi/10.3233/FAIA251289",
      abstract: "We present Label Anything, an innovative neural network architecture designed for few-shot semantic segmentation (FSS) that demonstrates remarkable generalizability across multiple classes with minimal examples required per class.",
    },
    {
      title: "Towards Italian Sign Language Generation for digital humans",
      authors: "E. Colonna, A. Arezzo, D. Roberto, D. Landi, F. Vitulano, G. Vessio, G. Castellano",
      journal: "Eight Workshop on Natural Language for Artificial Intelligence (NL4AI 2024) @AIxIA 2024",
      year: "2024",
      url: "https://www.researchgate.net/profile/Gennaro-Vessio/publication/387398556_Towards_Italian_Sign_Language_Generation_for_digital_humans/links/676bc637fb9aff6eaaebc134/Towards-Italian-Sign-Language-Generation-for-digital-humans.pdf",
      abstract: "This paper introduces an early exploration of Text-to-LIS, a new model designed to generate contextually accurate Italian Sign Language (LIS) gestures for digital humans.",
      award: "Best Paper Award"
    },
  ]);

  return {
    publications
  };
};
