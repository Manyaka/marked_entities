<template>
  <div class="result" data-selector="result-div">
    {{ result }}
  </div>
</template>

<script>
  export default {
    name: 'ResultFromSelections',
    props: ['result']
  };
</script>

<style src="./ResultFromSelections.css"></style>
