<template>
  <div class="main__wrapper">
    <div class="main">
      <input type="text" v-model="firstName">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Test',
    data() {
      return {
        firstName: '!'
      }
    }
  };
</script>

<style scoped>

</style>
