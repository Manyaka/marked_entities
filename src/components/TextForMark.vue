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
      this.sel = function() {
        if (document.getSelection().containsNode(self.textDiv, true)) {
          self.handleSelectionChange();
        }
      };
      document.addEventListener('selectionchange', this.sel);
    },
    beforeDestroy() {
      //убрать за собой
      document.removeEventListener('selectionchange', this.sel);
    },
    methods: {
      //debounce the event onselectionchange
      handleSelectionChange() {
        clearTimeout(this.selectionChangeTimer);
        this.selectionChangeTimer = setTimeout(() => this.getSelection(), 500);
      },
      getSelection() {
        this.selection = document.getSelection();
        if (!this.selection || this.selection.isCollapsed) {
          return;
        }
        console.log('getSelection:', this.selection.toString());
      },
    },
  };
</script>

<style src="./TextForMark.css"></style>
