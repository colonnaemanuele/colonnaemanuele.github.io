<template>
  <v-container fluid>
    <v-col>
      <v-row justify="center" class="mt-4">
        <v-col cols="12" md="8">
          <h1 class="text-center">About Me</h1>
          <v-divider class="my-4"></v-divider>
        </v-col>
      </v-row>

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
      <v-row justify="center" class="mt-10">
        <v-col cols="12">
            <h2 class="text-h4 text-center mb-4">Contact Me</h2>
            <p class="text-center mb-6">
                Feel free to reach out to me for collaborations, research inquiries, or any other questions.
            </p>
        </v-col>
        <v-col cols="12" >

            <Contact />
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>