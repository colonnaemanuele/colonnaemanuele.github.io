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

import cvCaseStudiesImg from "@/assets/lecture/cv_case_studies.jpeg";
import videoUnderstandingImg from "@/assets/lecture/video_understanding.jpeg";


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
        pdf: "https://unibari-my.sharepoint.com/:b:/g/personal/emanuele_colonna_uniba_it/ES5ZiCxsUGdBrJdVnvH8MYcBCl_siT3g2dLxSrINHz_ISw?e=yuFeXh",
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
        pdf: "https://unibari-my.sharepoint.com/:b:/g/personal/emanuele_colonna_uniba_it/EebLDtUoMYxKjB6wrzGKSdkBSOLMQMAaDInsRJ5YGOg5KA?e=HIf19T",
    },
]);

</script>