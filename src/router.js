import Vue from 'vue';
import Router from 'vue-router';
import RouteGender from '@/utils/routeGender';
import AppSelect from '@/views/app-select/AppSelect.vue';
import AppMain from '@/views/app-main/AppMain.vue';
import store from './store';

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
    path: '/:madhhab/:gender',
    component: AppMain,
    name: 'main',
  }, {
    path: '/:madhhab/:gender/tour-salah',
    component: () => import(/* webpackChunkName: "solaatil-uulaa" */ './views/tour/Tour.vue'),
    name: 'tour-salah',
  }, {
    path: '/:madhhab/:gender/:section(shart|al-ahkaamul-aammah)/:type',
    component: () => import(/* webpackChunkName: "shart" */ './views/shart/Shart.vue'),
    name: 'shart',
  }, {
    path: '/:madhhab/:gender/tahharah/:type(wudu)',
    component: () => import(/* webpackChunkName: "wudu" */ './views/wudu/Wudu.vue'),
    name: 'wudu',
  }, {
    path: '/:madhhab/:gender/tahharah/:type',
    component: () => import(/* webpackChunkName: "tahharah" */ './views/tahharah/Tahharah.vue'),
    name: 'tahharah',
  }, {
    path: '/:madhhab/:gender/:type(mareed)/:subType',
    component: () => import(/* webpackChunkName: "namaz" */ './views/namaz-compare/NamazCompare.vue'),
    name: 'namaz-compare',
  }, {
    path: '/:madhhab/:gender/:type/:subType',
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

router.afterEach(to => {
  if (to.params.gender) {
    store.commit('setGender', RouteGender.from(to.params.gender));
  }
  if (to.params.madhhab) {
    store.commit('setMadhhab', to.params.madhhab);
  }
});

export default router;
