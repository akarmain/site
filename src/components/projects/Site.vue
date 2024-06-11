<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>
        Этот сайт
      </ion-card-title>
      <ion-card-subtitle>
        <a href="https://github.com/akarmain/site" target="_blank">
          <ion-chip class="links">
            <ion-icon :src="logoGithubIcon" color="dark"></ion-icon>
            <ion-label>GitHub</ion-label>
          </ion-chip>
        </a>
      </ion-card-subtitle>
      <img alt="look_like" src="@/media/bg/look_like.png">
    </ion-card-header>
    <ion-card-content class="description">
      Это сайт с открытым исходным кодом, создан для предстовления моих проектов и предсавляющий моё партфолио.
      <br>
      <br>
      <h1>Функционал:</h1>
      <ul>
        <li>Страница с моим описанием</li>
        <li>Страница со все мои проекты и описанием каждого</li>
        <li>Страница с навыками</li>
      </ul>
      <br>
      <h1>Стек технологий: <a href="https://vuejs.org/" target="_blank">VUE</a> & <a
          href="https://ionicframework.com/docs" target="_blank">ionic</a></h1>
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonChip,
  IonIcon,
  IonLabel
} from "@ionic/vue";
import {logoGithub} from "ionicons/icons";
const logoGithubIcon = logoGithub;

</script>

<style scoped>
@import "@/theme/basic_in_card.css";
</style>
