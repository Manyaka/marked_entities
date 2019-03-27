<template>
  <div class="main__wrapper">
    <div class="main">
      <div class="main__text">{{ mainText }}</div>
      <div class="main__checkboxes">{{ mainCheckboxes }}</div>
    </div>
    <div class="result">{{ mainResult }}</div>
  </div>
</template>

<script>
  export default {
    name: 'MarkedEntities',
    data() {
      return {
        mainText: 'mainText',
        mainCheckboxes: 'mainCheckboxes',
        mainResult: 'mainResult'
      }
    }
  };
</script>

<style scoped src="./MarkedEntities.css"></style>
