<template>
  <div class="main__wrapper">
    <div class="main">
      <TextForMark v-on:getselection="addSelection" />
      <!--<TagsListForMark />-->
    </div>
    <button class="btn" data-selector="btn-add" v-on:click="addSelectionToResult">
      Добавить в result
    </button>
    <ResultFromSelections v-bind:result="resultArray" />
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
        selection: '',
        resultArray: [],
      };
    },
    mounted() {
    },
    methods: {
      addSelection(selection) {
        this.selection = selection;
        console.log('mnmnmn', this.selection);
      },
      addSelectionToResult() {
        this.resultArray.push(this.selection);
        console.log('this.resultArray=', this.resultArray);
      },
    },
  };
</script>

<style src="./MarkedEntities.css"></style>
