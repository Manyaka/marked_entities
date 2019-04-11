<template>
  <div class="main__tags">
    <ul class="tags-list">

      <li v-for="tag in tagList"
          v-bind:key="tag.id"
          class="tags-list__item">

        <button type="button"
                class="tags-list__btn"
                v-bind:class="tag.class"
                v-bind:data-name="tag.name"
                v-bind:data-class="tag.class"
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
      addTagMark(event) {
        let markNode = this.createMarkNode(event);
        this.range.surroundContents(markNode);
        this.selection.removeAllRanges();
      },
      //создаём тег mark с нужным обвесом
      //TODO mark сделать компонентом
      createMarkNode() {
        let markNode = document.createElement('mark');
        let dataName = document.createAttribute('data-name');
        let className = document.createAttribute('class');
        let title = document.createAttribute('title');
        dataName.value = event.target.dataset.name;
        className.value = event.target.dataset.class;
        title.value = event.target.dataset.label;
        markNode.setAttributeNode(dataName);
        markNode.setAttributeNode(className);
        markNode.setAttributeNode(title);
        //hover on mark tag mouseover/mouseout

        return markNode;
      },
    },
  };
</script>

<style src="./TagsListForMark.css"></style>
