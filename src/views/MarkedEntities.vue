<template>
  <div class="main__wrapper">
    <div class="main">

      <TextForMark
        v-on:getselection="getSelectionFromChildComponent"
        v-on:getrange="getRangeFromChildComponent" />

      <TagsListForMark
        v-bind:range="range"
        v-bind:selection="selection" />

    </div>

    <button class="btn"
            data-selector="btn-add"
            v-on:click="addSelectionToResult">
      Добавить в result
    </button>

    <ResultFromSelections
      v-bind:result="resultArray" />

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
      return {
        selection: {},
        range: {},
        resultArray: [],
      };
    },
    mounted() {
    },
    methods: {
      getSelectionFromChildComponent(selection) {
        this.selection = selection;
      },
      getRangeFromChildComponent(range) {
        this.range = range;
      },
      addSelectionToResult() {
        this.resultArray.push(this.selection.toString());
      },
    },
  };
</script>

<style src="./MarkedEntities.css"></style>
