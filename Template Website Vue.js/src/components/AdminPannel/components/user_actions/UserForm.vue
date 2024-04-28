<script setup lang="ts">
  import { ref } from 'vue';

  const formData = ref({
    name: '',
    email: '',
    password: '',
    role: 'user',
  });

  const submitForm = () => {
    console.log('Formulaire soumis avec succès ! Données :', formData.value);
    resetForm();
  };

  const resetForm = () => {
    formData.value.name = '';
    formData.value.email = '';
    formData.value.password = '';
    formData.value.role = 'user';
  };
</script>

<template>
  <div class="user-form">
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Nom :</label>
        <input type="text" id="name" v-model="formData.name" required>
      </div>
      <div class="form-group">
        <label for="email">Email :</label>
        <input type="email" id="email" v-model="formData.email" required>
      </div>
      <div class="form-group">
        <label for="password">Mot de passe :</label>
        <input type="password" id="password" v-model="formData.password" required>
      </div>
      <div class="form-group">
        <label for="role">Rôle :</label>
        <select id="role" v-model="formData.role" required>
          <option value="user">Utilisateur</option>
          <option value="admin">Administrateur</option>
          <option value="moderator">Modérateur</option>
        </select>
      </div>
      <div class="form-group">
        <button type="submit">Ajouter Utilisateur</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.user-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
}

input[type="text"],
input[type="email"],
input[type="password"],
select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

button[type="submit"] {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #0056b3;
}
</style>
