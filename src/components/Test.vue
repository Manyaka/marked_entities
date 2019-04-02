<template>
  <div class="main__wrapper">
    <div class="main">
      <input type="text" v-model="user.firstName">
      <input type="text" v-model="user.lastName">
      <input type="number" v-model="user.age">
      {{ demo }}
      <!--{{ fullName }}-->
      <button class="btn" v-on:click="addField()">Button</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Test',
    data() {
      return {
        user: {
          firstName: 'Маша',
          lastName: 'Нагорных',
          age: 37,
        },
      };
    },
    computed: { //vuex подписывается на computed
      fullName() {
        // console.log('функция сработала');
        return `${this.lastName} ${this.firstName}`;
      },
      demo() {
        if (this.user) {
          // console.log('start');
          return '11111';
        } else {
          return '7777';
        }
      },
    },
    watch: {
      firstName(newValue) {
        // console.log(newValue);
      },
    },
    mounted() {
      // console.log(Object.keys(this)); //то что без доллара и без подчёркивания
      this.$watch('user', () => console.log('user=', this.user), { deep: true });
      // this.$watch('age', () => console.log('age=', this.age));
      //программатикали создать вотч надо для ансабскрайб
      let unsubscribe = this.$watch(
        'user',
        () => console.log('user=', this.user),
        { deep: true }
      );
      setTimeout(unsubscribe, 5000); //отписались. Почему?
    },
    methods: {
      addField() {
        // console.log('1');
        this.user.newField = 13; //не рактивно
      },
    },
  };
</script>
