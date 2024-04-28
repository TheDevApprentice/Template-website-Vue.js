<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
// import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <div id="templateDocu">
    <WelcomeItem>
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>GESTION ACTIVITÉ DE SERVICE</template>
      <a href="https://vuejs.org/" target="_blank" rel="noopener">
        SERVEX
      </a>
      <br />
      SERVEX, le logiciel de
      gestion pour vos
      activités de service
      quel que soit votre
      secteur d’affaires.
      <br />
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <ToolingIcon />
      </template>
      <template #heading>GESTION ATELIER MÉCANIQUE</template>

      <a href="https://vitejs.dev/guide/features.html" 
         target="_blank" 
         rel="noopener"
      >SERVEX MÉCANIQUE</a>
      <br />
      SERVEX MÉCANIQUE,
      le logiciel améliorant
      la gestion quotidienne
      de votre atelier
      mécanique
      <br />

      More instructions are available in <code>README.md</code>.
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <EcosystemIcon />
      </template>
      <template #heading>GESTION D'INVENTAIRE</template>

      <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">SERVEX ENTREPÔT</a>
      <br />
      SERVEX ENTREPÔT,
      le logiciel qui simplifie
      la gestion journalière de
      vos stocks et inventaires
      qu'ils soient locaux
      ou délocalisés
      <br />
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <CommunityIcon />
      </template>
      <template #heading>AUTRES MODULES DE GESTION</template>

      <a href="https://chat.vuejs.org" target="_blank" rel="noopener">AUTRES MODULES SERVEX</a>
      <br />
      Les MODULES SERVEX optimisent
      la gestion des activités de votre entreprise et l'efficacité de votre travail face à la réalité
      de tous les jours.
      <br />
    </WelcomeItem>
  </div>
</template>

<style scoped>
  #templateDocu {
    display: flex;
    flex-direction: row;
    color: black; 
    max-width: 80vw;
    max-height: 100vh;
    /* width: 100%;
    height: 20vh; */
    display: flex;
    align-items: center;
    justify-items: center;
  }
  a{
    color: #638DE9;
  }
  @media (min-width: 1024px) {
    .index {
      display: flex;
      flex-direction: column;
      margin: auto;
      color: black; 
      /* min-height: 100vh; */
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>