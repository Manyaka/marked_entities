<template>
  <div class="result" data-selector="result-div">
    {{ result }}
  </div>
</template>

<script>
  export default {
    name: 'ResultFromSelections',
    props: {
      result: {
        type: Array,
        default: null
      }
    },
  };
</script>

<style src="./ResultFromSelections.css"></style>
