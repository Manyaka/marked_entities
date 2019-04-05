<template>
  <div class="app">
    <MarkedEntities />
  </div>
</template>

<script>
  import MarkedEntities from './views/MarkedEntities.vue';

  export default {
    name: 'App',
    components: {
      MarkedEntities,
    }
  };
</script>

<style src='./assets/stylesheets/App.css'></style>
