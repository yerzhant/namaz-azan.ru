import Vue from 'vue';
import Router from 'vue-router';
import AppMain from './views/app-main/AppMain.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    component: AppMain,
  }, {
    path: '/tahharah/wudu',
    component: () => import(/* webpackChunkName: "namaz" */ './views/namaz/Namaz.vue'),
  }, {
    path: '/:type',
    component: () => import(/* webpackChunkName: "namaz" */ './views/namaz/Namaz.vue'),
  }],
});
