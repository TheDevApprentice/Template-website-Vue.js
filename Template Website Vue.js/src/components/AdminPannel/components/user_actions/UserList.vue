<script setup lang="ts">
  import { useAdminPannelStore } from '@/stores/admin_pannel';
  import type { User } from '@/stores/types/User';
  import { computed, ref, watchEffect } from 'vue';

  const adminStore = useAdminPannelStore();
  const searchQuery = computed(() => {
    return adminStore.searchQuery;
  });
  const filteredUsers = computed(() => {
    return adminStore.filteredUsers;
  });
  const users = computed(() => {
    return adminStore.users;
  });

  const handleDeleteUser = (user: User) => {
  };

  const displayedUsers = ref<User[]>([]);

  watchEffect(() => {
    displayedUsers.value = searchQuery.value ? filteredUsers.value : users.value;
  });

  const highlightedUser = ref<User | null>(null);

  const highlightUser = (user: User) => {
    highlightedUser.value = user;
  };

  const unhighlightUser = () => {
    highlightedUser.value = null;
  };
</script>

<template>
  <div class="users-container">
    <div class="users">
      <ul v-if="displayedUsers.length > 0">
        <li v-for="user in displayedUsers" :key="user.id" :class="user.userType" :data-user-id="user.id" @mouseover="highlightUser(user)" @mouseleave="unhighlightUser">
          <span class="name">{{ user.name }}</span>
          <span class="surname">{{ user.surname }}</span>
          <span class="email">{{ user.email }}</span>
          <button @click="handleDeleteUser(user)" class="delete-button">
            <i class="fas fa-trash-alt"></i>
          </button>
        </li>
      </ul>
      <p class="serach_query_message_no_user" v-else-if="searchQuery && filteredUsers.length === 0">Aucun utilisateur correspondant à votre recherche.</p>
    </div>
  </div>
</template>

<style scoped>
.serach_query_message_no_user {
  position: relative;
  display: flex;
  align-items: center; 
  justify-content: center;
  height: 100%;
}

@media screen and (max-width: 1100px) {
  .users {
    height: 50vh;
  }
}

@media screen and (min-width: 1200px) {
  .users {
    height: 58vh;
  }
}
.users ul {
  list-style: none;
  padding: 0;
}

.users li {
  height: 6vh;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.admin {
  background-color: #89c2d9;
}

.moderator {
  background-color: #caf0f8;
}

.user {
  background-color: #a9d6e5;
}

.name {
  flex: 1;
}

.surname{
  flex: 2;
}

.email {
  flex: 3;
}

.delete-button {
  background-color: transparent;
  border: 0.5px solid red;
  padding: 0.3rem;
  border-radius: 25% 25%;
  cursor: pointer;
}

.delete-button:hover {
  color: rgb(250, 77, 77);
  font-size: 15px;
  background-color: #eadeded6;
  box-shadow: 0 0 7px rgba(255, 0, 0, 0.571);
}

.delete-button i {
  color: red;
  font-size: 14px;
}

@media screen and (max-width: 768px) {
  .search-bar {
    margin-top: 1.5rem;
  }
}
</style>