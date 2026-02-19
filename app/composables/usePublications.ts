import type { Publication } from "@/models/publication";

export const usePublications = () => {
  const publications = ref<Publication[]>([
    {
      title: "Handscribe: A gloss-free framework for sign language translation and gloss sequence generation",
      authors: "E. Colonna, I. Rinaldi, D. Landi, G. Vessio, G. Castellano",
      journal: "Computer Vision and Image Understanding (CVIU), 2026",
      year: "2026",
      doi: "https://doi.org/10.1016/j.cviu.2026.104674",
      url: "https://www.sciencedirect.com/science/article/pii/S107731422600041X?via%3Dihub",
      abstract: "Sign language translation systems traditionally rely on intermediate gloss representations to bridge the gap between visual input and written language output. However, manual gloss annotation is costly, language-dependent, and often lossy, prompting growing interest in gloss-free alternatives. This paper introduces , a novel two-stage framework for gloss-free sign language translation and gloss sequence generation.  first translates continuous sign language videos into written language sentences using a lightweight decoder built atop SlowFast-based spatiotemporal features and a frozen mBART model. Then, in the second stage, it generates gloss sequences from these sentences using a Large Language Model (LLaMa3.1-8B-Instruct) that has been fine-tuned with weak supervision. Our experiments on PHOENIX-2014-T and Wav2Gloss Fieldwork demonstrate strong translation performance and state-of-the-art multilingual gloss generation, even in zero-shot settings. The proposed framework reduces annotation bottlenecks while maintaining flexibility and interpretability, paving the way for scalable and inclusive sign language technologies. The code and fine-tuning scripts are available at https://github.com/colonnaemanuele/Handscribe.",
    },
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
