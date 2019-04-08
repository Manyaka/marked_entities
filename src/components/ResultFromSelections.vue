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
        default: () => []
      }
    },
  };
</script>

<style src="./ResultFromSelections.css"></style>
