<template>
  <div class="main__wrapper">
    <div class="main">
      <input type="text" v-model="firstName">
      <input type="text" v-model="lastName">
      {{ getFullName() }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Test',
    data() {
      return {
        firstName: 'Маша',
        lastName: 'Нагорных'
      }
    },
    methods: {
      getFullName() {
        return `${this.lastName} ${this.firstName}`
      }
    }
  };
</script>

<style scoped>

</style>
