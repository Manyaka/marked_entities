<template>
  <div data-id="app">
    <Test/>
    <MarkedEntities />
  </div>
</template>

<script>
  import MarkedEntities from './views/MarkedEntities.vue';
  import Test from './components/Test.vue';

  export default {
    name: 'app',
    components: {
      MarkedEntities,
      Test
    }
  };
</script>

<style src='./assets/stylesheets/App.css'></style>
