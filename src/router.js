import Vue from 'vue';
import Router from 'vue-router';
import AppMain from './views/app-main/AppMain.vue';
import Namaz from './views/Namaz.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: AppMain,
    },
    {
      path: '/:type',
      component: Namaz,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    // },
  ],
});
