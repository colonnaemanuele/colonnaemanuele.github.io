<template>
  <v-app-bar density='compact' scroll-behavior="hide" :style="{ padding: '0 8px', minHeight: '48px' }"
  >
    <v-app-bar-nav-icon
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>
  </v-app-bar>

  <v-navigation-drawer
    v-model="drawer"
    temporary
  >
    <v-list nav>
      <v-list-item
        prepend-icon="mdi-home-city"
        title="Home"
        value="home"
        @click="navigateTo('/')"
      ></v-list-item>
      <v-list-item disabled
        prepend-icon="mdi-hammer-wrench"
        title="Projects"
        value="projects"
        @click="navigateTo('/projects')" 
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-human-male-board"
        title="Lectures"
        value="lectures"
        @click="navigateTo('/lectures')" 
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-book-open-page-variant"
        title="Publications"
        value="publications"
        @click="navigateTo('/publications')"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-contacts"
        title="Contact"
        value="contact"
        @click="navigateTo('/contact')"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
const drawer = ref(false);
const group = ref("");

watch(group, () => {
  drawer.value = false;
});
</script>
