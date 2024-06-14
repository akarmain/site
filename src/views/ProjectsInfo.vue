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
      <div class="content">
        <div v-if="isQRBot">
          <QR_bot></QR_bot>
        </div>
        <div class="content" v-if="isGPTgft">
          <GPT_gft></GPT_gft>
        </div>
        <div class="content" v-if="isEduHelperAI">
          <Edu_Helper_AI></Edu_Helper_AI>
        </div>
        <div class="content" v-if="isSite">
          <Site></Site>
        </div>
        <div class="content" v-if="isMini">
          <Mini></Mini>
        </div>
        <div class="content" v-if="isNone">
        <span style="margin-top: 100px; font-size: 30px; font-weight: bold;">
          I think I'll start developing "{{ projectName }}"
        </span>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {defineComponent, ref, onMounted} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonPage,
  IonBackButton,
  IonIcon,
  IonChip,
  IonLabel
} from '@ionic/vue';
import {IonButtons, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle} from '@ionic/vue';
import QR_bot from "@/components/projects/QR_bot.vue";
import GPT_gft from "@/components/projects/GPT_gft.vue";
import Edu_Helper_AI from "@/components/projects/Edu_Helper_AI.vue";
import Site from "@/components/projects/Site.vue";
import Mini from "@/components/projects/Mini.vue";

export default defineComponent({
  components: {
    Mini,
    Site,
    Edu_Helper_AI,
    GPT_gft,
    QR_bot,
    IonLabel, IonChip, IonIcon,
    IonHeader,
    IonToolbar,
    IonButton,
    IonTitle,
    IonContent,
    IonPage,
    IonButtons,
    IonBackButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const projectName = ref<string>(route.params.projectName as string);
    const isQRBot = ref<boolean>(false);
    const isGPTgft = ref<boolean>(false);
    const isSite = ref<boolean>(false);
    const isEduHelperAI = ref<boolean>(false);
    const isMini = ref<boolean>(false);
    const isNone = ref<boolean>(false);
    console.log(route.path);

    onMounted(() => {
      switch (projectName.value) {
        case "QR bot":
          isQRBot.value = true;
          break;
        case "GPT gift":
          isGPTgft.value = true;
          break;
        case "Edu Helper AI":
          isEduHelperAI.value = true;
          break;
        case "Site":
          isSite.value = true;
          break;
        case "Mini":
          isMini.value = true;
          break;
        default:
          isNone.value = true;
      }
    });

    function goBack() {
      router.push('/projects');
    }

    return {
      projectName,
      isQRBot,
      isGPTgft,
      isEduHelperAI,
      isSite,
      isMini,
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
  padding: 4px;
  max-width: 750px;
  margin: auto;
}


</style>
