import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

import './styles/main.scss';

Vue.config.productionTip = false;

Vue.use(VueScrollTo);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
