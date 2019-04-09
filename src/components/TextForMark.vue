<template>
  <div ref="textDiv" class="main__text">
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
        selection: {},
        range: {},
        selectionChangeTimer: null,
        textDiv: null,
      };
    },
    created() {
      // this.selection = '';
      // this.selectionChangeTimer = null;
    },
    mounted() {
      let self = this;
      this.textDiv = this.$refs.textDiv;
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
        this.selectionChangeTimer = setTimeout(() => this.getSelectionAndRange(), 500);
      },
      getSelectionAndRange() {
        this.selection = document.getSelection();
        if (!this.selection || this.selection.isCollapsed) {
          return;
        }
        this.range = this.selection.getRangeAt(0);
        //тут имитация события и передача данных родителю
        this.$emit('getselection', this.selection);
        this.$emit('getrange', this.range);
      },
    },
  };
</script>

<style src="./TextForMark.css"></style>
