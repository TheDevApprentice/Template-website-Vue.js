<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  import Carrousel from './components/Carrousel.vue';
  import ContactButtons from './components/ContactButtons.vue';
  import { ref } from 'vue';
  
  const modalOpen = ref(false);
  const modalContent = ref('');

  function showModal(content: string) {
    modalContent.value = content;
    modalOpen.value = true;
  }

  function hideModal() {
    modalOpen.value = false;
  }

</script>

<template>
  <div class="site">
    <div class="header">
      <header>
        <img alt="Vue logo" class="logo" src="@/assets/servex.png" width="525" height="500" />
        <div class="wrapper">
          <nav>
            <RouterLink class="router-link-active" to="/products">Produits</RouterLink>
            <RouterLink class="router-link-active" to="/admin">Admin</RouterLink>
            <RouterLink class="router-link-active" to="/about">Partenariat</RouterLink>
            <RouterLink class="router-link-active" to="/about">Services</RouterLink>
            <RouterLink class="router-link-active" to="/about">Contact</RouterLink>
            <RouterLink class="support" to="/about">Support</RouterLink>
          </nav>
        </div>
        <div class="wrapper">
        </div>
        <div class="wrapper_buttons_header">
          <ContactButtons />
        </div>
      </header>
    </div>

    <Carrousel />

    <div class="router">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
  .router{
    /* margin-top: 40vh; */
    height: 100vh;
    min-height: 100%;
    max-height: 100vh;
  }

  .site {
    background-color: white;
    display: flex;
    flex-direction: column;
    flex: 1;
    text-decoration: none;
    width: 100%;
    height: 100vh;
  }

  .header {
    flex-shrink: 0;
    background-color: white;
    padding: 20px;
    
  }

  .header header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .main {
    display: flex;
    margin: 0.25rem auto;
  }

  .wrapper {
    display: flex;
    margin: 0 auto;
    align-content: center;
    justify-content: center;
  }
  .wrapper_buttons_header{
    display: flex;
    margin: 0 -2rem 0 auto;
    align-content: center;
    justify-content: center;

  }
  .logo {
    width: 200px;
    height: auto;
    position: relative;
    top: -0.5rem;
    left: 1.5rem;
  }

  nav {
    display: flex;
    align-content: center;
    position: relative;
    top: 0.20rem;
    left: 5rem;
  }

  nav a {
    display: flex;
    align-self: center;
    margin-right: 20px;
    text-decoration: none;
    color: #050e10; 
    background-color: transparent;
    font-weight: bold;
  }
  nav a :hover {
    color: #007bff;
    background-color:  #007bff;
    border-radius: 50px 50px;
    box-shadow: 0 0 10px rgba(0, 123, 255, 0.5);
  }

  .support {
    color: blue;
    background-color: transparent;
    border: 1px solid blue;
    border-radius: 25% 25% 25% 25%;
    padding: 0.4rem;
  }
  .support :hover {
    color: rgb(0, 179, 255);
    background-color: transparent;
    border: 1px solid rgb(0, 149, 255);
  }
  @media (min-width: 1024px) {
    header {
      display: flex;
      place-items: center;
      padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
      margin: 0 2rem 0 0;
    }

    header .wrapper {
      display: flex;
      place-items: flex-end;
      flex-wrap: wrap;
    }
  }
</style>