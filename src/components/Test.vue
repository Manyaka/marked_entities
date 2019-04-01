<template>
  <div class="main__wrapper">
    <div class="main">
      <input type="text" v-model="firstName"/>
      <input type="text" v-model="lastName"/>
      <input type="number" v-model="age"/>
      <!--{{ fullName }}-->
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Test',
    data() {
      return {
        firstName: 'Маша',
        lastName: 'Нагорных',
        age: 37
      };
    },
    computed: {
      fullName() {
        console.log('функция сработала');
        return `${this.lastName} ${this.firstName}`;
      }
    },
    watch: {
      'firstName'(newValue) {
        console.log(newValue);
      }
    },
    mounted() {
      this.$watch('age', () => console.log('age=', this.age));
    },
    methods: {}
  };
</script>

<style scoped></style>
