<template>
    <v-row class="mt-10">
      <v-col cols="11" class="text-left mx-auto">
        <h2 class="text-h4 text-center mb-6">Projects</h2>
        <v-row>
          <v-col
            v-for="(project, index) in projects"
            :key="index"
            cols="12"
          >
            <ProjectCard :project="project" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </template>
  
  <script lang="ts" setup>
  import type { Project } from "@/models/project";
  defineProps<{ projects: Project[] }>();
  
  const projects = ref<Project[]>([
    {
      id: "It-ISLR",
      topic: "Italian Isolated Sign Language Recognition",
      description: "Use italian sign language dataset and sota model to create end to end system can understand italian sign language and convert it to text",
      supervisors: "G. Castellano",
      status: "ONGOING",
      tags: ["3D Computer Vision", "Sign Language Recognition"],
      image: "https://placehold.co/600x400", // External URL
    },
    {
      id: "It-CSLT",
      topic: "Italian Continuous Sign Language Translation",
      description: "Use italian sign language dataset and sota model to create end to end system can translate italian sign language to text and vice versa",
      supervisors: "G. Castellano",
      status: "ONGOING",
      tags: ["3D Computer Vision", "Sign Language Translation"],
      // image: "https://placehold.co/600x400", // External URL
    },
    {
      id: "GAJMA",
      topic: "Image Animation",
      description: "Generate animation from 2D plain images extracted from japanese comics, calls manga, and make video for anime generation",
      supervisors: "G. Castellano",
      status: "ONGOING",
      tags: ["3D Computer Vision", "Manga", "Anime", "Image Animation"],
      // image: "https://placehold.co/600x400", // External URL
    },
    {
      id: "JPMTR",
      topic: "Manga Translation from Raw Scans",
      description:"Using computer vision techniques to detect speech bubbles in manga, translate the text, and overlay the translation into the correct bubbles.",
      supervisors: "Supervisor Name",
      status: "ONGOING",
      tags: ["Computer Vision", "OCR", "Translation", "Manga Processing"],
      // image: "https://placehold.co/600x400", // External URL
    },
  ]);
  </script>