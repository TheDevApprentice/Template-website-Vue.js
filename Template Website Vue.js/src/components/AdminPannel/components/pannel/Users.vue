<script setup lang="ts">
  import { useAdminPannelStore } from '@/stores/admin_pannel';
  import UserList from '../user_actions/UserList.vue';

  const adminStore = useAdminPannelStore();
  const handleSearch = (event: InputEvent) => {
    adminStore.updateSearchQuery((event.target as HTMLInputElement).value);
  };

  const clearSearch = () => {
    adminStore.updateSearchQuery('');
  };

  const handleEditUser = () => {
  };

  const handleAddUser = () => {
  };
</script>

<template>
  <div class="option-container">
    <div class="search-bar">
      <input type="text" v-model="adminStore.searchQuery" placeholder="Rechercher un utilisateur..." @input="handleSearch">
      <div class="clear-icon" v-if="adminStore.searchQuery" @click="clearSearch">
        <i class="fas fa-times-circle"></i>
      </div>
    </div>
    <div class="user-actions">
      <div class="button">
        <button class="button edit-button button-edit" @click="handleEditUser">Edit User</button>
      </div>
      <div class="button">
        <button class="button add-button button-add" @click="handleAddUser">Add User</button>
      </div>
    </div>
  </div>
  <div class="description">
    <div class="label-container_name">
      <span class="label">Nom</span>
    </div>
    <div class="label-container_surname">
      <span class="label">Prénom</span>
    </div>
    <div class="label-container_email">
      <span class="label">Email</span>
    </div>
  </div>
  <UserList/>
</template>

<style scoped>

.option-container{
  display: flex;
  flex-direction: row;
  position: relative;
  top: 1rem;
}
.search-bar {
  margin-bottom: 1rem;
  z-index: 10;
}
.search-bar :active{
  border: 1px solid #34e1ff;
}
.search-bar input[type="text"] {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  transition: border-color 0.4s ease;
}
.search-bar input[type="text"] :hover{
  border: 1px solid #34e1ff;
}
.search-bar input[type="text"] :active{
  border: 1px solid #34e1ff;
}
.users-container {
  height: 100%;
  overflow-y: auto;
}
.user-actions{
  margin-top: 0rem;
  width: 60%;
  display: flex;
  flex-direction: row;
}

@media only screen and (max-width: 375px) {
  .search-bar {
    width: 100%;
  }
  .user-actions{
    width: 40%;
  }
}
@media only screen and (max-width: 600px) {
  .button{
    width: 30vw;
  }
  .users-container {
    height: 100%;
    overflow-y: auto;
  }
  .user-actions{
    width: 100vw;
  }
  .search-bar {
    width: 100%;
  }
  .search-bar :active{
    border: 1px solid #34e1ff;
  }
  .search-bar input[type="text"] {
    width: 60vw;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    transition: border-color 0.4s ease;
  }
  .search-bar input[type="text"] :hover{
    border: 1px solid #34e1ff;
  }
  .search-bar input[type="text"] :active{
    border: 1px solid #34e1ff;
  }

}

.button{
  position: relative;
  top: 0.1rem;
  left: -1rem;
  width: 6vw;
  height: 3vh;
  margin: 0 1rem 0 1rem ;
  border: 0px solid black;
  border-radius: 10% 10%;
  cursor: pointer;
  color: #848282;
}
.button-add{
  background-color: #f5f5f5;
}
.button-edit{
  background-color: #f5f5f5;
}
.button-edit:hover{
  background-color: rgba(88, 193, 254, 0.733);
  transition: background-color 0.4s ease;
  color: #fff;
}
.button-add:hover{
  background-color: rgba(0, 249, 0, 0.557);
  transition: background-color 0.4s ease;
  color: #fff;
}
.description {
  display: flex;
  justify-content: flex-start;
  padding: 10px;
  font-weight: bold;
  position: relative;
  top: 0.7rem;
  margin-bottom: 0.5rem;
}
.label-container_name{
  flex:1; 
}
.label-container_surname{
  flex:2; 
}
.label-container_email{
  flex:3; 
}
.users {
  width: 100%;
}
.users ul {
  list-style: none;
  padding: 0;
}
.users li {
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}
.admin {
  background-color: lightblue;
}
.moderator {
  background-color: lightgreen;
}
.user {
  background-color: lightgrey;
}
li[data-user-id='{{ highlightedUser?.id }}'].highlighted {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
.search-bar {
  position: relative;
  width: 20%;
  margin-bottom: 1rem;
  z-index: 10;
}
.search-bar input[type="text"] {
  width: calc(100% - 30px);
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  transition: border-color 0.4s ease;
}
.search-bar input[type="text"]:hover {
  border-color: #34e1ff;
}
.clear-icon {
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
  cursor: pointer;
}
.clear-icon i {
  color: red;
}
</style>