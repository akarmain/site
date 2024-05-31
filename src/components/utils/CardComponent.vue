<template>
  <ion-card>
    <ion-card-header class="card-header">
      <div @click="goToProject(title)">
        <ion-card-title>
          <img :src="icon_path" width="60px">
          {{ title }}
          <svg style="margin-left: 8px; fill: #007aff" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
               viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
            <path
                d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
          </svg>

        </ion-card-title>
      </div>
    </ion-card-header>
    <ion-card-content>
      <ion-note color="medium">{{ description }}</ion-note>
      <br>
      <a
          v-for="(url, key) in urls"
          :key="key"
          class="project_url"
          :href="url"
          target="_blank"
      >
        {{ key }}
      </a>
    </ion-card-content>
  </ion-card>
</template>
<script lang="ts">
import {IonCard, IonCardContent, IonCardHeader, IonCardTitle} from '@ionic/vue';
import {defineComponent} from 'vue';
import {useRouter} from 'vue-router';

export default defineComponent({
  name: 'CardComponent',
  props: {
    title: String,
    description: String,
    icon_path: String,
    urls: Object
  },
  setup() {
    const router = useRouter();

    const goToProject = (projectName: string = "None") => {
      router.push({path: `/projects_info/${projectName}`});
    };

    return {
      goToProject
    };
  },
  components: {IonCard, IonCardContent, IonCardHeader, IonCardTitle},
});
</script>


<style scoped>
.card-header {
  display: flex;
  align-items: start;
}

.project_url {
  margin-right: 12px;
}

ion-card {
  min-width: 370px;
  max-width: 550px;
  text-align: start;
  padding: 16px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

ion-card-title {
  font-size: 1.5em;
  font-weight: bold;
  display: flex;
  align-items: center;
}

ion-card-title img {
  margin-right: 8px;
}

ion-card-content {
  font-size: 1em;
  color: #666;
}
</style>
