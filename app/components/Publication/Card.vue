<template>
    <v-card class="mb-6 full-width" elevation="2">
        <v-card-title class="text-h6">
            {{ publication.title }}
        </v-card-title>
        <v-card-subtitle>
            {{ publication.authors }}
        </v-card-subtitle>
        <v-card-text>
            <p>
                <strong>{{ publication.journal }}</strong>, {{ publication.year }}
            </p>
            <p
                ref="abstractRef"
                class="mt-2"
                :class="{ 'truncate-desc': !showFullAbstract }"
                :style="{ maxHeight: showFullAbstract ? 'none' : `${maxHeight}px` }"
            >
                {{ publication.abstract }}
            </p>
        </v-card-text>
    </v-card>
</template>

<script setup lang="ts">
import type { Publication } from "@/models/publication";

defineProps<{ publication: Publication }>();

const showFullAbstract = ref(false);
const abstractRef = ref<HTMLElement | null>(null);
const maxHeight = 48;

const isTruncated = ref(false);

onMounted(() => {
    if (abstractRef.value) {
        isTruncated.value = abstractRef.value.scrollHeight > maxHeight;
    }
});

const toggleDescription = () => {
    showFullAbstract.value = !showFullAbstract.value;
};

onMounted(() => {
    // Ensure the computed property `isTruncated` is updated after the component is mounted
    if (abstractRef.value) {
        isTruncated.value = abstractRef.value.scrollHeight > maxHeight;
    }
});
</script>

<style scoped>
.truncate-desc {
    line-height: 2;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>