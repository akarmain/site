<script setup lang="ts">

import {IonCard, IonCardContent, IonCardHeader, IonCardTitle} from "@ionic/vue";
</script>

<template>
  <ion-card>
    <ion-card-header class="card-header">
      <div>
        <ion-card-title>
          <img src="https://v3.ru.vuejs.org/logo.png"
               alt="VUE icon"
               width="60px">
          Web (Vue, js, html, css)
        </ion-card-title>
      </div>
    </ion-card-header>
    <ion-card-content class="description">
      <ion-note class="description">info web info web info web info web info web info web info web info web
      </ion-note>
      <hr>
      <ul>
        <li>None</li>
        <li>None</li>
      </ul>
    </ion-card-content>
  </ion-card>
</template>

<style scoped>
@import "@/theme/basic_card.css";

</style>
