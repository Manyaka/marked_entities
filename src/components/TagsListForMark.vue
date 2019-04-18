<template>
  <div class="main__tags">
    <ul class="tags-list">

      <li v-for="tag in tagList"
          v-bind:key="tag.id"
          class="tags-list__item">

        <button type="button"
                class="tags-list__btn"
                v-bind:style="`border-color: ${generateColor()};`"
                v-bind:data-name="tag.name"
                v-bind:data-label="tag.label"
                v-on:click="addTagMark">
          {{ tag.label }}
        </button>

      </li>
      <!--кнопка удаления-->
      <li class="tags-list__item tags-list__item--last">
        <button type="button"
                class="tags-list__btn tags-list__btn--delete"
                v-on:click="deleteMarkTag">
          Убрать выделение
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
  //TODO api.js
  import jsonList from '../json/tagsList.json';

  export default {
    name: 'TagsListForMark',
    props: {
      range: {
        type: [Object, Range],
        default: () => ({}),
      },
      selection: {
        type: [Object, Selection],
        default: () => ({}),
      },
    },
    data() {
      return {
        tagList: jsonList,
        selectionPointsArray: [],
      };
    },
    methods: {
      //добавляем вокруг селекшена тег mark
      addTagMark(event) {
        if (!this.selection ||
          this.selection.isCollapsed ||
          Object.getOwnPropertyNames(this.selection).length) {
          // window.alert('Сначала выделите текст');
          return;
        } else {
          //добавляем в массив селекшен точек
          let digitsObj = {};
          digitsObj.anchorOffset = this.selection.anchorOffset;
          console.log(digitsObj.anchorOffset);
          digitsObj.focusOffset = this.selection.focusOffset;
          console.log(digitsObj.focusOffset);

          let markNode = this.createMarkNode(event);

          digitsObj.dataName = markNode.dataset.name;

          console.log(digitsObj);
          this.selectionPointsArray.push(digitsObj);
          console.log('TLM=', this.selectionPointsArray);

          this.range.surroundContents(markNode);
          // this.selection.removeAllRanges();

          //эмиссия полученного массива точек селекшена и data-name mark
          this.$emit('setselectionpointsarray', this.selectionPointsArray);
        }
      },
      //создаём тег mark с нужным обвесом
      //TODO mark сделать компонентом?
      createMarkNode(event) {
        let markNode = document.createElement('mark');
        let dataName = document.createAttribute('data-name');
        let style = document.createAttribute('style');
        let tooltip = document.createAttribute('tooltip');
        let id = document.createAttribute('id');
        dataName.value = event.target.dataset.name;
        style.value = `border-color: ${event.target.style.borderColor};`;
        tooltip.value = event.target.dataset.label;
        id.value = this.setRandomId();
        markNode.setAttributeNode(dataName);
        markNode.setAttributeNode(style);
        markNode.setAttributeNode(tooltip);
        markNode.setAttributeNode(id);

        return markNode;
      },
      //рандомное подставление цветов
      generateColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
      },
      //рандомное подставление id для различения одинаковых марков для удаления
      setRandomId() {
        return `id${Math.floor(Math.random() * 100)}`;
      },
      //убираем выделение с тега
      deleteMarkTag() {
        if (!this.selection ||
          this.selection.isCollapsed ||
          Object.getOwnPropertyNames(this.selection).length) {
          // window.alert('Сначала выделите текст');
          return;
        } else {
          //удаляем из массива селекшен точек

          let markNode = this.selection.anchorNode.parentElement;
          let marksHTMLCollection = document.getElementsByTagName('mark');
          let theMark = marksHTMLCollection.namedItem(markNode.id);
          theMark.outerHTML = theMark.innerHTML;
        }
      },
    },
  };
</script>

<style src="./TagsListForMark.css"></style>
