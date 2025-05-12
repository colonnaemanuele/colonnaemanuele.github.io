<template>
    <v-row>
        <v-col>
            <PublicationCard :publication/>
        </v-col>
    </v-row>
</template>
<script lang="ts" setup>
import type { Publication } from "@/models/publication";

defineProps<{ publication: Publication[] }>();
</script>