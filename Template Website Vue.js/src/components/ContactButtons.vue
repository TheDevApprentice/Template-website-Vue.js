<script setup lang="ts">
  import { ref } from 'vue';

  const openYoutube = ref(() => {
    window.open("https://www.youtube.com/channel/UCB2IfRMLENt9hqvQOkzZBGw/videos", "_blank");
  });
  const openLinkedin = ref(() => {
    window.open("https://www.linkedin.com/company/logiciel-servex/", "_blank");
  });
  const openFacebook = ref(() => {
    window.open("https://www.facebook.com/logicielservex", "_blank");
  });
  const openPhone = ref(() => {
  });

  defineEmits(['open-youtube', 'open-linkedin', 'open-facebook', 'open-phone']);
</script>

<template>
  <div class="button-container">
    <a href="https://www.youtube.com/channel/UCB2IfRMLENt9hqvQOkzZBGw/videos" class="youtube" target="_blank" @click.prevent="openYoutube">
      <i class="fab fa-youtube"></i>
    </a>
    <a href="https://www.linkedin.com/company/logiciel-servex/" class="linkedin" target="_blank" @click.prevent="openLinkedin">
      <i class="fab fa-linkedin-in"></i>
    </a>
    <a href="https://www.facebook.com/logicielservex" class="facebook" target="_blank" @click.prevent="openFacebook">
      <i class="fab fa-facebook"></i>
    </a>
    <a href="#" class="phone" target="_blank" @click.prevent="openPhone">
      <i class="fas fa-phone"></i>
    </a>
  </div>
</template>

<style scoped>
.button-container {
  display: flex;
  gap: 1rem;
  align-content: center;
  height: 100%;
  width: 100%;
  position: relative;
  top: 0rem;
  left: 4rem;
}

.button-container a {
  display: flex;
  align-content: center;
  text-decoration: none;
  color: #333;
  font-size: 2rem;
  height: 2rem;
  width: 100%;
  position: relative;
  top: 0.3rem;
}
.button-container a:hover {
  color: #007bff;
  background-color: transparent;
  border-radius: 50px 50px;
  box-shadow: 0 0 10px rgba(0, 123, 255, 0.5);
}

.fab, .fas {
  font-size: 1.5rem;
  margin-right: 0rem;
  padding: 0.15rem;
}
</style>
