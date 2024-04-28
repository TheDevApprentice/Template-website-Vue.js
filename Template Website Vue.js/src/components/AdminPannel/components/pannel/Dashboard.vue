<script setup lang="ts">
  import Statistics from '../Statistics.vue';
  import Users from './Users.vue';
</script>

<template>
  <div class="dashboard">
    <div class="statistics">
      <Statistics />
    </div>
    <div class="users-container">
      <div class="users-comp">
        <Users />
      </div>
    </div>
  </div>
</template>

<style scoped>
.users-container{
  position: relative;
  top: -6.5rem;
}

.dashboard {
  width: 100%;
  color: black;
  padding: 20px;
}
.users-comp {
  width: 100%;
}

.user-actions {
  display: flex;
  width: 100%;

}
.button {
  height: 4.4vh;
  width: 6vw;
  background: transparent;
  font-size: 16px;
  color: black;
  margin-right: 1rem;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #f5f5f5;
}

.delete-button {
  color: white;
  background-color: #ff0000;
}

.delete-button:hover {
  background-color: #cc0000;
}

.edit-button {
  color: white;
  background-color: #5175f7;
}

.edit-button:hover {
  background-color: #0056b3;
}

.add-button {
  color: white;
  background-color: #28a745;
}

.add-button:hover {
  background-color: #218838;
}

.statistics{
  height: 19vh;
  margin-bottom: 1%;
}
</style>