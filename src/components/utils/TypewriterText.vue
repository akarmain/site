<template>
  <div class="typewriter-text">
    {{ displayedText }}
  </div>
</template>

<script>
export default {
  props: {
    words: {
      type: Array,
      required: true
    },
    speed: {
      type: Number,
      default: 100
    },
    pause: {
      type: Number,
      default: 2000
    }
  },
  data() {
    return {
      displayedText: '',
      currentWordIndex: 0,
      currentCharIndex: 0,
      isDeleting: false
    };
  },
  mounted() {
    this.startTyping();
  },
  methods: {
    startTyping() {
      this.typingInterval = setInterval(() => {
        const currentWord = this.words[this.currentWordIndex];

        if (!this.isDeleting) {
          if (this.currentCharIndex < currentWord.length) {
            this.displayedText += currentWord.charAt(this.currentCharIndex);
            this.currentCharIndex++;
          } else {
            setTimeout(() => {
              this.isDeleting = true;
            }, this.pause);
          }
        } else {
          if (this.currentCharIndex > 0) {
            this.displayedText = currentWord.substring(0, this.currentCharIndex - 1);
            this.currentCharIndex--;
          } else {
            this.isDeleting = false;
            this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
          }
        }
      }, this.speed);
    }
  },
  beforeDestroy() {
    clearInterval(this.typingInterval);
  }
};
</script>

<style>
.typewriter-text {
  font-family: 'Courier New', Courier, monospace;
  white-space: pre;
  margin-top: 40px;
  text-align: start;
  width: 400px;
  min-height: 30px;
  font-size: 20px;
}
</style>
