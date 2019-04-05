<template>
  <div class="main__wrapper">
    <div class="main">
      <TextForMark />
      <!--<TagsList />-->
    </div>
    <button class="btn" v-on:click="addSelectionToResult">
      Добавить в result
    </button>
    <!--<ResultFromSelection />-->
  </div>
</template>

<script>
  import TextForMark from '../components/TextForMark';
  import ResultFromSelection from '../components/ResultFromSelection';
  import TagsList from '../components/TagsList';

  export default {
    name: 'MarkedEntities',
    components: {
      ResultFromSelection,
      TagsList,
      TextForMark,
    },
    data() {
      return {};
    },
    mounted() {
    },
    methods: {
      addSelectionToResult() {

      },
    },
  };
</script>

<style src="./MarkedEntities.css"></style>
