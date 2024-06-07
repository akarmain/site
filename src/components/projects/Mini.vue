<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>
        Selenium eduApp парсер
        <a href="https://github.com/akarmain/site" target="_blank">
          <ion-chip class="links">
            <ion-icon :src="logoGithubIcon" color="dark"></ion-icon>
            <ion-label>GitHub</ion-label>
          </ion-chip>
        </a>
      </ion-card-title>
    </ion-card-header>
    <ion-card-content class="description">
      Парсера для сохранения учебных кода с <a href="https://informatics.ru/"
                                               target="_blank">сайта</a> школы программирования. Этот парсер выполняет
      следующие функции:<br><br>

      1. Входит в аккаунт, сохраняя куки для последующих запросов.<br>
      2. Извлекает и сохраняет код уроков в структурированном виде. Каждый урок сохраняется в отдельной папке, название
      которой состоит из даты проведения урока и его темы.<br>
      3. В каждой папке создаются файлы с кодом, название которых соответствует названию задания.<br>
    </ion-card-content>
  </ion-card>
  <ion-card id="school_akarmain">
    <ion-card-header>
      <ion-card-title>
        My school
        <a href="https://school.akarmain.ru/" target="_blank">
          <ion-chip class="links">
            <ion-icon :src="globeIcon" color="dark"></ion-icon>
            <ion-label>Site</ion-label>
          </ion-chip>
        </a>

        <a href="https://github.com/akarmain/my_school" target="_blank">
          <ion-chip class="links">
            <ion-icon :src="logoGithubIcon" color="dark"></ion-icon>
            <ion-label>GitHub</ion-label>
          </ion-chip>
        </a>
      </ion-card-title>
    </ion-card-header>
    <ion-card-content class="description">
      Сайт для решения задач по информатике.<br>
      Для изучения JavaScript я решил выполнять все задания по информатике на этом языке. А чтобы преподавателю было
      удобно проверять мои работы, я создал простой интерфейс сайта на <a href="https://nodejs.org" target="_blank">Node.js</a> и <a href="https://ejs.co/" target="_blank">EJS</a>, с которыми уже имел опыт работы
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
