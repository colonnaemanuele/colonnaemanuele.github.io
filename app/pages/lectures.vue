<template>
  <v-app>
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="12">
          <h2 class="text-h4 text-center mb-8">Lectures</h2>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" md="10">
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
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script setup lang="ts">
const { lectures } = useLectures();
</script>