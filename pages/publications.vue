<template>
    <v-app>
        <v-col>
            <v-row justify="center" class="mt-4">
                <v-col cols="12" md="9">
                    <h2 class="text-h4 text-center mb-6">Publications</h2>
                    <PublicationCard v-for="(publication, index) in publications" :key="index"
                        :publication="publication" />
                </v-col>
            </v-row>
        </v-col>
    </v-app>
</template>
<script lang="ts" setup>
import type { Publication } from "@/models/publication";
defineProps<{ publication: Publication[] }>();


const publications = ref<Publication[]>([
    {
        title: "Label Anything: Multi-Class Few-Shot Semantic Segmentation with Visual Prompts",
        authors: "P. De Marinis, N. Fanelli, R. Scaringi, E. Colonna, G. Fiameni, G. Vessio, G. Castellano",
        journal: "arXiv preprint arXiv:2407.02075",
        year: "2024",
        doi: "https://doi.org/10.48550/arXiv.2407.02075",
        url: "https://arxiv.org/abs/2407.02075",
        abstract: "We present Label Anything, an innovative neural network architecture designed for few-shot semantic segmentation (FSS) that demonstrates remarkable generalizability across multiple classes with minimal examples required per class. Diverging from traditional FSS methods that predominantly rely on masks for annotating support images, Label Anything introduces varied visual prompts -- points, bounding boxes, and masks -- thereby enhancing the framework's versatility and adaptability. Unique to our approach, Label Anything is engineered for end-to-end training across multi-class FSS scenarios, efficiently learning from diverse support set configurations without retraining. This approach enables a \"universal\" application to various FSS challenges, ranging from -way -shot to complex -way -shot configurations while remaining agnostic to the specific number of class examples. This innovative training strategy reduces computational requirements and substantially improves the model's adaptability and generalization across diverse segmentation tasks. Our comprehensive experimental validation, particularly achieving state-of-the-art results on the COCO- benchmark, underscores Label Anything's robust generalization and flexibility. The source code is publicly available at: https://github.com/pasqualedem/LabelAnything.",
    },
    {
        title: "Towards Italian Sign Language Generation for digital humans",
        authors: "E. Colonna, A. Arezzo, D. Roberto, D. Landi, F. Vitulano, G. Vessio, G. Castellano",
        journal: "Eight Workshop on Natural Language for Artificial Intelligence (NL4AI 2024) @AIxIA 2024",
        year: "2024",
        url: "https://www.researchgate.net/profile/Gennaro-Vessio/publication/387398556_Towards_Italian_Sign_Language_Generation_for_digital_humans/links/676bc637fb9aff6eaaebc134/Towards-Italian-Sign-Language-Generation-for-digital-humans.pdf",
        abstract: "In the rapidly evolving field of human-computer interaction, the need for inclusive and accessible communication methods has become increasingly vital. This paper introduces an early exploration of Text-to-LIS, a new model designed to generate contextually accurate Italian Sign Language (LIS) gestures for digital humans. Our approach addresses the importance of non-verbal communication in virtual environments, focusing on enhancing interaction for the deaf and hard-of-hearing community. The core contribution of this work is developing an iterative framework that leverages a comprehensive multimodal dataset, integrating textual and audio inputs with visual data. Utilizing state-of-the-art deep learning algorithms and advanced human pose estimation techniques, the framework enables the progressive refinement of generated gestures, ensuring realism and contextual relevance. The potential applications of the Text-to-LIS model are wide-ranging, from improving accessibility in digital environments to supporting educational tools and promoting LIS in the digital age. The code is publicly available at: https://github.com/CarpiDiem98/text-to-lis/.",
    },
    {
        title: "Costellazioni tipografiche-typographical costellations 15 - Tipografia Machine-Kern 0.3",
        authors: "E. Colonna, M. Colonna",
        journal: "MD JOURNAL",
        year: "2023",
        pages: "78-87",
        url: "https://www.researchgate.net/profile/Gennaro-Vessio/publication/387398556_Towards_Italian_Sign_Language_Generation_for_digital_humans/links/676bc637fb9aff6eaaebc134/Towards-Italian-Sign-Language-Generation-for-digital-humans.pdf",
        abstract: "Può l\’intelligenza artificiale migliorare il lavoro di progettazione di caratteri tipografici digitali, ottimizzando uno degli aspetti più spinosi della sua realizzazione, ossia quello del kerning? Sono stati sperimentati due approcci: il primo basato su sistemi di machine learning con variabili tipografiche e rappresentazioni matematiche; il secondo addestrando modelli di deep learning somministrando matrici di pixel ad un sistema di relazioni logico-percettive. Valutando i risultati di questa prima sperimentazione risulta che il modello basato su deep learning abbia generato un errore più basso rispetto a quello di machine learning, impiegando però, risorse e tempo di apprendimento di gran lunga superiore.",
    },
]);

</script>