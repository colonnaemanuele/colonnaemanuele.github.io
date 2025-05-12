<template>
    <v-row justify="center" class="mt-10">
        <v-col cols="12" md="8">
            <h2 class="text-h4 text-center mb-4">Contact Me</h2>
            <p class="text-center mb-6">
                Feel free to reach out to me for collaborations, research inquiries, or any other questions.
            </p>
        </v-col>
    </v-row>

    <v-row justify="center">
        <v-col cols="12" md="6">
            <v-form>
                <v-text-field label="Your Name" outlined required prepend-icon="mdi-account"></v-text-field>
                <v-text-field label="Your Email" outlined required type="email" prepend-icon="mdi-email"></v-text-field>
                <v-textarea label="Your Message" outlined rows="5" required
                    prepend-icon="mdi-comment-text"></v-textarea>
                <v-btn color="primary" block class="mt-4">
                    Send Message
                </v-btn>
            </v-form>
        </v-col>
    </v-row></template>