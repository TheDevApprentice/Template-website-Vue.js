<script setup lang="ts">
  import Statistics2 from '../Statistics2.vue';
</script>

<template>
  <div class="dashboard">
    <div class="statistics">
      <Statistics2 />
    </div>
  </div>
</template>

<style scoped>

.dashboard {
  height: 100%;
  width: 100%;
  color: black;
  padding: 20px;
}

.statistics{
  display: flex;
  flex-direction: column;
  height: 60vh;
  margin-bottom: 1%;
}
</style>