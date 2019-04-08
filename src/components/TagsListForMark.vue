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
                v-on:click="mn">
          {{ tag.label }}
        </button>

      </li>

    </ul>
  </div>
</template>

<script>
  import jsonList from '../json/tagsList.json';

  export default {
    name: 'TagsListForMark',
    props: {
      range: {
        type: Object,
        default: () => ({}),
      },
      selection: {
        type: Object,
        default: () => ({}),
      },
    },
    data() {
      return {
        tagList: jsonList,
      };
    },
    methods: {
      mn(event) {
        let markNode = this.createMarkNode(event);
        this.range.surroundContents(markNode);
        this.selection.removeAllRanges();
      },
      //создаём тег mark с нужным обвесом
      createMarkNode() {
        let markNode = document.createElement('mark');
        let dataName = document.createAttribute('data-name');
        let className = document.createAttribute('class');
        dataName.value = event.target.dataset.name;
        className.value = event.target.dataset.class;
        markNode.setAttributeNode(dataName);
        markNode.setAttributeNode(className);
        return markNode;
      },
    },
  };
</script>

<style src="./TagsListForMark.css"></style>
