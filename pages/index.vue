<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <v-row justify="center" class="mt-8">
          <v-col cols="12" md="4">
            <v-card class="pa-4" elevation="4">
              <v-row align="center" no-gutters>
                <v-col cols="4" class="d-flex justify-center">
                  <v-avatar size="120">
                    <v-img src="/assets/profile.jpeg" alt="Emanuele Colonna" />
                  </v-avatar>
                </v-col>
                <v-col cols="8">
                  <h2 class="mb-1">Emanuele Colonna</h2>
                  <div class="subtitle-1 mb-2">
                    PhD student — Computer Vision & Deep Learning
                  </div>
                  <div class="d-flex flex-wrap">
                    <v-chip class="ma-1" small>Sign Language</v-chip>
                    <v-chip class="ma-1" small>Deep Learning</v-chip>
                    <v-chip class="ma-1" small>Computer Vision</v-chip>
                    <v-chip class="ma-1" small>Open Source</v-chip>
                  </div>
                </v-col>
              </v-row>

              <v-divider class="my-4" />

              <div class="text-body-1">
                <p>
                  Hi <span class="wave">👋</span> — I work on computer vision
                  and deep learning, developing research and tools in Python
                  and PyTorch. I enjoy mentoring and contributing to
                  open-source.
                </p>
              </div>
              <v-card-actions>
                <ConnectMe />
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" md="8">
            <h1 class="mb-4">News</h1>
            <ul class="news-list">
              <li v-for="(item, i) in news" :key="i">
                <strong class="news-date">{{ item.date }}</strong>
                <div class="news-content" v-html="item.html"></div>
              </li>
            </ul>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-container>
      <v-row class="my-4">
        <v-col class="d-flex justify-end">
          <p class="mono last-updated">Last Updated: {{ lastUpdated }}</p>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script setup>
import { ref } from "vue";
const drawer = ref(false);

const toggleMenu = () => {
  drawer.value = !drawer.value;
};

const lastUpdated = "15/10/2025";

const news = ref([
  {
    date: "September 2025",
    html: 'I have joined the <a href="https://www.ulpgc.es" target="_blank" rel="noopener">Universidad de Las Palmas de Gran Canaria</a> as a visiting researcher at the <a href="https://idetic.ulpgc.es/en/" target="_blank" rel="noopener">Instituto Universitario para el Desarrollo</a> for six months, under the supervision of <strong>Dr. Moisés Diaz</strong>. I look forward to fruitful collaborations and new experiences in Spain! 🇪🇸',
  },
  {
    date: "July 2025",
    html: 'Our work <a href="https://arxiv.org/abs/2407.02075" target="_blank">Label Anything</a> was accepted at <a href="https://ecai2025.org" target="_blank">ECAI 2025</a> in Bologna! 🍝🇮🇹',
  },
  {
    date: "Novembre 2024",
    html: ' I received the Best Paper Award at NL4AI 2024. 🎉',
  },
  {
    date: "Novembre 2024",
    html: 'Our work <em>Towards italian sign language generation for digital humans</em> was accepted at the <a href="http://sag.art.uniroma2.it/NL4AI/" target="_blank" rel="noopener">NL4AI Workshop</a> at <a href="https://aixia2024.events.unibz.it" target="_blank" rel="noopener">AIxIA 2024</a> in Bolzano! 🇮🇹'
  },
  {
    date: 'July 2024',
    html: 'I attended DeepLearn 2024 in Porto, learning about the latest advancements in deep learning. 🇵🇹'
  },
  {
    date: "October 2023",
    html: 'I started my PhD in Computer Science & Mathematics at the <a href="https://www.uniba.it" target="_blank">University of Bari Aldo Moro</a>, where I will work on computer vision and deep learning! 👁️🤖',
  },
  {
    date: "March 2023",
    html: 'I defended my <strong>Master’s thesis</strong> in Deep Learning at the <a href="https://www.uniba.it" target="_blank">University of Bari Aldo Moro</a>! 🇮🇹',
  },
]);
</script>

<style scoped>
  .wave {
    display: inline-block;
    animation: wave 2.5s infinite;
    transform-origin: 70% 70%;
  }

  @keyframes wave {
    0% { transform: rotate(0deg); }
    15% { transform: rotate(14deg); }
    30% { transform: rotate(-8deg); }
    45% { transform: rotate(14deg); }
    60% { transform: rotate(-4deg); }
    75% { transform: rotate(10deg); }
    100% { transform: rotate(0deg); }
  }

  /* News list styles */
  .news-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .news-list li {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 10px 0;
    border-bottom: 1px solid rgba(0,0,0,0.06);
  }
  .news-date {
    font-weight: 700;
    min-width: 140px;
    flex-shrink: 0;
  }
  .news-content {
    flex: 1;
    word-break: break-word;
  }

  /* Responsive: on very small screens let date wrap above content */
  @media (max-width: 600px) {
    .news-list li {
      flex-direction: column;
      align-items: flex-start;
    }
    .news-date {
      min-width: 0;
      margin-bottom: 4px;
    }
  }
</style>
