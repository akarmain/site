<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Projects</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="content">
        <CardComponent
            title="QR bot"
            description="🤖 Бот для генерации / чтения QR-кодов с изображениями и готовыми шаблонами"
            icon_path="https://akarmain.ru/saved/icons/qr_code.svg"
            :urls="qr_bot_urls"
        />
        <CardComponent
            title="GPT gift"
            description="🛜 Сайт, где вы можете создать анкету и получить идеи подарков с помощью ИИ. Реализованна регистрация, создание анкеты и написаны более 100 готовых предложений – все для упрощения выбора идеального подарка!"
            icon_path="https://akarmain.ru/saved/icons/gpt_gift.svg"
            :urls="gpt_gift_urls"
        />
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {IonHeader, IonToolbar, IonTitle, IonContent, IonPage} from '@ionic/vue';
import CardComponent from '../components/utils/CardComponent.vue';

export default {
  components: {IonHeader, IonToolbar, IonTitle, IonContent, IonPage, CardComponent},
  data() {
    return {
      qr_bot_urls: {
        "/start": "https://t.me/Qr_code_lite_bot?start=web",
        "/web_site": "https://qr-code-bot.ru/"
      },
      gpt_gift_urls: {
        "/web_site": "https://gpt-gift.akarmain.ru/"
      }
    };
  }
};
</script>

<style scoped>
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 16px;
}

.content ::-webkit-scrollbar {
  width: 0;
}


ion-content {
  --padding-start: 16px;
  --padding-end: 16px;
}
</style>
