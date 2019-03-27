<template>
  <div data-id="app">
    <MarkedEntities />
  </div>
</template>

<script>
  import MarkedEntities from './views/MarkedEntities.vue';

  export default {
    name: 'app',
    components: {
      MarkedEntities
    }
  };
</script>

<style src='./assets/stylesheets/App.css'></style>
