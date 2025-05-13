<template>
    <v-col>
        <v-form>
            <v-text-field label="Your Name" outlined required prepend-icon="mdi-account"></v-text-field>
            <v-text-field label="Your Email" outlined required type="email" prepend-icon="mdi-email"></v-text-field>
            <v-textarea label="Your Message" outlined rows="5" required prepend-icon="mdi-comment-text"></v-textarea>
            <v-btn color="primary" block class="mt-2">
                Send Message
            </v-btn>
        </v-form>
    </v-col>
</template>