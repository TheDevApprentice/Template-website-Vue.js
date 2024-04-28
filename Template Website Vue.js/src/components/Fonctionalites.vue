<template>
  <div class="container">
    <h2 class="title">FONCTIONNALITÉS</h2>
    <ul class="features-list">
      <li class="container-item">
        <div class="title-item">
          <span class="feature-icon"><img src="@/assets/icon_acomba.png" width="50" height="50"/></span>
          <span class="feature-label">INTÉGRATION</span>
        </div>
        <span class="feature-description">Intégration complète à Acomba et aucune double saisie</span>
      </li>
      <li class="container-item">
        <div class="title-item">
          <span class="feature-icon"><img src="@/assets/icon_bon-travail.png" width="50" height="50"/></span>
          <span class="feature-label">BONS DE TRAVAIL</span>
        </div>
        <span class="feature-description">Inscription d'un bon de travail détaillé en 10 secondes</span>
      </li>
      <li class="container-item">
        <div class="title-item">
          <span class="feature-icon"><img src="@/assets/icon_rendez-vous.png" width="50" height="50"/></span>
          <span class="feature-label">GESTION DES RENDEZ-VOUS</span>
        </div>
        <span class="feature-description">Permet une gestion simple de tous vos rendez-vous avec vos clients</span>
      </li>
      <li class="container-item">
        <div class="title-item">
          <span class="feature-icon"><img src="@/assets/icon_equip-Client.png" width="50" height="50"/></span>
          <span class="feature-label">GESTION DES ÉQUIPEMENTS CLIENTS</span>
        </div>
        <span class="feature-description">Permet de gérer les équipements clients et les garanties</span>
      </li>
      <li class="container-item">
        <div class="title-item">
          <span class="feature-icon"><img src="@/assets/icon_commerce-elec.png" width="50" height="50"/></span>
          <span class="feature-label">GESTION DES RAPPELS CLIENTS</span>
        </div>
        <span class="feature-description">Suivis clients et rappels préventifs</span>
      </li>
      <li class="container-item">
        <div class="title-item">
          <span class="feature-icon"><img src="@/assets/icon_multisite.png" width="50" height="50"/></span>
          <span class="feature-label">COMMERCE ÉLECTRONIQUE</span>
        </div>
        <span class="feature-description">Pour vous aider à gérer des multitudes de produits, aisément et efficacement</span>
      </li>
      <li class="container-item">
        <div class="title-item">
          <span class="feature-icon"><img src="@/assets/icon_rapp-Client.png" width="50" height="50"/></span>
          <span class="feature-label">MOBILITÉ</span>
        </div>
        <span class="feature-description">Gardez le contact en temps réel avec vos techniciens sur la route</span>
      </li>
      <li class="container-item">
        <div class="title-item">
          <span class="feature-icon"><img src="@/assets/icon_mobilite.png" width="50" height="50"/></span>
          <span class="feature-label">GESTION MULTI-SITES</span>
        </div>
        <span class="feature-description">Saine gestion de vos inventaires multisite</span>
      </li>
      <li class="container-item">
        <div class="title-item">
          <span class="feature-icon"><img src="@/assets/icon_hist-Stat.png" width="50" height="50"/></span>
          <span class="feature-label">HISTORIQUE & STATISTIQUES</span>
        </div>
        <span class="feature-description">Historique des réparations et des entretiens par client, technicien et équipement</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.container {
  margin: 0 auto;
  padding: 2rem;
  background-color: #FFFFFF;
  color: black;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 100%;
}
.container-item {
  margin: 0 auto;
  padding: 2rem;
  background-color: #FFFFFF;
  color: black;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 100%;

  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}
.container-item :hover{
  /* box-shadow: 0px 4px 10px rgba(218, 36, 36, 0.628); */
}
.title {
  margin-bottom: 1rem;
  margin: 1rem 0.5rem;
  color: #638DE9;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 4rem;
}

.feature-item {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 20rem;
}

.title-item{
  display: flex;
  flex-direction: row;
  position: relative;
  left: 1rem;
}

.feature-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #638DE9;
}

.feature-label {
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #638DE9;
  margin-left: 1.5rem;
}

.feature-description {
  font-size: 1rem;
  line-height: 1.5;
}
</style>
