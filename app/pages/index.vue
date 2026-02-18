<template>
  <div>
    <!-- About Section - Hero Style -->
    <section id="about" ref="aboutRef">
      <v-container class="py-16" fluid>
        <!-- First Row: Avatar and Info -->
        <v-row no-gutters class="mb-8">
          <!-- Left Column: Avatar -->
          <v-col
            cols="12"
            md="6"
            lg="4"
            class="d-flex flex-column align-center justify-center pa-8 pa-md-12"
          >
            <v-avatar size="280" class="mb-8 elevation-12">
              <v-img
                src="/assets/profile.jpeg"
                alt="Emanuele Colonna"
                cover
              />
            </v-avatar>

            <ConnectMe />
          </v-col>

          <!-- Right Column: Bio and Info -->
          <v-col cols="12" md="6" lg="8" class="pa-8 pa-md-12">
            <h1 class="text-h2 font-weight-bold mb-3 text-gradient">
              Emanuele Colonna
            </h1>
            <div class="text-h5 text-primary mb-4 font-weight-medium">
              PhD Student
            </div>
            <p class="text-h6 text-medium-emphasis mb-6 font-weight-light">
              University of Bari Aldo Moro · Department of Computer Science
            </p>

            <v-divider class="my-6" />

            <div class="text-body-1 mb-6 text-justify">
              <p class="mb-4">
                I am a PhD student in
                <a
                  href="https://en.wikipedia.org/wiki/Computer_vision"
                  target="_blank"
                  class="text-primary text-decoration-none font-weight-bold"
                >Computer Science & Mathematics</a>
                in the Department of Computer Science at the
                <a
                  href="https://www.uniba.it"
                  target="_blank"
                  class="text-primary text-decoration-none font-weight-bold"
                >University of Bari Aldo Moro</a>, where I work on
                <strong>computer vision</strong> and <strong>deep learning</strong>,
                under the supervision of leading researchers.
              </p>
              <p>
                I am currently pursuing a PhD funded by a fellowship within the
                framework of the Italian <em>"D.M. n. 118/23"</em> under the
                PNRR, Mission 4, Component 1, Investment 4.1 on the PhD project
                <em
                  >"Analysis and Valorization of Digitized Artistic Heritage
                  using Artificial Intelligence techniques"</em>. I am currently
                working in the CILab lab.
              </p>
            </div>
          </v-col>
        </v-row>

        <!-- Second Row: Research Interests -->
        <v-row no-gutters>
          <v-col cols="12" class="pa-8 pa-md-12">
            <h3 class="text-h4 font-weight-bold mb-8 text-primary">
              Research Interests
            </h3>
            <v-chip-group>
              <v-chip color="primary" variant="outlined" size="large"
                >Computer Vision</v-chip>
              <v-chip color="primary" variant="outlined" size="large"
                >Multimodal Deep Learning</v-chip>
              <v-chip color="primary" variant="outlined" size="large"
                >Vision and Language</v-chip>
              <v-chip color="primary" variant="outlined" size="large"
                >Generative Models</v-chip>
              <v-chip color="primary" variant="outlined" size="large"
                >MLLMs</v-chip>
              <v-chip color="primary" variant="outlined" size="large"
                >Diffusion Models</v-chip>
              <v-chip color="primary" variant="outlined" size="large"
                >Artwork Analysis</v-chip>
              <v-chip color="primary" variant="outlined" size="large"
                >Sign Language</v-chip>
            </v-chip-group>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- News Section -->
    <section id="news" ref="newsRef">
      <v-sheet color="grey-lighten-5" class="py-16">
        <v-container fluid>
          <v-row no-gutters>
            <v-col cols="12">
              <div class="text-center mb-10 px-8 px-md-12">
                <h2 class="text-h3 font-weight-bold mb-3">Latest News</h2>
                <p class="text-h6 text-medium-emphasis">
                  Stay updated with my recent activities
                </p>
              </div>
            </v-col>
          </v-row>

          <v-row no-gutters>
            <v-col cols="12" class="px-8 px-md-12">
              <v-timeline side="end" align="start" truncate-line="both">
                <v-timeline-item
                  v-for="(item, i) in news"
                  :key="i"
                  dot-color="primary"
                  size="small"
                  elevation="2"
                >
                  <template v-slot:opposite>
                    <v-chip color="primary" variant="tonal" size="small">
                      {{ item.date }}
                    </v-chip>
                  </template>
                  <div class="text-body-1" v-html="item.html" />
                </v-timeline-item>
              </v-timeline>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>
    </section>

    <!-- Publications Section -->
    <section id="publications" ref="publicationsRef">
      <v-container fluid class="py-16">
        <v-row no-gutters>
          <v-col cols="12">
            <div class="text-center mb-10 px-8 px-md-12">
              <h2 class="text-h3 font-weight-bold mb-3">Publications</h2>
              <p class="text-h6 text-medium-emphasis">
                Research contributions and academic work
              </p>
            </div>
          </v-col>
        </v-row>

        <v-row no-gutters>
          <v-col cols="12" class="px-8 px-md-12">
            <PublicationCard
              v-for="(publication, index) in publications"
              :key="index"
              :publication="publication"
              class="mb-6"
            />
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Teaching Section -->
    <section id="teaching" ref="teachingRef">
      <v-sheet color="grey-lighten-5" class="py-16">
        <v-container fluid>
          <v-row no-gutters>
            <v-col cols="12">
              <div class="text-center mb-10 px-8 px-md-12">
                <h2 class="text-h3 font-weight-bold mb-3">
                  Teaching & Lectures
                </h2>
                <p class="text-h6 text-medium-emphasis">
                  Educational materials and course content
                </p>
              </div>
            </v-col>
          </v-row>

          <v-row no-gutters class="px-8 px-md-12">
            <v-col
              v-for="(lecture, index) in lectures"
              :key="index"
              cols="12"
              md="6"
              class="pa-3"
            >
              <LectureCard :lecture="lecture" />
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>
    </section>

    <!-- Contact Section -->
    <section id="contact" ref="contactRef">
      <v-container fluid class="py-16">
        <v-row no-gutters>
          <v-col cols="12" class="px-8 px-md-12">
            <v-card elevation="0" rounded="xl" class="pa-10">
              <div class="text-center mb-8">
                <v-icon size="80" color="primary" class="mb-4"
                  >mdi-email</v-icon>
                <h2 class="text-h3 font-weight-bold mb-4">Get in Touch</h2>
                <p class="text-h6 text-medium-emphasis mb-6">
                  Feel free to reach out for collaborations, questions, or just
                  to connect!
                </p>
              </div>
              <ConnectMe />
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script setup lang="ts">
const { publications } = usePublications();
const { lectures } = useLectures();

const news = ref([
  {
    date: "Sep 2025",
    html: 'I have joined the <a href="https://www.ulpgc.es" target="_blank" class="text-primary text-decoration-none">Universidad de Las Palmas de Gran Canaria</a> as a visiting researcher at the <a href="https://idetic.ulpgc.es/en/" target="_blank" class="text-primary text-decoration-none">Instituto Universitario para el Desarrollo</a> for six months, under the supervision of <strong>Dr. Moisés Diaz</strong>. I look forward to fruitful collaborations and new experiences in Spain! 🇪🇸',
  },
  {
    date: "Jul 2025",
    html: 'Our work <a href="https://arxiv.org/abs/2407.02075" target="_blank" class="text-primary text-decoration-none">Label Anything</a> was accepted at <a href="https://ecai2025.org" target="_blank" class="text-primary text-decoration-none">ECAI 2025</a> in Bologna! 🍝🇮🇹',
  },
  {
    date: "Nov 2024",
    html: 'Our work <em>Towards Italian Sign Language Generation for Digital Humans</em> was accepted at the <a href="http://sag.art.uniroma2.it/NL4AI/" target="_blank" class="text-primary text-decoration-none">NL4AI Workshop</a> at <a href="https://aixia2024.events.unibz.it" target="_blank" class="text-primary text-decoration-none">AIxIA 2024</a> in Bolzano, and received the <strong>Best Paper Award</strong>! 🏆🇮🇹',
  },
  {
    date: "Jul 2024",
    html: "I attended DeepLearn 2024 in Porto, learning about the latest advancements in deep learning. 🇵🇹",
  },
  {
    date: "Oct 2023",
    html: 'I started my PhD in Computer Science & Mathematics at the <a href="https://www.uniba.it" target="_blank" class="text-primary text-decoration-none">University of Bari Aldo Moro</a>, where I will work on computer vision and deep learning! 👁️🤖',
  },
  {
    date: "Mar 2023",
    html: 'I defended my <strong>Master\'s thesis</strong> in Deep Learning at the <a href="https://www.uniba.it" target="_blank" class="text-primary text-decoration-none">University of Bari Aldo Moro</a>! 🇮🇹',
  },
]);
</script>

<style scoped>
.text-gradient {
  background: linear-gradient(135deg, #2e7d32 0%, #1b5e20 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>