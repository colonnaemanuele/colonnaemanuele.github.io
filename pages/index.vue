<template>
  <div class="container">
    <main>
      <section class="hero">
        <div style="height: 40px;"></div>
        <div class="profile-image">
          <!-- Add your profile image here -->
          <img src="/assets/profile.jpeg" alt="Emanuele Colonna" />
        </div>

        <h1>Emanuele Colonna</h1>

        <p class="greeting">Hi <span class="wave">👋</span></p>
        <div class="bio">
          <p>
            I am a PhD student in Computer Science with a focus on Computer
            Vision technologies and research. Currently exploring advancements
            in
            <span class="highlight">Artificial Intelligence</span> and
            <span class="highlight">Machine Learning</span>.
          </p>
          <p>
            My work involves developing innovative solutions using
            <span class="tech">Pythons</span> and
            <span class="tech">PyTorch</span>. I am passionate about
            <span class="highlight">academic research</span>, contributing to
            <span class="highlight">open-source projects</span>, and mentoring
            aspiring developers in the field of technology.
          </p>
        </div>

        <div class="social-links">
          <a
            href="https://github.com/colonnaemanuele"
            target="_blank"
            rel="noopener noreferrer"
          >
          <v-icon size="24">mdi-github</v-icon>
        </a>
          <a
            href="https://www.linkedin.com/in/emanuele-colonna-60b876225/"
            target="_blank"
            rel="noopener noreferrer"
          >
          <v-icon size="24">mdi-linkedin</v-icon>
        </a>
          <a
            href="https://scholar.google.com/citations?user=AQk15FYAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
          <v-icon size="24">mdi-school</v-icon>
        </a>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
const toggleMenu = () => {
  // Add menu toggle functionality here
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Inter", system-ui, -apple-system, sans-serif;
  line-height: 1.5;
  color: #333;
  background-color: white;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
}

.logo {
  font-weight: bold;
  font-size: 1.2rem;
}

.menu-toggle {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.menu-toggle span {
  display: block;
  width: 25px;
  height: 3px;
  background-color: black;
}

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px 0;
}

.profile-image {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 20px;
}

.profile-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.greeting {
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.wave {
  display: inline-block;
  animation: wave 2.5s infinite;
  transform-origin: 70% 70%;
}

.bio {
  max-width: 800px;
  margin-bottom: 30px;
}

.highlight {
  font-weight: bold;
}

.tech {
  font-weight: bold;
}

.social-links {
  display: flex;
  gap: 20px;
  margin-top: 20px;
}

.social-links a {
  color: #000;
  font-size: 24px;
}

.projects {
  padding: 40px 0;
  text-align: center;
}

h2 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.divider {
  position: relative;
  height: 2px;
  background: #eee;
  max-width: 160px;
  margin: 20px auto 40px;
}

.dot {
  position: absolute;
  width: 8px;
  height: 8px;
  background: #333;
  border-radius: 50%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

@keyframes wave {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(14deg);
  }
  20% {
    transform: rotate(-8deg);
  }
  30% {
    transform: rotate(14deg);
  }
  40% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(10deg);
  }
  60% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
