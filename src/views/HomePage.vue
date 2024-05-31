<template>
  <ion-page>
    <div class="desktop">
      <div class="info">
        <div class="name">
          <h1>Karmaev Andrey</h1>
        </div>
        <TypewriterText :words="['Рython developer', 'Fullstack developer', 'Telegram bot & mini app dev']"
                        :speed="150" :pause="2000"/>
        <AboutMeCode></AboutMeCode>
      </div>
      <div class="index_bg">
        <img src="../media/bg/desktop.png" alt="Фоновое изображение" class="background-image">
      </div>
    </div>

    <div class="mobile">
      <ion-header>
        <div class="index_bg">
          <img src="../media/bg/mobile.png" alt="Фоновое изображение" class="background-image">
        </div>
      </ion-header>
      <ion-content fullscreen>
        <div class="info">
          <div class="name">
            <h1>Karmaev Andrey</h1>
          </div>
          <TypewriterText :words="['Рython developer', 'Fullstack developer', 'Telegram bot & mini app dev']"
                          :speed="150" :pause="2000" class="typewriter-text"/>
          <AboutMeCode></AboutMeCode>
        </div>
      </ion-content>
    </div>
  </ion-page>
</template>

<script setup lang="ts">
import TypewriterText from '../components/utils/TypewriterText.vue';
import AboutMeCode from '../components/utils/AboutMeCode.vue';

import {
  IonContent,
  IonPage,
} from '@ionic/vue';

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');

/* Общие стили */
.info {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0;
}


h1 {
  font-family: 'Ubuntu', sans-serif;
  font-size: 42px;
}

.name {
  height: 30px;
}

.index_bg {
  display: flex;
  justify-content: center;
  align-items: center;
}

.background-image {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  object-fit: cover;
}

/* Стили для десктопной версии */
@media only screen and (min-width: 601px) {
  .desktop {
    margin: 128px 12px 0 12px;
    display: flex;
    justify-content: center;
  }

  .info {
    width: 400px;
    height: 400px;
  }

  TypewriterText {
    font-size: 30px;
  }

  .name {
    width: 400px;
  }

  .mobile {
    display: none;
  }

  .index_bg {
    width: 400px;
    height: 400px;
  }
}

/* Стили для мобильной версии */
@media only screen and (max-width: 600px) {
  .desktop {
    display: none;
  }

  .info {
    width: 100%;
    height: 400px;
    justify-content: center;
  }

  .typewriter-text {
    font-size: 20px;
    text-align: center;
  }

  .name {
    width: 350px;
    text-align: center;
  }

  .index_bg {
    width: 100%;
  }
}

</style>
