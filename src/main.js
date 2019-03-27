import Vue from 'vue';
import App from './App.vue';

// import '~normalize.css/normalize';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount('[data-id="app"]');
