<template>
  <div class="quote-box">
          <pre><span class="code_orange">{</span><!--  <span class="code_orange">"Возраст"</span>: <span class="code_blue">18</span>,--> <!--  <span class="code_orange">"Дата рождения"</span>: <span class="code_green">"10.11.2007"</span>,-->
  <span class="code_orange">"Code"</span>: [<span class="code_green">"Python"</span>, <span
                class="code_green">"JavaScript"</span>],
  <span class="code_orange">"Языки"</span>: [<span class="code_green">"RU"</span>, <span
                class="code_green">"EN"</span>],
  <span class="code_orange">"Хобби"</span>: [<span class="code_green">"Монтаж видео"</span>, <span
                class="code_green">"Спорт"</span>],<!--  <span class="code_orange">"Опыт работы"</span>: <span class="code_purple">null</span>,-->
  <span class="code_orange">"Время"</span>: <span class="code_green">"{{ currentTime }} (UTC +3)"</span>,
  <span class="code_orange">"Рабочее время"</span>: <span class="code_green">"8:00 - 20:00"</span>,
  <span class="code_orange">"Почта"</span>: <span class="code_green">"andreykarmain@yandex.ru"</span>,
<span class="code_orange">}</span>
</pre>
    <span class="quote-mark" style="font-size: 16px;">{ json }</span>

  </div>
</template>

<style scoped>
.quote-mark {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  color: #007bff;
}


.quote-box {
  border: 1px dotted #007AFF;
  border-left-style: solid;
  border-left-width: 3px;
  border-radius: 4px;
  padding: 10px;
  display: inline-block;
  font-family: Arial, sans-serif;
  font-size: 16px;
  position: relative;
}


.quote-box p {
  margin: 0;
  padding: 0;
}


.code_orange {
  color: #FFAC00
}

.code_blue {
  color: #6497FF
}

.code_green {
  color: #10dc60
}

.code_purple {
  color: #B010B4;
}

@media only screen and (min-width: 601px) {
  .quote-box {
    width: 350px;
  }

  .quote-box {
    width: 380px;
  }
}
</style>
<script>
import {ref, onMounted, onUnmounted} from 'vue';

export default {
  setup() {
    const currentTime = ref('');

    function updateTime() {
      const now = new Date(new Date().getTime() + 3 * 3600 * 1000);
      const hours = now.getUTCHours().toString().padStart(2, '0');
      const minutes = now.getUTCMinutes().toString().padStart(2, '0');
      const seconds = now.getUTCSeconds().toString().padStart(2, '0');
      const day = now.getUTCDate().toString().padStart(2, '0');
      const month = (now.getUTCMonth() + 1).toString().padStart(2, '0');

      currentTime.value = `${hours}:${minutes}:${seconds} ${day}.${month}`;
    }

    let intervalId;
    onMounted(() => {
      intervalId = setInterval(updateTime, 1000);
      updateTime();
    });

    onUnmounted(() => {
      clearInterval(intervalId);
    });

    return {
      currentTime
    }
  }
}
</script>
