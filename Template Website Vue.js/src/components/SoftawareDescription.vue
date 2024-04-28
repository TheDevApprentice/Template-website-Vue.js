<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="title">
      <h2>LOGICIEL DE GESTION D'ACTIVITÉ DE SERVICE</h2>
    </div>
    <div class="description">
      <p>Avec plus de 30 ans d’expérience, 
        nous savons quels sont les défis auxquels vous faites face dans la gestion de votre département de service; perte de bons de travail, conflits de rendez-vous, oublis de facturation, oublis de relance, etc. 
        Quel que soit votre secteur d’affaires, 
        Servex est LA solution pour la gestion de votre département de service. Intégré au logiciel comptable Acomba, 
        il permet aux entreprises de gérer leurs activités de service quotidiennes, tant sur la route qu’au bureau.
         Économisez temps et argent et mettez vos énergies là où ça compte.</p>
    </div>
    <div class="image">
      <img src="@/assets/screens2.jpg">
    </div>
  </div>
</template>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 0;
    height: 100%;
    width: 100%;
    background-color: #E8E8E8;
    color: black;
  }

  .title {
    margin: 1rem 5rem 0.5rem 5rem;
    color: #638DE9;
  }

  .description {
    display: flex;
    justify-content: center;
    align-content: center;
    margin: 1rem 5rem 0.5rem 5rem;
  }
  p{
    text-align: center;
    width: 80%;
  }
  .image {
    margin: 1rem 5rem 0.5rem 5rem;
  }
</style>
