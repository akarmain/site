<template>
  <div class="quote-box">
          <pre><span class="code_orange">{</span>
  <span class="code_orange">"Возраст"</span>: <span class="code_blue">16</span>,
  <span class="code_orange">"Дата рождения"</span>: <span class="code_green">"10.11.2007"</span>,
  <span class="code_orange">"Code"</span>: [<span class="code_green">"Python"</span>, <span
                class="code_green">"JavaScript"</span>],
  <span class="code_orange">"Языки"</span>: [<span class="code_green">"RU"</span>, <span
                class="code_green">"EN"</span>],
  <span class="code_orange">"Хобби"</span>: [<span class="code_green">"Монтаж видео"</span>, <span
                class="code_green">"Спорт"</span>],
  <span class="code_orange">"Опыт работы"</span>: <span class="code_purple">null</span>,
  <span class="code_orange">"Доход"</span>: <span class="code_purple">null</span>,
  <span class="code_orange">"Почта"</span>: <span class="code_green">"andreykarmain@yandex.ru"</span>,
  <span class="code_orange">"Ожидаемая ЗП"</span>: <span class="code_green">"300$ в 1 сек"</span>,
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
<script setup>
</script>
