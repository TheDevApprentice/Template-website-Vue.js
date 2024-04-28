<script setup lang="ts">
  import { ref } from 'vue';
  import Dashboard from './components/pannel/Dashboard.vue';
  import Users from './components/pannel/Users.vue';
  import Seetings from './components/pannel/Seetings.vue';
  import StatisticsPannel from './components/pannel/StatisticsPannel.vue';
  const showComponent = ref(Dashboard)
</script>

<template>
  <div class="adminPanel">
    <aside class="sidebar">
      <ul>
        <li @click="showComponent = Dashboard" class="sidebar-item">
          <i class="fas fa-accessible-icon"></i>
          <p>Dashboard</p>
        </li>
        <li @click="showComponent = Users" class="sidebar-item">
          <i class="fas fa-user"></i>
          <p>Users</p>
        </li>
        <li @click="showComponent = StatisticsPannel" class="sidebar-item">
          <i class="fas fa-chart-bar"></i>
          <p>Statistics</p>
        </li>
        <li @click="showComponent = Seetings" class="sidebar-item">
          <i class="fas fa-cog"></i>
          <p>Settings</p>
        </li>
      </ul>
    </aside>
    <main>
      <component class="component" :is="showComponent"></component>
    </main>
  </div>
</template>

<style scoped>
  .adminPanel {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: black;
  }

  .sidebar {
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    width: 13%;
    height: 100vh;
    color: black;
  }

  .sidebar ul {
    list-style: none;
    padding: 0;
    color: black;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    transition: background-color 0.3s ease;
  }
  .sidebar-item {
    margin-bottom: 10px;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-content: flex-start;
    transition: background-color 0.3s ease;
    color: black;
  }

  .sidebar-item:hover {
    background-color: #caf0f8;
    color: #085eb9;
  }
  .sidebar-item:hover i {
    background-color: #caf0f8;
    color: #007bff;
  }

  .sidebar-item.active {
    background-color: #007bff;
    color: white;
  }
  .sidebar-item.active:hover {
    background-color: #0056b3;
  }
  .sidebar-item i {
    margin-right: 10px;
    height: 2vh;
  }
  main {
    width: 100%;
    height: 100vh;
    max-height: 100vh;
    max-width: 100vw;
    padding: 20px;
    color: black;
  }

  @media only screen and (max-width: 600px) {
    .adminPanel {
      flex-direction: column;
      height: auto;
    }
    .sidebar {
      position: relative;
      left: -1.1rem;
      width: 100%;
      height: auto;
    }
    .sidebar ul {
      flex-wrap: none;
    }
    .sidebar-item {
      width: 60%;
    }
    .sidebar-item i {
      display: none;
    }
    
    main {
      width: 100%;
      position: relative;
      left: -1.2rem;
      margin-top: 20px;
    }
    .sidebar ul {
      flex-wrap: wrap;
      justify-content: flex-start;
    }

    .sidebar-item {
      width: calc(50% - 10px);
    }
  }
</style>
