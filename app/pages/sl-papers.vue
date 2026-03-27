<template>
  <v-app>
    <v-container fluid>
      <v-row justify="center" class="mt-4">
        <v-col cols="12" md="9">
          <h2 class="text-h4 text-center mb-6">Sign Language AI Literature</h2>
          <p class="text-center mb-8 text-body-1">
            Una lista aggiornata quotidianamente sulle novità in ambito Sign Language Production, Translation e Recognition. 
            Ordinata per rilevanza algoritmica.
          </p>
          
          <div v-if="pending" class="d-flex justify-center my-8">
            <v-progress-circular indeterminate color="primary"></v-progress-circular>
          </div>
          
          <div v-else-if="error" class="text-center text-error">
            Impossibile caricare i dati al momento.
          </div>

          <div v-else>
            <PublicationCard
              v-for="(paper, index) in papers"
              :key="paper.id"
              :publication="{
                title: paper.title,
                authors: paper.authors,
                journal: paper.venue,
                year: paper.year,
                url: paper.url,
                abstract: paper.abstract,
                showFullAbstract: paper.showFullAbstract
              }"
              class="mb-6"
            >
              <template #prepend>
                <v-chip size="small" color="primary" class="mr-2">{{ paper.task }}</v-chip>
                <v-chip size="small" color="secondary" variant="outlined">Score: {{ paper.score }}</v-chip>
              </template>
            </PublicationCard>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script setup lang="ts">
import type { SlPaper } from '@/models/paper';

// In Nuxt 3, i file in "public" vengono serviti direttamente dalla root "/"
const { data: papers, pending, error } = useFetch<SlPaper[]>('/sl_papers.json', {
  default: () => []
});
</script>