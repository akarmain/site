<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>
        Сайт для поиска подарков с AI
      </ion-card-title>
      <ion-card-subtitle>
        <a href="https://gpt-gift.akarmain.ru/" target="_blank">
          <ion-chip class="links">
            <ion-icon :src="globeIcon" color="dark"></ion-icon>
            <ion-label>site</ion-label>
          </ion-chip>
        </a>
        <a href="https://github.com/akarmain/GPT-gift" target="_blank">
          <ion-chip class="links">
            <ion-icon :src="logoGithubIcon" color="dark"></ion-icon>
            <ion-label>gitHub</ion-label>
          </ion-chip>
        </a>
        <a href="https://t.me/simple_voting_red" target="_blank">
          <ion-chip class="links">
            <ion-icon :src="telegramIcon" color="primary"></ion-icon>
            <ion-label>channel</ion-label>
          </ion-chip>
        </a>
      </ion-card-subtitle>
      <div class="youtube-promo"
           style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; background: #000;">
        <iframe
            src="https://www.youtube.com/embed/6H1cFuo0klc"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
        </iframe>
      </div>
    </ion-card-header>
    <ion-card-content class="description">
      С помощью сайта вы создаете анкету с вопросами, отправляете её знакомым, и после их прохождения опроса получаете
      список подарков, сформированный моделью ChatGPT-3.5.
      <hr>
      <br><br>
      Это был учебный проект, и его цель заключалась в создании опросника на Django. Но я предложил добавить ИИ...<br>
      <i>Первоначальное название - было Simple Voting Red.</i>
      <br><br>
      В рамках проекта я выполнял роль <b>тимлида</b>. Моя задача заключалась в распределении работы среди участников
      команды, проверке, улучшении и интеграции всех компонентов. Впоследствии я занимался написанием фронтенда сайта
      <br>
      <br>

      <h1>Функционал:</h1>
      <ul>
        <li>При создании и редактирование анкеты с можно добавить вопросов следующих типов: одиночный выбор,
          множественный выбор, открытый вопрос.
        </li>
        <li>Возможность поделиться анкетой или изменить/удалить ее.</li>
        <li>Подборка из более чем 100 подарков для 10 праздников.</li>
        <li>Регистрация и вход на сайт.</li>
        <li>На сайте есть 5 страниц:</li>
        <ul>
          <li>Главная страница</li>
          <li>Все подарки</li>
          <li>Создание/редактирование опроса</li>
          <li>Прохождение опроса</li>
          <li>Просмотр ответов на вопросы</li>
        </ul>
      </ul>
      <br>

      <h1>Стек технологий</h1>
      <ul>
        <li><a href="https://pypi.org/project/Django/" target="_blank">Django</a> – фреймворк для написания бэкенда
          сайта
        </li>
        <li><a href="https://getbootstrap.com/" target="_blank">Bootstrap</a> – для готовых стилей</li>
        <li><a href="https://openai.com/chatgpt/" target="_blank">ChatGPT</a> – для анализа опросов</li>
      </ul>

      <p style="font-style: italic">PS: За проект мы все получили 5+ :)</p>
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
import {globe, logoGithub} from "ionicons/icons";
import telegramIcon from "@/media/icons/telegram.svg";

const logoGithubIcon = logoGithub;
const globeIcon = globe;
</script>

<style scoped>
@import "@/theme/basic_in_card.css";
</style>
