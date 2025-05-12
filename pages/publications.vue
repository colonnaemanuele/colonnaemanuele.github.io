<template>
    <v-row>
        <v-col>
            <PublicationsCard :publications />
        </v-col>
    </v-row>
</template>
<script lang="ts" setup>
import type { Publication } from "@/models/publication";

defineProps<{ publications: Publication[] }>();
</script>