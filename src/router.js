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
    alias: '/index.html',
    component: AppSelect,
  }, {
    path: '/main',
    component: AppMain,
  }, {
    path: '/solaatil-uulaa',
    component: () => import(/* webpackChunkName: "solaatil-uulaa" */ './views/tour/Tour.vue'),
  }, {
    path: '/shart/:type',
    alias: '/misc/:type',
    component: () => import(/* webpackChunkName: "shart" */ './views/shart/Shart.vue'),
  }, {
    path: '/tahharah/:type(wudu)',
    component: () => import(/* webpackChunkName: "wudu" */ './views/wudu/Wudu.vue'),
  }, {
    path: '/tahharah/:type',
    component: () => import(/* webpackChunkName: "tahharah" */ './views/tahharah/Tahharah.vue'),
  }, {
    path: '/:type/:subType',
    component: () => import(/* webpackChunkName: "namaz" */ './views/namaz/Namaz.vue'),
  }, {
    path: '*',
    beforeEnter() { window.location = 'https://azan.ru/not-found'; },
  }],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
});
