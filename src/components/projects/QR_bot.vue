<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>
        Telegram-бот для работы с QR-кодами
      </ion-card-title>
      <ion-card-subtitle>
        <a href="https://t.me/Qr_code_lite_bot?start=web" target="_blank">
          <ion-chip class="links">
            <ion-icon :src="telegramIcon" color="primary"></ion-icon>
            <ion-label>bot tg</ion-label>
          </ion-chip>
        </a>
        <a href="https://qr-code-bot.ru/" target="_blank">
          <ion-chip class="links">
            <ion-icon :src="globeIcon" color="dark"></ion-icon>
            <ion-label>site</ion-label>
          </ion-chip>
        </a>
        <a href="https://www.youtube.com/channel/UCo-r4nuMq_uhtw8jCuGt0hA" target="_blank">
          <ion-chip class="links">
            <ion-icon :src="logoYoutubeIcon" color="tertiary"></ion-icon>
            <ion-label>YouTube</ion-label>
          </ion-chip>
        </a>
        <a href="https://www.instagram.com/qrcodebot" target="_blank">
          <ion-chip class="links">
            <ion-icon :src="logoInstagramIcon" color="tertiary"></ion-icon>
            <ion-label>site</ion-label>
          </ion-chip>
        </a>
        <a href="https://www.tiktok.com/@qr_bot_tg" target="_blank">
          <ion-chip class="links">
            <ion-icon :src="logoTiktokIcon" color="tertiary"></ion-icon>
            <ion-label>site</ion-label>
          </ion-chip>
        </a>
        <a href="https://botstat.io/@Qr_code_lite_bot" target="_blank">
          <ion-chip class="links">
            <ion-icon :src="logoBotstatIcon" color="dark"></ion-icon>
            <ion-label>site</ion-label>
          </ion-chip>
        </a>
        <a href="https://github.com/akarmain/QR_code_bot_site" target="_blank">
          <ion-chip class="links">
            <ion-icon :src="logoGithubIcon" color="dark"></ion-icon>
            <ion-label>site</ion-label>
          </ion-chip>
        </a>
      </ion-card-subtitle>

      <div class="youtube-promo"
           style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; background: #000;">
        <iframe
            src="https://www.youtube.com/embed/A-P5qvctews"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
        </iframe>
      </div>
    </ion-card-header>
    <ion-card-content class="description">
      Этот бот предназначен для работы с QR-кодами. Он генерирует цветные QR-коды, QR-коды с изображением и Tetris
      QR-коды. Он поддерживает шаблоны для создание QR-кодов для визиток, телефонных номеров, ссылок, координат и
      писем. Бот обладает функционалом TMA-приложения для сканирования и настройки параметров. Часть
      функционала является платной, оплатить можно картой мир или криптой.<br>Он будет полезен
      маркетологам, дизайнерам, типографам и всем, кто нуждается в быстром создании QR-кодов без лишних хлопот.
      <br>
      <br>
      Все, что связано с ботом, было придумано и разработано исключительно мной, на что у меня имеется <a href="https://fips.ru/EGD/071d29ae-f144-4d56-b3d2-edcd5fb38d70" target="_blank">патент</a>.
      <hr>
      <br>
      <br>
      <h1>Все возможности</h1>
      <ul>
        <li>Бот локализирован на 3 языка: русский, английский, немецкий</li>
        <li>/help отправит подробную инструкция по использованию внутри бота.</li>
        <li>Можно отправки сообщений администраторам через бота.</li>
        <li>Можно копировать текст под QR-кодом по нажатию.</li>
        <li>Ссылки выделяются в отдельные кнопки под сообщением для удобного открытия.</li>
        <li>При наличии HTML-тегов в QR-коде разметка отключается.</li>
        <li>Если текст QR-кода превышает 800 символов, он отправляется как отдельный файл</li>
        <li>Tetris QR-коды бывают двух типов: "грибок" и "сердце"</li>
        <li>При использовании шаблона "на ваш телеграм" Если у пользователя нет аватарки и имени пользователя
          (username), бот отправит предупреждение. A Если отсутствует только аватарка, будет создан обычный QR-код из
          имени пользователя.
        </li>
        <li>Все статические файлы локализованы и не загружаются повторно на серверы Telegram при каждом отправлении.
        </li>
      </ul>

      <h1>Стек технологий</h1>
      <h2>Бот разработан на <a href="https://www.python.org/" target="_blank">Python 3.12</a> & <a
          href="https://aiogram.dev/" target="_blank">aiogram 3</a> с использованием
        следующих библиотек:</h2>
      <ul>
        <li><a href="https://fastapi.tiangolo.com/" target="_blank">FastAPI</a> – для передачи данных о сохраненных
          параметрах в TMA
        </li>
        <li><a href="https://www.sqlite.org/" target="_blank">SQLite</a> – база данных</li>
        <li><a href="https://pypi.org/project/aiocryptopay/" target="_blank">aiocryptopay</a> / <a
            href="https://pypi.org/project/telegram-wallet-pay/" target="_blank">Telegram-wallet-pay</a> / <a
            href="https://pypi.org/project/yookassa/" target="_blank">Yookassa</a> – для принятия оплаты
        </li>
        <li><a href="https://pillow.readthedocs.io/" target="_blank">Pillow</a> – библиотека для работы с
          изображениями, помогает обрезать изображения, делать их контрастными и насыщенными
        </li>
        <li><a href="https://github.com/NaturalHistoryMuseum/pyzbar" target="_blank">Pyzbar</a> – для чтения QR-кодов
          со скринов и для проверки, что он сканируется
        </li>
        <li><a href="https://segno.readthedocs.io/" target="_blank">Segno</a> – для генерации QR-кодов</li>
        <li><a href="https://docs.python.org/3/library/re.html" target="_blank">re</a> – для работы со строками</li>
        <li><a href="https://pypi.org/project/pytz/" target="_blank">pytz</a> – для работы с временем</li>
        <li><a href="https://aiogram-dialog.readthedocs.io/en/stable/" target="_blank">aiogram-dialog</a> – для
          диалоговых окон
        </li>
        <li><a href="https://loguru.readthedocs.io/" target="_blank">loguru</a> – для логирования ошибок</li>
        <li><a href="https://github.com/Firemoon777/qrtetris" target="_blank">qrtetris</a> – для генерации Tetris QR
        </li>
      </ul>
      <br>
      <h2>TMA написано на Vue с использованием следующих библиотек:</h2>
      <ul>
        <li><a href="https://docs.telegram-mini-apps.com/" target="_blank">@tma.js SDK</a> – для инициализации TMA
        </li>
        <li><a href="https://axios-http.com/" target="_blank">Axios</a> – для запросов на вебхуки</li>
        <li><a href="https://iro.js.org/" target="_blank">iro.js</a> – для кольца с выбором цвета</li>
        <li><a href="https://github.com/liriliri/eruda" target="_blank">eruda</a> – для отладки на телефоне</li>
      </ul>
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonChip,
  IonIcon,
  IonLabel
} from "@ionic/vue";
import {globe, logoGithub, logoInstagram, logoTiktok, logoYoutube} from "ionicons/icons";
import botstatIcon from "@/media/icons/bot-add-svgrepo-com.svg";
import telegramIcon from "@/media/icons/telegram.svg";

const logoTiktokIcon = logoTiktok;
const logoInstagramIcon = logoInstagram;
const logoGithubIcon = logoGithub;
const logoYoutubeIcon = logoYoutube;
const globeIcon = globe;
const logoBotstatIcon = botstatIcon;
</script>

<style scoped>
.description {
  color: var(--ion-color-light-contrast);
  font-size: 15px;
}

.youtube-promo {
  margin-top: 8px;
}

ul {
  padding-left: 20px;
  margin-top: 0px;
  padding-top: 0px;
}

a {
  text-decoration: none;
}
hr {
  background-color: var(--ion-color-light-contrast);
}
</style>
