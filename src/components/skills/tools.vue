<script setup lang="ts">

import {
  IonAccordion,
  IonAccordionGroup, IonAvatar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle, IonItem,
  IonLabel
} from "@ionic/vue";

import {QR_bot, Edu_Helper_AI, Mini} from '@/components/utils/ProjectUrls';
import {useRouter} from "vue-router";

const router = useRouter();
const goToProject = (projectName = "None") => {
  router.push({path: `/projects_info/${projectName}`});
};
</script>

<template>
  <ion-card>
    <ion-card-header class="card-header">
      <div>
        <ion-card-title>
          <img src="@/media/icons/tools.svg"
               alt="VUE icon"
               width="60px">
          Tools
        </ion-card-title>
      </div>
    </ion-card-header>
    <ion-card-content class="description">
      <ion-note class="description">Инструменты, необходимые для работы вне зависимости от языка программирования:
      </ion-note>
      <hr>
      <ion-accordion-group expand="inset">
        <ion-accordion value="first">
          <ion-item slot="header" color="light">
            <ion-label>Технологии, которые использую в работе</ion-label>
          </ion-item>
          <div class="ion-padding" slot="content">
            <ion-item>
              <ion-label>
                <div class="technology">
                  <ion-avatar>
                    <img alt="Git logo" src="@/media/icons/git.png"/>
                  </ion-avatar>
                  <div class="tech-info">
                    <a href="https://git-scm.com/" target="_blank">Git</a>
                    <div class="project-links">
                      <a href="/projects" class="chip-link">Каждый проект</a>
                    </div>
                  </div>
                </div>
              </ion-label>
            </ion-item>


            <ion-item>
              <ion-label>
                <div class="technology">
                  <ion-avatar>
                    <img alt="figma logo" src="@/media/icons/figma.png"/>
                  </ion-avatar>
                  <div class="tech-info">
                    <a href="https://www.figma.com/" target="_blank">Figma</a>
                    <div class="project-links">
                      <a href="/projects" class="chip-link">Каждый проект</a>
                    </div>
                  </div>
                </div>
              </ion-label>
            </ion-item>

            <ion-item>
              <ion-label>
                <div class="technology">
                  <ion-avatar>
                    <img alt="JavaScript logo" src="@/media/icons/GitHub.png"/>
                  </ion-avatar>
                  <div class="tech-info">
                    <a href="https://github.com/" target="_blank">GitHub</a>
                    <div class="project-links">
                      <a href="/projects" class="chip-link">Каждый проект</a>
                    </div>
                  </div>
                </div>
              </ion-label>
            </ion-item>

            <ion-item>
              <ion-label>
                <div class="technology">
                  <ion-avatar>
                    <img alt="JavaScript logo" src="@/media/icons/docker.png"/>
                  </ion-avatar>
                  <div class="tech-info">
                    <a href="https://www.docker.com/" target="_blank">Docker</a>
                    <div class="project-links">
                      <div @click="goToProject(QR_bot)" class="chip-link">QR bot</div>
                      <div @click="goToProject(Edu_Helper_AI)" class="chip-link">Edu Helper AI</div>
                    </div>
                  </div>
                </div>
              </ion-label>
            </ion-item>
          </div>

        </ion-accordion>
      </ion-accordion-group>
    </ion-card-content>
  </ion-card>
</template>

<style scoped>
@import "@/theme/basic_card.css";

</style>
