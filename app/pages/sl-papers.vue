<template>
  <v-app>
    <v-container fluid>
      <v-row justify="center" class="mt-4">
        <v-col cols="12" md="9">
          <h2 class="text-h4 text-center mb-6">Sign Language AI Literature</h2>
          <p class="text-center mb-8 text-body-1">
            Una lista aggiornata quotidianamente sulle novità in ambito Sign Language Production, Translation e Recognition.
          </p>
          
          <div v-if="pending" class="d-flex justify-center my-8">
            <v-progress-circular indeterminate color="primary"></v-progress-circular>
          </div>
          
          <div v-else-if="error" class="text-center text-error">
            Impossibile caricare i dati al momento.
          </div>

          <div v-else>
            <v-expansion-panels variant="accordion" class="mb-8">
              <v-expansion-panel
                v-for="section in sections"
                :key="section.task"
                :title="`${section.title} (${section.papers.length})`"
              >
                <v-expansion-panel-text>
                  <div v-if="section.papers.length === 0" class="text-medium-emphasis mb-2">
                    Nessun paper disponibile per questa sezione.
                  </div>

                  <PublicationCard
                    v-for="paper in section.papers"
                    :key="paper.id"
                    :publication="{
                      title: paper.title,
                      authors: paper.authors,
                      journal: paper.venue,
                      year: formatPublicationDate(paper.publicationDate),
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
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script setup lang="ts">
import type { SlPaper } from '~~/models/paper';
import { computed } from 'vue';

const requestURL = useRequestURL();
const slPapersUrl = new URL('/sl_papers.json', requestURL.origin).toString();

const { data: papers, pending, error } = useAsyncData<SlPaper[]>(
  'sl-papers',
  () => $fetch(slPapersUrl),
  {
    server: false,
    default: () => []
  }
);

const sections = computed(() => {
  const all = papers.value ?? [];

  const byTask = (task: SlPaper['task']) =>
    all.filter((paper) => paper.task === task);

  return [
    { task: 'Production', title: 'Sign Language Production', papers: byTask('Production') },
    { task: 'Translation', title: 'Sign Language Translation', papers: byTask('Translation') },
    { task: 'Recognition', title: 'Sign Language Recognition', papers: byTask('Recognition') }
  ];
});

const formatPublicationDate = (value: string) => {
  if (!value) return 'Data non disponibile';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat('it-IT', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }).format(date);
};
</script>