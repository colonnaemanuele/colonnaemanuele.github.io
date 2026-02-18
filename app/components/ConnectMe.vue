<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters justify="center" class="mb-6">
      <v-col cols="auto">
        <v-btn
          href="https://github.com/colonnaemanuele"
          target="_blank"
          rel="noopener noreferrer"
          icon="mdi-github"
          variant="flat"
          size="x-large"
          rounded="circle"
          title="GitHub"
        />
      </v-col>

      <v-col cols="auto">
        <v-btn
          href="https://www.linkedin.com/in/emanuele-colonna-60b876225/"
          target="_blank"
          rel="noopener noreferrer"
          icon="mdi-linkedin"
          variant="flat"
          size="x-large"
          rounded="circle"
          title="LinkedIn"
        />
      </v-col>

      <v-col cols="auto">
        <v-btn
          href="https://scholar.google.com/citations?user=AQk15FYAAAAJ&hl=en"
          target="_blank"
          rel="noopener noreferrer"
          icon="mdi-school"
          variant="flat"
          size="x-large"
          rounded="circle"
          title="Google Scholar"
        />
      </v-col>
    </v-row>

    <v-row no-gutters justify="center">
      <v-col cols="auto">
        <v-btn
          href="https://discord.com/users/carpi_diem"
          target="_blank"
          rel="noopener noreferrer"
          icon
          variant="flat"
          size="x-large"
          rounded="circle"
          title="Discord"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            role="img"
            aria-hidden="true"
            style="width: 24px; height: 24px; fill: currentColor;"
          >
            <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.2 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.06.05-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.85 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.85 2.12-1.89 2.12z"/>
          </svg>
        </v-btn>
      </v-col>

      <v-col cols="auto">
        <v-btn
          href="mailto:emanuele.colonna@uniba.it"
          icon="mdi-email-outline"
          variant="flat"
          size="x-large"
          rounded="circle"
          title="Email"
        />
      </v-col>

      <v-col cols="auto">
        <v-btn
          href="https://huggingface.co/cilabuniba"
          target="_blank"
          rel="noopener noreferrer"
          icon
          variant="flat"
          size="x-large"
          rounded="circle"
          title="HuggingFace"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            role="img"
            aria-hidden="true"
            style="width: 24px; height: 24px; fill: currentColor;"
          >
            <path d="M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M15.5,11C16.33,11 17,10.33 17,9.5C17,8.67 16.33,8 15.5,8C14.67,8 14,8.67 14,9.5C14,10.33 14.67,11 15.5,11M8.5,11C9.33,11 10,10.33 10,9.5C10,8.67 9.33,8 8.5,8C7.67,8 7,8.67 7,9.5C7,10.33 7.67,11 8.5,11M12,17.5C14.33,17.5 16.31,16.04 17.11,14H6.89C7.69,16.04 9.67,17.5 12,17.5Z" />
          </svg>
        </v-btn>
      </v-col>

      <v-col cols="auto">
        <v-btn
          href="./cv.pdf"
          download="Emanuele_Colonna_CV.pdf"
          icon="mdi-file-pdf-box"
          variant="flat"
          size="x-large"
          rounded="circle"
          title="Download CV"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
</script>