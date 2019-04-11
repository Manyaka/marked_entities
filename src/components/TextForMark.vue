<template>
  <div ref="textDiv" class="main__text">
    <!--{{ textLong }}-->
    {{ textShort }}
  </div>
</template>

<script>
  //TODO api.js
  import jsonTextLong from '../json/textLong.json';
  import jsonTextShort from '../json/textShort.json';

  export default {
    name: 'TextForMark',
    data() {
      return {
        textLong: jsonTextLong.text,
        textShort: jsonTextShort.text,
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
      this.textDiv = this.$refs.textDiv;
      this.sel = () => {
        if (document.getSelection().containsNode(this.textDiv, true)) {
          this.handleSelectionChange();
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
        //тут эмиссия события и передача данных родителю
        this.$emit('getselection', this.selection);
        this.$emit('getrange', this.range);
      },
    },
  };
</script>

<style src="./TextForMark.css"></style>
