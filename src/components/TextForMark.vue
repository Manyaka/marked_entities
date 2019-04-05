<template>
  <div class="main__text">
    {{ text }}
  </div>
</template>

<script>
  import jsonText from '../json/text.json';

  export default {
    name: 'TextForMark',
    data() {
      return {
        text: jsonText.text,
      };
    },
  };
</script>

<style src="./TextForMark.css"></style>
