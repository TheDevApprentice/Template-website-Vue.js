<script setup lang="ts">
</script>

<template>
  <h3>OBTENIR UNE PRÉSENTATION      
    <br /> PERSONNALISÉE
  </h3>
  <br /> 
  <form>
    <div class="form-group">
      <input type="text" id="contactName" name="contactName"  placeholder="Contact" required>
    </div>
    <div class="form-group">
      <input type="text" id="compagny" name="compagny" placeholder="Société"  required>
    </div>
    <div class="form-group">
      <input type="text" id="phone" name="phone" placeholder="Téléphone" required>
    </div>
    <div class="form-group">
      <input type="email" id="email" name="email" placeholder="Courriel" required>
    </div>
    <label class="label_check accept_text"><input name="accepte" id="accepte" type="checkbox" value="oui"> Oui je désire recevoir des informations relatives aux produits, promotions, infolettres de Logiciel Servex.</label>
    <input type="submit" id="button" name="soumettre" value="SOUMETTRE">
    <!-- <button type="submit">Soumettre</button> -->
  </form>
</template>

<style scoped>
  form{
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
    width: 20vw;
    height: 100%;
    background: transparent;
  }
  .form-group {
    margin-bottom: 30px;
  }

  label {
    display: block;
    margin-bottom: 5px;
  }
  h3{
    color: #fff;
    margin-top: 1rem;
  }
  input[type="text"],
  input[type="email"],
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  textarea {
    height: 150px;
  }

input[type="submit"] {
  position: relative;
  right: -4.2rem;
  width: 186px;
  height: 30px;
  padding: 0px;
  margin: 0px;
  color: #fff;
  cursor: pointer;
  background: url("@/assets/blue_form_button.png") 0 0 no-repeat;
}

input[type="submit"]:hover {
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
}

input[type="submit"]::after {
  content: "✓";
  color: #fff;
  font-size: 20px;
  margin-left: 10px;
  transition: all 0.2s ease-in-out;
}

input[type="submit"]:hover::after {
  transform: rotate(360deg);
}

@media screen and (max-width: 768px) {
  form {
    width: 80vw;
    color: black;
  }
  h3{
    color: black;
  }
  input[type="submit"] {
    width: 100%;
    right: 0;
  }
}
</style>
