<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>
        Selenium eduApp парсер
        <a href="https://github.com/akarmain/Save_Informatics-EduApp_Code" target="_blank">
          <ion-chip class="links">
            <ion-icon :src="logoGithubIcon" color="dark"></ion-icon>
            <ion-label>GitHub</ion-label>
          </ion-chip>
        </a>
      </ion-card-title>
    </ion-card-header>
    <ion-card-content class="description">
      Парсер для сохранения скриптов с <a href="https://informatics.ru/" target="_blank">сайта</a> школы программирования. Он выполняет
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
      удобно проверять мои работы, я создал простой интерфейс сайта на <a href="https://nodejs.org" target="_blank">Node.js</a>
      и <a href="https://ejs.co/" target="_blank">EJS</a>, с которыми уже имел опыт работы
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonChip,
  IonIcon,
  IonLabel
} from "@ionic/vue";
import {globe, logoGithub} from "ionicons/icons";

const logoGithubIcon = logoGithub;
const globeIcon = globe;

</script>

<style scoped>
@import "@/theme/basic_in_card.css";
</style>
