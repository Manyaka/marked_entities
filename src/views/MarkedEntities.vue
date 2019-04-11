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

    <button type="button" class="btn" v-on:click="addSelectionToResult">
      Добавить в result
    </button>
    <button type="button" class="btn" v-on:click="exportMN">
      Экспорт
    </button>
    <button type="button" class="btn" v-on:click="importMN">
      Импорт
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
        // console.log('this.selection1=', this.selection, '**', typeof this.selection);
      },
      getRangeFromChildComponent(range) {
        this.range = range;
        // console.log('this.range1=', this.range, '**', typeof this.range);
      },
      addSelectionToResult() {
        this.resultArray.push(this.selection.toString());
      },
      //новые методы экспорта/импорта
      exportMN() {},
      importMN() {}
    },
  };
</script>

<style src="./MarkedEntities.css"></style>
