<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>
        Edu Helper AI
      </ion-card-title>
      <ion-card-subtitle>
        <a href="https://t.me/hahaton_mshp_bot" target="_blank">
          <ion-chip class="links">
            <ion-icon :src="telegramIcon" color="primary"></ion-icon>
            <ion-label>Bot</ion-label>
          </ion-chip>
        </a>
        <a href="https://github.com/akarmain/hahaton_mshp_TG_bot" target="_blank">
          <ion-chip class="links">
            <ion-icon :src="logoGithubIcon" color="dark"></ion-icon>
            <ion-label>GitHub</ion-label>
          </ion-chip>
        </a>
      </ion-card-subtitle>
    </ion-card-header>
    <ion-card-content class="description">
      Это телеграм-бот, созданный для помощи в учебе. Этот бот использует ChatGPT для ответа на
      вопросы по коду, создания конспектов и объяснения тем, учитывая контекст диалога. Кроме того, бот помогает
      организовать задачи с различными параметрами (название, описание, сложность, крайний срок выполнения) и
      возможностью добавления тегов. Чтобы ученикам было проще разобраться в функционале бота, мы создали инструкцию в
      формате TMA.
      <hr>
      <br>
      Этот проект был разработан в рамках "<a href="https://hackathon.informatics.ru/" target="_blank">Хакатона</a> по
      IT-технологиям от МШП в 2024 году". (<a :href="hackathon_info_2024_pdf" download="hackathon_info_2024.pdf" content="pdf">pdf сайта</a>)<br>Моя роль
      заключалась
      в
      написании кода для бота, с чем я успешно справился за 8 часов. Все, кроме инструкции в формате TMA, было выполнено
      мной.<br>
      <br><br>
      <h1>Функционал:</h1>
      <ul>
        <li>Создание задач с возможностью указания названия, описания, сложности и крайнего срока выполнения.
        </li>
        <li>Просмотр всех задач.</li>
        <li>Удаление задач.</li>
        <li>Создание тегов.</li>
        <li>Прикрепление тегов к задачам.</li>
        <li>Инструкция в формате TMA.</li>
      </ul>
      <br>
      <h1>Стек технологий</h1>
      <ul>
        <li><a href="https://aiogram.dev/" target="_blank">Aiogram</a> - фреймворк для <a
            href="https://core.telegram.org/bots/api" target="_blank">Telegram Bot API</a></li>
        <li><a href="https://www.sqlite.org/" target="_blank">SQLite</a> – для хранения данных</li>
        <li><a href="https://openai.com/chatgpt/" target="_blank">ChatGPT</a> – для анализа вопросов</li>
        <li><a href="https://loguru.readthedocs.io/" target="_blank">Loguru</a> – для логирования ошибок</li>
      </ul>
      <h2>Инструкция в формате TMA написана на React с использованием <a href="https://docs.telegram-mini-apps.com/"
                                                                         target="_blank">@tma.js SDK</a></h2>
      <hr>
      <p style="font-style: italic">PS: Этот проект оказался лучшим и мы получили
        <a :href="diploma_pdf" download="diploma_Karmaev.pdf" content="pdf">дипломы</a> и подарочные сертификаты :)</p>
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
import telegramIcon from "@/media/icons/telegram.svg";
import diploma_pdf from '../../media/download/diploma_Karmaev_compressed.pdf'
import hackathon_info_2024_pdf from "../../media/download/hackathon_info_2024.pdf"

const logoGithubIcon = logoGithub;
</script>

<style scoped>
.description {
  color: var(--ion-color-light-contrast);
  font-size: 15px;
}


hr {
  background-color: var(--ion-color-light-contrast);
}

ul {
  padding-left: 20px;
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
