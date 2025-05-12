<template>
  <v-card class="mb-6" elevation="2">
    <v-row>
      <v-col cols="12" md="4">
        <v-img :src="project.image" alt="Project Image" aspect-ratio="16/9" height="auto" class="rounded"></v-img>
      </v-col>

      <v-col cols="12" md="8">
        <v-card-title class="text-h6"> {{ project.topic }} </v-card-title>
        <v-card-subtitle> {{ project.id }} </v-card-subtitle>
        <v-card-text>
          <p class="mt-2" :class="{ 'truncate-description': !project.showFullDescription }">
            {{ project.description }}
          </p>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn v-if="shouldShowToggleButton(project.description)" icon @click="toggleDescription(project)">
            <v-icon>
              {{ project.showFullDescription ? "mdi-chevron-up" : "mdi-chevron-down" }}
            </v-icon>
          </v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
    
    <v-row v-if="project.showFullDescription" class="mt-4 text-center">
      <v-col cols="12" class="d-flex align-center justify-center mb-2">
        <div class="d-flex align-center">
          <strong>Supervisors:</strong>       
          <span class="ml-2">{{ project.supervisors }}</span>
        </div>
        <v-divider vertical class="mx-4"></v-divider>
        <div class="d-flex align-center">
          <strong>Status: </strong>
          <span class="ml-2">{{ project.status }}</span>

        </div>
        <v-divider vertical class="mx-4"></v-divider>
        <div class="d-flex align-center">
          <strong>Tags: </strong>
          <span class="ml-2"><v-chip v-for="(tag, tagIndex) in project.tags" :key="tagIndex" color="secondary" text-color="white"
            class="ma-1">
            {{ tag }}
          </v-chip></span>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts" setup>
import type { Project } from "@/models/project";
defineProps<{ project: Project }>();

const toggleDescription = (project: Project) => {
  project.showFullDescription = !project.showFullDescription;
};


const shouldShowToggleButton = (abstract: string): boolean => {
  const maxLines = 2;
  const maxCharacters = maxLines * 50;
  return abstract.length > maxCharacters;
};
</script>

<style scoped>
.truncate-description {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  /* Number of lines to show */
  line-clamp: 2;
  /* Standard property for compatibility */
}
</style>