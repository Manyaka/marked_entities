<template>
  <div class="main__wrapper">
    <div class="main">
      <TextForMark />
      <!--<TagsListForMark />-->
    </div>
    <button class="btn" data-selector="btn-add"
            v-on:click="addSelectionToResult">
      Добавить в result
    </button>
    <ResultFromSelections />
  </div>
</template>

<script>
  import TextForMark from '../components/TextForMark';
  import ResultFromSelections from '../components/ResultFromSelections';
  import TagsListForMark from '../components/TagsListForMark';

  export default {
    name: 'MarkedEntities',
    components: {
      ResultFromSelections,
      TagsListForMark,
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
