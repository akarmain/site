<template>
  <div class="links">
    <a href="https://github.com/akarmain" target="_blank">
      <ion-chip class="links">
        <ion-icon :icon="logoGithub" color="tertiary"></ion-icon>
        <ion-label>GitHub</ion-label>
      </ion-chip>
    </a>
    <a href="https://t.me/akarmain" target="_blank">
      <ion-chip class="links">
        <ion-icon :src="telegramIcon" color="primary"></ion-icon>
        <ion-label>telegram</ion-label>
      </ion-chip>
    </a>
  </div>
</template>
<script setup lang="ts">
import {logoGithub} from "ionicons/icons";
import telegramIcon from "@/media/icons/telegram.svg";
import {IonChip, IonLabel, IonIcon} from '@ionic/vue';
</script>
<style scoped>

</style>
