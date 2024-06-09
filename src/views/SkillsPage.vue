<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>skills</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="content">
        <python></python>
        <web></web>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonPage,
} from '@ionic/vue';
import Python from "@/components/skills/python.vue";
import web from "@/components/skills/web.vue";

export default {
  components: {
    Python,
    web,
    IonHeader, IonToolbar, IonTitle, IonContent, IonPage
  },
};
</script>

<style scoped>
@import "@/theme/basic_card.css";
.example-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
