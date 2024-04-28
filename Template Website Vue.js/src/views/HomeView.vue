<script setup lang="ts">
  import SoftawareDescription from '@/components/SoftawareDescription.vue';
  import Fonctionalites from '@/components/Fonctionalites.vue';
  import TheWelcome from '@/components/TheWelcome.vue';
import Carrousel from '@/components/Carrousel.vue';
</script>

<template>
  <div class="index">
    <div class="sectionCenter">
      <SoftawareDescription />
    </div>
    <div class="sectionCenter">
      <Fonctionalites />
    </div>
  </div>
</template>

<style scoped>
  .sectionCenter {
    flex: 1;
    width: 90%;
    height: 100vh;
  }
  .index {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 1024px) {
    .index {
      display: flex;
      margin: auto;
      color: black; 
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }

</style>