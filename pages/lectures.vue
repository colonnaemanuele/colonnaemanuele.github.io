<template>
  <v-app>
    <v-container fluid>
      <!-- Title row -->
      <v-row justify="center">
        <v-col cols="12">
          <p class="text-h4 text-center">Lecture</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          v-for="(lecture, index) in lectures"
          :key="index"
          cols="12"
          md="6"
        >
          <LectureCard :lecture="lecture" />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script lang="ts" setup>
import type { Lecture } from "@/models/lecture";

import cvCaseStudiesImg from "@/assets/lecture/cv_case_studies/cv_case_studies.jpeg";
import cvCaseStudiesPdf from "@/assets/lecture/cv_case_studies/cv_case_studies_2024_2025.pdf";
import videoUnderstandingImg from "@/assets/lecture/video_understanding/video_understanding.jpeg";
import videoUnderstandingPdf from "@/assets/lecture/video_undestanding/video_understanding.pdf";


// this works
const lectures = ref<Lecture[]>([
    {   
        id: "0",
        title: "Case Studies",
        description: "Case studies for Computer Vision 2024/2025",
        supervisors: ["Prof. Giovanna Castellano"],
        status: "Completed",
        date: "2023-04-23",
        tags: ["Computer Vision", "Video Understanding", "Sign Language"],
        image: cvCaseStudiesImg,
        pdf: cvCaseStudiesPdf,
    },
    {
        id: "1",
        title: "Video Understanding",
        description: "Introduction and overview of video understanding, including key concepts and applications.",
        supervisors: ["Prof. Giovanna Castellano"],
        status: "Completed",
        date: "2023-05-23",
        tags: ["Computer Vision", "Video Understanding"],
        image: videoUnderstandingImg,
        pdf: videoUnderstandingPdf,
    },
]);

</script>