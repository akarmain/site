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
    <a :href="CV_pdf" download="CV_Karmaev_Andrey.pdf" content="pdf">
      <ion-chip class="links">
        <ion-icon :src="filetype_pdf" color="warning"></ion-icon>
        <ion-label>CV</ion-label>
      </ion-chip>
    </a>
  </div>
</template>
<script setup lang="ts">
import {logoGithub} from "ionicons/icons";
import telegramIcon from "@/media/icons/telegram.svg";
import filetype_pdf from "@/media/icons/filetype-pdf.svg";
import CV_pdf from "@/media/download/CV_Karmaev_Andrey_0.pdf";

import {IonChip, IonLabel, IonIcon} from '@ionic/vue';
</script>
<style scoped>

</style>
