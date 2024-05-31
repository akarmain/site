<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button @click="goBack">
            <ion-back-button></ion-back-button>
          </ion-button>
        </ion-buttons>
        <ion-title>{{ projectName }}</ion-title>
      </ion-toolbar>
    </ion-header>


    <ion-content>
      <div class="content" v-if="isQRBot">
        QR - bot
      </div>
      <div class="content" v-if="isGPTgft">
        GPT - gft
      </div>
      <div class="content" v-if="isNone">
        <span style="margin-top: 100px; font-size: 30px; font-weight: bold;">
          I think I'll start developing "{{ projectName }}"
        </span>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {defineComponent, ref, onMounted} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import {IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonBackButton} from '@ionic/vue';

export default defineComponent({
  components: {
    IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonBackButton
  },
  setup() {
    const router = useRouter();
    const route = useRoute();

    const projectName = ref<string>(route.params.projectName as string);
    const isQRBot = ref<boolean>(false);
    const isGPTgft = ref<boolean>(false);
    const isNone = ref<boolean>(true);

    onMounted(() => {
      switch (projectName.value) {
        case "QR bot":
          isQRBot.value = true;
          isNone.value = false;
          break;
        case "GPT gift":
          isGPTgft.value = true;
          isNone.value = false;
          break;
      }
    });

    function goBack() {
      router.push('/projects');
    }

    return {
      projectName,
      isQRBot,
      isGPTgft,
      isNone,
      goBack
    };
  },
});
</script>

<style scoped>
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 16px;
}

</style>
