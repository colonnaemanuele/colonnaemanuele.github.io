<template>
  <v-container fluid>
    <!-- About Me Header -->
    <v-row justify="center" class="mt-10">
      <v-col cols="12" md="8">
        <h1 class="text-center">About Me</h1>
        <v-divider class="my-4"></v-divider>
      </v-col>
    </v-row>

    <!-- Bio Section -->
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card elevation="2" class="pa-6 mb-6">
          <v-row>
            <v-col cols="12" md="4">
              <v-avatar size="200" class="mx-auto d-block">
                <v-img src="assets/profile.jpeg" alt="Profile Image">
                  <template v-slot:placeholder>
                    <v-avatar color="grey lighten-2" size="200">
                      <v-icon large>mdi-account</v-icon>
                    </v-avatar>
                  </template>
                </v-img>
              </v-avatar>
            </v-col>
            <v-col cols="12" md="8">
              <h2 class="text-h4 mb-2">Emanuele Colonna</h2>
              <p class="text-subtitle-1 mb-4">Researcher | Developer</p>
              <p class="text-body-1">
                I am a researcher focused on Image and Video Understanding. My work explores the intersection 
                of Computer Vision and Natural Language Processing with applications in Sign Language domain.
              </p>
              <p class="text-body-1 mt-3">
                Currently, I am PhD Student at Department of Computer Science in Bari. I received my education from 
                University of Study Aldo Moro, Bari, where I specialized in Data Science.
              </p>
              
              <v-chip-group class="mt-4">
                <v-chip small color="primary" text-color="white">3D Computer Vision</v-chip>
                <v-chip small color="primary" text-color="white">Deep Learning</v-chip>
                <v-chip small color="primary" text-color="white">Sign Language</v-chip>
              </v-chip-group>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <!-- Publications Section -->
    <v-row justify="center" class="mt-8">
      <v-col cols="12" md="8">
        <h2 class="text-h4 text-center mb-6">Publications</h2>
        
        <v-card class="mb-6" elevation="2" v-for="(pub, index) in publications" :key="index">
          <v-card-title class="text-h6">
            {{ pub.title }}
          </v-card-title>
          <v-card-subtitle>
            {{ pub.authors }}
          </v-card-subtitle>
          <v-card-text>
            <p><strong>{{ pub.journal }}</strong>, {{ pub.year }}</p>
            <p class="mt-2">{{ pub.abstract }}</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn 
              v-if="pub.doi" 
              text 
              color="primary" 
              :href="`https://doi.org/${pub.doi}`" 
              target="_blank"
            >
              DOI
            </v-btn>
            <v-btn 
              v-if="pub.url" 
              text 
              color="primary" 
              :href="pub.url" 
              target="_blank"
            >
              View Publication
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <Contact/>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      publications: [
        {
          title: "Towards Italian Sign Language Generation for digital humans",
          authors: "E. Colonna, A. Arezzo, D. Roberto, D. Landi, F. Vitulano, G. Vessio, G. Castellano",
          journal: "Eight Workshop on Natural Language for Artificial Intelligence (NL4AI 2024) @AIxIA 2024",
          year: "2024",
          doi: "10.1234/example.567",
          url: "https://www.researchgate.net/profile/Gennaro-Vessio/publication/387398556_Towards_Italian_Sign_Language_Generation_for_digital_humans/links/676bc637fb9aff6eaaebc134/Towards-Italian-Sign-Language-Generation-for-digital-humans.pdf"
        },
      ]
    };
  }
};
</script>