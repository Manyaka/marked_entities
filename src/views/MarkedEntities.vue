<template>
  <div class="main__wrapper">
    <div class="main">

      <TextForMark ref="TextForMark"
                   v-bind:imported-text="importedText"
                   v-on:getselection="getSelectionFromChildComponent"
                   v-on:getrange="getRangeFromChildComponent" />

      <TagsListForMark
        v-bind:range="range"
        v-bind:selection="selection"
        v-on:setselectionpointsarray="getSelectionPointsFromChildComponent" />

    </div>

    <button type="button" class="btn" v-on:click="addSelectionToResult">
      Добавить в result
    </button>
    <button type="button" class="btn" v-on:click="exportTextWithMarkTags">
      Экспорт
    </button>
    <!--<button type="button" class="btn" v-on:click="importTextWithMarkTags">
      Импорт
    </button>-->

    <ResultFromSelections
      v-bind:result="resultArray" />

    <h3>Экспорт</h3>
    <div ref="exportDiv" class="export">{{ exportedText }}</div>

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
        selectionPointsArray: [],
        exportedText: null,
        importedText: null,
      };
    },
    methods: {
      getSelectionFromChildComponent(selection) {
        this.selection = selection;
      },
      getRangeFromChildComponent(range) {
        this.range = range;
      },
      getSelectionPointsFromChildComponent(selectionPointsArray) {
        this.selectionPointsArray = selectionPointsArray;
        // console.log('ME=', this.selectionPointsArray);
      },
      addSelectionToResult() {
        // this.resultArray.push(this.selection.toString());
        this.resultArray = this.selectionPointsArray; //?
      },
      //методы экспорта/импорта
      exportTextWithMarkTags() {
       this.exportedText = this.$refs.TextForMark.$refs.textDiv.innerHTML;
       },
      /*importTextWithMarkTags() {
       this.importedText = this.exportedText;
       },*/
    },
  };
</script>

<style src="./MarkedEntities.css"></style>
