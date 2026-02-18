<template>
  <v-app>
    <!-- Fixed Top Navigation -->
    <v-app-bar app flat color="white" elevation="2">
      <v-container>
        <v-row align="center" no-gutters>
          <v-spacer />
          <v-col cols="auto" class="hidden-sm-and-down">
            <v-btn
              v-for="section in sections"
              :key="section.id"
              :variant="activeSection === section.id ? 'tonal' : 'text'"
              :color="activeSection === section.id ? 'primary' : 'default'"
              @click="scrollToSection(section.id)"
              size="large"
              class="mx-2 text-none"
              rounded
            >
              {{ section.name }}
            </v-btn>
          </v-col>
          <v-col cols="auto" class="hidden-md-and-up">
            <v-app-bar-nav-icon @click="drawer = !drawer" />
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <!-- Mobile Navigation Drawer -->
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list>
        <v-list-item
          v-for="section in sections"
          :key="section.id"
          :active="activeSection === section.id"
          @click="handleNavClick(section.id)"
          rounded="xl"
        >
          <v-list-item-title>{{ section.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <NuxtPage />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
const drawer = ref(false);
const activeSection = ref("about");

const sections = [
  { id: "about", name: "About" },
  { id: "news", name: "News" },
  { id: "publications", name: "Publications" },
  { id: "teaching", name: "Teaching" },
  { id: "contact", name: "Contact" },
];

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const yOffset = -80;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

const handleNavClick = (sectionId: string) => {
  scrollToSection(sectionId);
  drawer.value = false;
};

// Composition API style - Intersection Observer
const observer = ref<IntersectionObserver | null>(null);

watchEffect(() => {
  if (process.client) {
    observer.value = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection.value = entry.target.id;
          }
        });
      },
      {
        rootMargin: "-100px 0px -66% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element && observer.value) {
        observer.value.observe(element);
      }
    });
  }
});

onUnmounted(() => {
  if (observer.value) {
    observer.value.disconnect();
  }
});
</script>