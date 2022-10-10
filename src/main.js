import Vue from 'vue';
import App from './App.vue';
import router from '@/router';
import store from '@/store';

import '@/styles/main.scss';

Vue.config.productionTip = false;
Vue.prototype.$store = store;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app');
