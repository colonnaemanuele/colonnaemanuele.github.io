<template>
  <v-app>
    <v-col>
      <v-main>
        <v-container>
          <v-row justify="center">
            <v-col cols="16" md="8" class="text-center">
              <v-avatar size="120">
                <v-img src="/assets/profile.jpeg" alt="Emanuele Colonna" />
              </v-avatar>
              <h1 class="mt-4">Emanuele Colonna</h1>
              <p class="text-h5">Hi <span class="wave">👋</span></p>
              <p>
                I am a PhD student in Computer Science with a focus on Computer
                Vision technologies and research. Currently exploring advancements
                in <span class="font-weight-bold">Artificial Intelligence</span> and
                <span class="font-weight-bold">Machine Learning</span>.
              </p>
              <p>
                My work involves developing innovative solutions using
                <span class="font-weight-bold">Python</span> and
                <span class="font-weight-bold">PyTorch</span>. I am passionate about
                <span class="font-weight-bold">academic research</span>, contributing to
                <span class="font-weight-bold">open-source projects</span>, and mentoring
                aspiring developers in the field of technology.
              </p>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
      <ConnectMe />
    </v-col>
    <v-footer>
      <v-container fluid class="text-right">
        <p style="font-family: monospace;">Last Updated: 13/05/2025</p>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';
const drawer = ref(false);

const toggleMenu = () => {
  drawer.value = !drawer.value;
};
</script>

<style scoped>
.wave {
  display: inline-block;
  animation: wave 2.5s infinite;
  transform-origin: 70% 70%;
}
</style>