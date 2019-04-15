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
      };
    },
    methods: {
      //TODO можно добавить один и тот же марк к одному и тому же выделенному фрагменту
      //поправить это
      //добавляем вокруг селекшена тег mark
      addTagMark(event) {
        if (!this.selection ||
          this.selection.isCollapsed ||
          Object.getOwnPropertyNames(this.selection).length) {
          // window.alert('Сначала выделите текст');
        } else {
          let markNode = this.createMarkNode(event);
          this.range.surroundContents(markNode);
          // this.selection.removeAllRanges();
        }
      },
      //создаём тег mark с нужным обвесом
      //TODO mark сделать компонентом?
      createMarkNode(event) {
        let markNode = document.createElement('mark');
        let dataName = document.createAttribute('data-name');
        let style = document.createAttribute('style');
        let tooltip = document.createAttribute('tooltip');
        dataName.value = event.target.dataset.name;
        style.value = `border-color: ${event.target.style.borderColor};`;
        tooltip.value = event.target.dataset.label;
        markNode.setAttributeNode(dataName);
        markNode.setAttributeNode(style);
        markNode.setAttributeNode(tooltip);

        return markNode;
      },
      //рандомное подставление цветов
      generateColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
      },
    },
  };
</script>

<style src="./TagsListForMark.css"></style>
