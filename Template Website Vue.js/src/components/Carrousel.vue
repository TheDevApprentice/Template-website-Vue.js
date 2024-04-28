
<script setup lang="ts">
  import { useCarouselStore } from '@/stores/carrousel';
  import { onMounted, onUnmounted } from 'vue';
  import ContactForm from '../components/ContactForm.vue';

  const store = useCarouselStore();
  onMounted(() => {
    store.startCarouselJob();
  });
</script>

<template>
  <div class="carrousel-container">
    <div class="carrousel-background">
      <img v-for="(image, index) in store.imagesJob" :key="index" :src="image.src" :alt="'Image ' + (index + 1)" :style="{ display: index === store.currentIndexJob ? 'block' : 'none' }">
    </div>
    <div class="contact-form">
      <div class="contact">
        <ContactForm />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .carrousel-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 0;
    height: 100vh;
    width: 100%;
  }

  .carrousel-background {
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
    z-index: 1;
  }

  .carrousel-job {
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
    z-index: 4;
  }

  .carrousel-background img {
    width: 100%;
    height: 80vh;
    display: none;
  }

  .carrousel-job img {
    width: 100%;
    height: 90vh;
    display: none;
    z-index: 5;
  }

  .contact-form {
    height: 100%;
    display: grid; 
    place-items: center; 
    place-content: center;
    position: absolute;
    top: 0.7rem;
    right: 4rem;
    z-index: 10;
  }

  .contact {
    height: 100%;
    background-color: transparent;
  }

  @media only screen and (max-width: 600px) {
    .carrousel-background img,
    .carrousel-job img {
      height: 60vh;
    }

    .contact-form {
    position: relative;
    top: initial;
    bottom: 0rem;
    right: 0;
  }
  }
</style>
