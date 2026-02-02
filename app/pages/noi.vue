<template>
    <v-container fluid class="pa-4">
        <v-row justify="center">
            <v-col cols="12" md="10" lg="8">
                <v-card elevation="2" class="position-relative">
                    <div class="animate-text">
                        <p class="neon-text">TI AMO</p>
                    </div>
                    <v-img :src="currentPhoto" :alt="`Photo ${currentIndex + 1}`" height="600" contain></v-img>
                </v-card>

                <v-row justify="center" align="center" class="mt-6 mb-6">
                    <v-col cols="auto">
                        <v-btn @click="previousPhoto" icon="mdi-chevron-left"></v-btn>
                    </v-col>
                    <v-col cols="auto">
                        <v-btn @click="nextPhoto" icon="mdi-chevron-right"></v-btn>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'Noi',
    data() {
        return {
            photos: [],
            currentIndex: 0,
        };
    },
    computed: {
        currentPhoto() {
            return this.photos[this.currentIndex];
        },
    },
    methods: {
        nextPhoto() {
            this.currentIndex = (this.currentIndex + 1) % this.photos.length;
        },
        previousPhoto() {
            this.currentIndex = (this.currentIndex - 1 + this.photos.length) % this.photos.length;
        },
    },
    mounted() {
        // Import all images from assets/private folder
        const images = import.meta.glob('../../.data/private/*', {
            eager: true,
            import: 'default',
        });
        
        this.photos = Object.values(images).sort(() => Math.random() - 0.5);
    },
};
</script>

<style scoped>
.animate-text {
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 10;
    animation: bounce 12s infinite linear;
    width: fit-content;
    height: fit-content;
}

.neon-text {
    text-align: center;
    margin: 0;
    font-size: 5rem;
    font-weight: 900;
    letter-spacing: 0.3rem;
    text-transform: uppercase;
    background: linear-gradient(90deg, #ff006e, #ffbe0b, #8338ec, #ff006e);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: colorShift 2s ease infinite, glow 1.5s ease-in-out infinite, flicker 0.15s infinite;
    text-shadow: 
        0 0 10px #ff006e,
        0 0 20px #ffbe0b,
        0 0 30px #8338ec,
        0 0 40px #ff006e;
    filter: brightness(1.5);
    white-space: nowrap;
}

@keyframes bounce {
    0% {
        top: 20px;
        left: 20px;
    }
    6% {
        top: 80px;
        left: 150px;
    }
    12% {
        top: 200px;
        left: 350px;
    }
    18% {
        top: 400px;
        left: 250px;
    }
    24% {
        top: 300px;
        left: 450px;
    }
    30% {
        top: 150px;
        left: 500px;
    }
    36% {
        top: 450px;
        left: 100px;
    }
    42% {
        top: 250px;
        left: 400px;
    }
    48% {
        top: 100px;
        left: 550px;
    }
    54% {
        top: 380px;
        left: 300px;
    }
    60% {
        top: 220px;
        left: 480px;
    }
    66% {
        top: 420px;
        left: 200px;
    }
    72% {
        top: 50px;
        left: 450px;
    }
    78% {
        top: 350px;
        left: 80px;
    }
    84% {
        top: 180px;
        left: 520px;
    }
    90% {
        top: 400px;
        left: 350px;
    }
    100% {
        top: 20px;
        left: 20px;
    }
}

@keyframes colorShift {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

@keyframes glow {
    0%, 100% {
        filter: brightness(1.5) drop-shadow(0 0 20px #ff006e);
    }
    25% {
        filter: brightness(1.8) drop-shadow(0 0 30px #ffbe0b);
    }
    50% {
        filter: brightness(1.6) drop-shadow(0 0 25px #8338ec);
    }
    75% {
        filter: brightness(1.7) drop-shadow(0 0 30px #00f5ff);
    }
}

@keyframes flicker {
    0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
        opacity: 1;
        text-shadow: 
            0 0 10px #ff006e,
            0 0 20px #ffbe0b,
            0 0 30px #8338ec,
            0 0 40px #ff006e;
    }
    20%, 24%, 55% {
        opacity: 0.8;
        text-shadow: 
            0 0 5px #ff006e,
            0 0 10px #ffbe0b,
            0 0 15px #8338ec;
    }
}

@keyframes float {
    0%, 100% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-15px);
    }
}

.cursor-pointer {
    cursor: pointer;
    transition: all 0.3s ease;
}

.cursor-pointer:hover {
    transform: scale(1.05);
}

.gap-2 {
    gap: 0.5rem;
}

</style>