<template>
    <v-card class="mx-auto" elevation="3" @click="downloadPdf" style="cursor: pointer;">
        <v-row>
            <v-col>
                <v-img v-if="lecture.image" :src="lecture.image" cover></v-img>
            </v-col>
        </v-row>
        <v-divider thickness="3"></v-divider>
        <v-row>
            <v-col>
                <v-card-title class="text-h6">{{ lecture.title }}</v-card-title>
                <v-card-subtitle>{{ lecture.description }}</v-card-subtitle>

                <v-card-actions class="d-flex justify-end">
                    <v-btn
                        color="primary"
                        variant="elevated"
                        @click.stop="downloadPdf"
                        prepend-icon="mdi-download"
                    >
                        Download
                    </v-btn>
                </v-card-actions>
            </v-col>
        </v-row>
    </v-card>
</template>

<script setup lang="ts">
import type { Lecture } from '@/models/lecture'

const props = defineProps<{ lecture: Lecture }>()

function downloadPdf() {
    if (props.lecture.pdf) {
        const link = document.createElement('a');
        link.href = props.lecture.pdf;
        link.download = props.lecture.title + '.pdf';
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}
</script>
