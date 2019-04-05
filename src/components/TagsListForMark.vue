<template>
  <div class="main__checkboxes">
          <ul class="checkboxes-list">
            <li v-for="checkbox in mainCheckboxes"
                v-bind:key="checkbox.id"
                class="checkboxes-list__item">
              <input v-bind:id="'ch' + checkbox.id"
                     type="checkbox"
                     v-bind:name="checkbox.label">
              <label class="checkboxes-list__label" v-bind:for="'ch' + checkbox.id">
                {{ checkbox.label }}
              </label>
            </li>
          </ul>
        </div>
</template>

<script>
  export default {
    name: 'TagsListForMark'
  };
</script>

<style src="./ResultFromSelections.css"></style>
