import Vue from 'vue';
import Router from 'vue-router';
import store from './store';
import RouteGender from '@/utils/routeGender';
import AppSelect from '@/views/app-select/AppSelect.vue';
import AppMain from '@/views/app-main/AppMain.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    alias: '/index.html',
    component: AppSelect,
    name: 'select',
  }, {
    path: '/:maddhab/:gender',
    component: AppMain,
    name: 'main',
  }, {
    path: '/:maddhab/:gender/tour-salah',
    component: () => import(/* webpackChunkName: "solaatil-uulaa" */ './views/tour/Tour.vue'),
    name: 'tour-salah',
  }, {
    path: '/:maddhab/:gender/:section(shart|al-ahkaamul-aammah)/:type',
    component: () => import(/* webpackChunkName: "shart" */ './views/shart/Shart.vue'),
    name: 'shart',
  }, {
    path: '/:maddhab/:gender/tahharah/:type(wudu)',
    component: () => import(/* webpackChunkName: "wudu" */ './views/wudu/Wudu.vue'),
    name: 'wudu',
  }, {
    path: '/:maddhab/:gender/tahharah/:type',
    component: () => import(/* webpackChunkName: "tahharah" */ './views/tahharah/Tahharah.vue'),
    name: 'tahharah',
  }, {
    path: '/:maddhab/:gender/:type(mareed)/:subType',
    component: () => import(/* webpackChunkName: "namaz" */ './views/namaz-compare/NamazCompare.vue'),
    name: 'namaz-compare',
  }, {
    path: '/:maddhab/:gender/:type/:subType',
    component: () => import(/* webpackChunkName: "namaz" */ './views/namaz/Namaz.vue'),
    name: 'namaz',
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

router.afterEach((to) => {
  if (to.params.gender) {
    store.commit('setGender', RouteGender.from(to.params.gender));
  }
});

export default router;
