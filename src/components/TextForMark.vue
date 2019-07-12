<template>
  <div class="main__text">
    <!--<h3>Начальный текст</h3>-->
    <div ref="textDiv">
      <!--{{ textLong }}-->
      {{ textShort }}
    </div>
    <!--<hr>-->
    <!--<h3>Импорт</h3>-->
    <!-- <div v-html="importedText"></div>-->
  </div>
</template>

<script>
  //TODO api.js
  import jsonTextLong from '../json/textLong.json';
  import jsonTextShort from '../json/textShort.json';

  /*function mtRand(min, max) {
   let diff = max - min;
   return Math.floor(Math.random() * (diff + 1)) + min;
   }*/

  // console.log(mtRand);

  export default {
    name: 'TextForMark',
    props: {
      importedText: {
        type: String,
        default: '',
      },
    },
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
    /*computed: {
     textDiv: function() {
     console.log();
     }
     },*/
    /*watch: {
      textDiv: {
        handler: function(newVal, oldVal) {
          console.log('newVal=', newVal);
          console.log('oldVal=', oldVal);
        },
        deep: true,
        immediate: true,
      },
    },*/
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
      /*this.$watch(
        'textDiv',
        function(newVal, oldVal) {
          console.log('newVal=', newVal);
          console.log('oldVal=', oldVal);
        },
        { deep: true },
      );*/
    },
    updated() {
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
