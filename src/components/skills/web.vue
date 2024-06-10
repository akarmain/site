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
</script>

<template>
  <ion-card>
    <ion-card-header class="card-header">
      <div>
        <ion-card-title>
          <img src="@/media/icons/web.png"
               alt="VUE icon"
               width="60px">
          Web
        </ion-card-title>
      </div>
    </ion-card-header>
    <ion-card-content class="description">
      <ion-note class="description">В 2022 году прошел курсы от МШП, где освоил HTML, CSS и JavaScript, а также серверную разработку на Node.js. В настоящее время интересуюсь созданием Telegram Mini Apps — мини-приложений внутри Telegram, которые расширяют функциональность обычных ботов.
      </ion-note>
      <hr>
      <ion-accordion-group expand="inset">
        <ion-accordion value="first">
          <ion-item slot="header" color="light">
            <ion-label>Технологии, которые использую в работе</ion-label>
          </ion-item>
          <div class="ion-padding" slot="content">
            <!-- JS -->
            <ion-item>
              <ion-label>
                <div class="technology">
                  <ion-avatar>
                    <img alt="JavaScript logo" src="@/media/icons/JS.png"/>
                  </ion-avatar>
                  <div class="tech-info">
                    <a href="https://ru.wikipedia.org/wiki/JavaScript" target="_blank">JavaScript</a>
                    <div class="project-links">
                      <a href="/projects_info/QR bot" class="chip-link">QR bot</a>
                      <a href="/projects_info/GPT gift" class="chip-link">GPT gift</a>
                      <a href="/projects_info/Mini#school_akarmain" class="chip-link">My school</a>
                    </div>
                  </div>
                </div>
              </ion-label>
            </ion-item>

            <ion-item>
              <ion-label>
                <div class="technology">
                  <ion-avatar>
                    <img alt="JavaScript logo" src="@/media/icons/node_js.png"/>
                  </ion-avatar>
                  <div class="tech-info">
                    <a href="https://nodejs.org/en" target="_blank">Node.js</a>
                    <div class="project-links">
                      <a href="/projects_info/Mini#school_akarmain" class="chip-link">My school</a>
                    </div>
                  </div>
                </div>
              </ion-label>
            </ion-item>

            <!-- iconic -->
            <ion-item>
              <ion-label>
                <div class="technology">
                  <ion-avatar>
                    <img alt="ionic logo" src="@/media/icons/ionic.png"/>
                  </ion-avatar>
                  <div class="tech-info">
                    <a href="https://ionicframework.com/" target="_blank">Ionic</a>
                    <div class="project-links">
                      <a href="/projects_info/Site" class="chip-link">Site</a>
                    </div>
                  </div>
                </div>
              </ion-label>
            </ion-item>

            <!-- HTML -->
            <ion-item>
              <ion-label>
                <div class="technology">
                  <ion-avatar>
                    <img alt="HTML logo" src="@/media/icons/html.png"/>
                  </ion-avatar>
                  <div class="tech-info">
                    <a href="https://ru.wikipedia.org/wiki/HTML" target="_blank">HTML</a>
                    <div class="project-links">
                      <a href="/projects_info/QR bot" class="chip-link">QR bot</a>
                      <a href="/projects_info/GPT gift" class="chip-link">GPT gift</a>
                      <a href="/projects_info/Mini#school_akarmain" class="chip-link">My school</a>
                    </div>
                  </div>
                </div>
              </ion-label>
            </ion-item>

            <!-- CSS -->
            <ion-item>
              <ion-label>
                <div class="technology">
                  <ion-avatar>
                    <img alt="CSS logo" src="@/media/icons/css.png"/>
                  </ion-avatar>
                  <div class="tech-info">
                    <a href="https://ru.wikipedia.org/wiki/CSS" target="_blank">CSS</a>
                    <div class="project-links">
                      <a href="/projects_info/QR bot" class="chip-link">QR bot</a>
                      <a href="/projects_info/GPT gift" class="chip-link">GPT gift</a>
                    </div>
                  </div>
                </div>
              </ion-label>
            </ion-item>

            <!-- bootstrap -->
            <ion-item>
              <ion-label>
                <div class="technology">
                  <ion-avatar>
                    <img alt="bootstrap logo" src="@/media/icons/bootstrap.png"/>
                  </ion-avatar>
                  <div class="tech-info">
                    <a href="https://getbootstrap.com/" target="_blank">Bootstrap</a>
                    <div class="project-links">
                      <a href="/projects_info/GPT gift" class="chip-link">GPT gift</a>
                      <a href="/projects_info/Mini#school_akarmain" class="chip-link">My school</a>
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
