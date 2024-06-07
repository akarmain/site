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
      <img src="@/media/bg/look_like.png">
    </ion-card-header>
    <ion-card-content class="description">
      Это сайт-визитка, созданная для демонстрации моих умений и проектов. Написана на Vue и Ionic, чтобы лучше изучить
      эти технологии для разработки TMA.
      <br>
      <br>
      <h1>Функционал:</h1>
      <ul>
        <li>Страница с моим описанием</li>
        <li>Страница со все мои проекты и описанием каждого</li>
        <li>Страница с навыками</li>
      </ul>
      <br>
      <h2>Стек технологий: <a href="https://vuejs.org/" target="_blank">VUE</a> & <a
          href="https://ionicframework.com/docs" target="_blank">ionic</a></h2>
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
import {globe, logoGithub, logoInstagram, logoTiktok, logoYoutube} from "ionicons/icons";
import botstatIcon from "@/media/icons/bot-add-svgrepo-com.svg";
import telegramIcon from "@/media/icons/telegram.svg";

const logoTiktokIcon = logoTiktok;
const logoInstagramIcon = logoInstagram;
const logoGithubIcon = logoGithub;
const logoYoutubeIcon = logoYoutube;
const globeIcon = globe;
const logoBotstatIcon = botstatIcon;

</script>

<style scoped>
.description {
  color: var(--ion-color-light-contrast);
  font-size: 15px;
}

.youtube-promo {
  margin-top: 8px;
}

hr {
  background-color: var(--ion-color-light-contrast);
}

ul {
  padding-left: 20px;
  margin-top: 0px;
  padding-top: 0px;
}

a {
  text-decoration: none;
}

img {
  margin: auto;
}


ion-card {
  padding: 2px;
}

</style>
