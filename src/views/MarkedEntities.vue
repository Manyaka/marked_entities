<template>
  <div class="main__wrapper">
    <div class="main">
      <div class="main__text"><Text /></div>
      <div class="main__checkboxes"><Checkboxes /></div>
    </div>
    <div class="result"><Result /></div>
  </div>
</template>

<script>
  import Text from '@/components/Text.vue'
  import Checkboxes from '@/components/Checkboxes.vue'
  import Result from '@/components/Result.vue'

  export default {
    name: 'MarkedEntities',
    props: {},
    components: {
      Text,
      Checkboxes,
      Result
    }
  };
</script>

<style scoped src="./MarkedEntities.css"></style>
