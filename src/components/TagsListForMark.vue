<template>
  <div class="main__tags">
    <ul class="tags-list">
      <li v-for="tag in tagList"
          v-bind:key="tag.id"
          class="tags-list__item">

        <button class="tags-list__btn"
                type="button"
                v-bind:data-name="tag.name"
                v-bind:data-class="tag.class">
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
    data() {
      return {
        tagList: jsonList,
      };
    },
  };
</script>

<style src="./TagsListForMark.css"></style>
