<template>
  <v-app>
    <v-container fluid>
      <v-row justify="center" class="mt-4">
        <v-col cols="12" md="9">
          <h2 class="text-h4 text-center mb-6">Publications</h2>
          <PublicationCard
            v-for="(publication, index) in publications"
            :key="index"
            :publication="publication"
            class="mb-6"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script setup lang="ts">
const { publications } = usePublications();
</script>