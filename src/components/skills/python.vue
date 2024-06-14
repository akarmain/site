<template>
  <ion-card>
    <ion-card-header class="card-header">
      <div>
        <ion-card-title>
          <img
              alt="Python icon"
              src="https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/files/python-logo-only.svg"
              width="60px">
          Python
        </ion-card-title>
      </div>
    </ion-card-header>
    <ion-card-content class="description">
      <ion-note class="description">Мой первый и самый любимый язык программирования. Начал изучать его в 2019 году на
        специальных курсах и за 5 лет вышел на продвинутый уровень.
      </ion-note>
      <hr>
      <ion-accordion-group expand="inset">
        <ion-accordion value="first">
          <ion-item slot="header" color="light">
            <ion-label>Технологии, которые использую в работе</ion-label>
          </ion-item>
          <div class="ion-padding" slot="content">
            <!-- Django -->
            <ion-item>
              <ion-label>
                <div class="technology">
                  <ion-avatar>
                    <img alt="Django logo" src="@/media/icons/django.png"/>
                  </ion-avatar>
                  <div class="tech-info">
                    <a href="https://www.djangoproject.com/" target="_blank">Django</a>
                    <div class="project-links">
                      <div @click="goToProject(GPT_gift)" class="chip-link">GPT gift</div>
                    </div>
                  </div>
                </div>
              </ion-label>
            </ion-item>

            <!-- FastAPI -->
            <ion-item>
              <ion-label>
                <div class="technology">
                  <ion-avatar>
                    <img alt="Fast API logo" src="@/media/icons/fastapi.svg"/>
                  </ion-avatar>
                  <div class="tech-info">
                    <a href="https://fastapi.tiangolo.com/" target="_blank">FastAPI</a>
                    <div class="project-links">
                      <div @click="goToProject(QR_bot)" class="chip-link">QR bot</div>
                    </div>
                  </div>
                </div>
              </ion-label>
            </ion-item>

            <!-- Pytest -->
            <ion-item>
              <ion-label>
                <div class="technology">
                  <ion-avatar>
                    <img alt="Pytest logo" src="@/media/icons/pytest.png"/>
                  </ion-avatar>
                  <div class="tech-info">
                    <a href="https://docs.pytest.org/" target="_blank">Pytest</a>
                    <div class="project-links">

                    </div>
                  </div>
                </div>
              </ion-label>
            </ion-item>

            <!-- SQLite -->
            <ion-item>
              <ion-label>
                <div class="technology">
                  <ion-avatar>
                    <img alt="SQLite logo" src="@/media/icons/SQLite.png"/>
                  </ion-avatar>
                  <div class="tech-info">
                    <a href="https://docs.python.org/3/library/sqlite3.html" target="_blank">SQLite</a>
                    <div class="project-links">
                      <div @click="goToProject(QR_bot)" class="chip-link">QR bot</div>
                      <div @click="goToProject(GPT_gift)" class="chip-link">GPT gift</div>
                    </div>
                  </div>
                </div>
              </ion-label>
            </ion-item>

            <!-- Aiogram 3 -->
            <ion-item>
              <ion-label>
                <div class="technology">
                  <ion-avatar>
                    <img alt="Aiogram logo" src="@/media/icons/aiogram.png"/>
                  </ion-avatar>
                  <div class="tech-info">
                    <a href="https://aiogram.dev" target="_blank">Aiogram 3</a>
                    <div class="project-links">
                      <div @click="goToProject(QR_bot)" class="chip-link">QR bot</div>
                      <div @click="goToProject(Edu_Helper_AI)" class="chip-link">Edu Helper AI</div>
                    </div>
                  </div>
                </div>
              </ion-label>
            </ion-item>

            <!-- Aiogram-dialog -->
            <ion-item>
              <ion-label>
                <div class="technology">
                  <ion-avatar>
                    <img alt="aiogram_dialog logo" src="@/media/icons/aiogram_dialog.jpg"/>
                  </ion-avatar>
                  <div class="tech-info">
                    <a href="https://aiogram-dialog.readthedocs.io/en/stable/" target="_blank">Aiogram-dialog</a>
                    <div class="project-links">
                      <div @click="goToProject(QR_bot)" class="chip-link">QR bot</div>
                    </div>
                  </div>
                </div>
              </ion-label>
            </ion-item>

            <!-- Yookassa -->
            <ion-item>
              <ion-label>
                <div class="technology">
                  <ion-avatar>
                    <img alt="yookassa logo" src="@/media/icons/pay.png"/>
                  </ion-avatar>
                  <div class="tech-info">
                    <a href="https://yookassa.ru/" target="_blank">Yookassa</a>
                    <div class="project-links">
                      <div @click="goToProject(QR_bot)" class="chip-link">QR bot</div>

                    </div>
                  </div>
                </div>
              </ion-label>
            </ion-item>

            <!-- pyTelegramBotAPI -->
            <ion-item>
              <ion-label>
                <div class="technology">
                  <ion-avatar>
                    <img alt="pyTelegramBotAPI logo" src="@/media/icons/pyTelegramBotAPI.png"/>
                  </ion-avatar>
                  <div class="tech-info">
                    <a href="https://github.com/eternnoir/pyTelegramBotAPI" target="_blank">pyTelegramBotAPI</a>
                    <div class="project-links">
                      <div @click="goToProject(QR_bot)" class="chip-link">QR bot</div>
                    </div>
                  </div>
                </div>
              </ion-label>
            </ion-item>

            <!-- Pillow -->
            <ion-item>
              <ion-label>
                <div class="technology">
                  <ion-avatar>
                    <img alt="Pillow logo" src="@/media/icons/pillow.png"/>
                  </ion-avatar>
                  <div class="tech-info">
                    <a href="https://python-pillow.org/" target="_blank">Pillow</a>
                    <div class="project-links">
                      <div @click="goToProject(QR_bot)" class="chip-link">QR bot</div>
                    </div>
                  </div>
                </div>
              </ion-label>
            </ion-item>

            <!-- loguru -->
            <ion-item>
              <ion-label>
                <div class="technology">
                  <ion-avatar>
                    <img alt="loguru logo" src="@/media/icons/loguru.png"/>
                  </ion-avatar>
                  <div class="tech-info">
                    <a href="https://github.com/Delgan/loguru" target="_blank">Loguru</a>
                    <div class="project-links">
                      <a href="/projects" class="chip-link">Каждый проект</a>
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

<script setup lang="ts">

import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonLabel,
  IonItem,
  IonAvatar,
  IonAccordion,
  IonAccordionGroup
} from "@ionic/vue";

import {GPT_gift, QR_bot, Edu_Helper_AI} from '@/components/utils/ProjectUrls';
import {useRouter} from "vue-router";

const router = useRouter();
const goToProject = (projectName = "None") => {
  router.push({path: `/projects_info/${projectName}`});
};
</script>

<style scoped>
@import "@/theme/basic_card.css";
</style>
