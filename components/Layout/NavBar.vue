<template>
  <v-app-bar :elevation="2" rounded dense height="20" app>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" app temporary>
    <v-list>
      <v-list-item
        v-for="item in navItems"
        :key="item.title"
        @click="scrollToSection(item.to); drawer = false"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(false)
const navItems = [
  { title: 'Home', to: '#home' },
  { title: 'Projects', to: '#projects' },
  { title: 'Contact', to: '#contact' }
]

const isActive = (hash) => {
  return typeof window !== 'undefined' && window.location.hash === hash
}

const scrollToSection = (hash) => {
  if (typeof window !== 'undefined') {
    const el = document.querySelector(hash)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      window.location.hash = hash
    }
  }
}
</script>