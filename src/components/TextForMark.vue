<template>
  <div class="main__text" data-selector="text-div">
    {{ text }}
  </div>
</template>

<script>
  import jsonText from '../json/text.json';

  export default {
    name: 'TextForMark',
    data() {
      return {
        text: jsonText.text,
        selectionsArray: [],
        selection: '',
        selectionChangeTimer: null,
        textDiv: null,
      };
    },
    created() {
      // this.selectionsArray = [];
      // this.selection = '';
      // this.selectionChangeTimer = null;
    },
    mounted() {
      let self = this;
      this.textDiv = document.querySelector('[data-selector="text-div"]');

      document.onselectionchange = function() {
        //селекшн должен считываться только в блоке текста
        if (document.getSelection().containsNode(self.textDiv, true)) {
          self.handleSelectionChange();
        }
      };
    },
    beforeDestroy() {
      //убрать за собой

    },
    methods: {
      //debounce the event onselectionchange
      handleSelectionChange() {
        clearTimeout(this.selectionChangeTimer);
        this.selectionChangeTimer = setTimeout(this.getSelection(), 500);
      },
      getSelection() {
        this.selection = document.getSelection();
        if (!this.selection.rangeCount) {
          return;
        }
        console.log('getSelection:', this.selection.toString());
      },
    },
  };
</script>

<style src="./TextForMark.css"></style>
