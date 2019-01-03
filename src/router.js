import Vue from 'vue';
import Router from 'vue-router';
import AppSelect from '@/views/app-select/AppSelect.vue';
import AppMain from '@/views/app-main/AppMain.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    component: AppSelect,
  }, {
    path: '/main',
    component: AppMain,
  }, {
    path: '/tour',
    component: () => import(/* webpackChunkName: "tour" */ './views/tour/Tour.vue'),
  }, {
    path: '/tahharah/wudu',
    component: () => import(/* webpackChunkName: "namaz" */ './views/namaz/Namaz.vue'),
  }, {
    path: '/tahharah/:type',
    component: () => import(/* webpackChunkName: "tahharah" */ './views/tahharah/Tahharah.vue'),
  }, {
    path: '/:type',
    component: () => import(/* webpackChunkName: "namaz" */ './views/namaz/Namaz.vue'),
  }],
});
