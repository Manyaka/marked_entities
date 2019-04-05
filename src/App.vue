<template>
  <div class="App">
    <MarkedEntities />
  </div>
</template>

<script>
  import MarkedEntities from './views/MarkedEntities';

  export default {
    name: 'App',
    components: {
      MarkedEntities,
    }
  };
</script>

<style src='./assets/stylesheets/App.css'></style>
