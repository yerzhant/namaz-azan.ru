import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gender: 'man',
    namaz: 'gusl',
    city: 'Алматы',
    selectCity: false,
    menu: 'level-2',
    menuItems: [{
      title: 'Фаджр',
      open: false,
      right: true,
      items: [{
        title: 'Фадрж',
        link: '/fadjr',
        active: true,
      }, {
        title: 'Зухр',
        link: '/dhuhr',
      }],
    }, {
      title: 'Фард',
      open: false,
      right: true,
      items: [{
        title: 'Сунна',
        link: '#',
      }, {
        title: 'Фард',
        link: '#',
        active: true,
      }],
    }, {
      // title: '1 ракаат',
      open: true,
      items: [{
        title: 'Ниет',
        link: '#r1-niet',
      }, {
        title: 'Такбир',
        link: '#r1-takbir',
      }],
    }, {
      title: '2 ракаат',
      open: false,
      items: [{
        title: 'Кыям',
        link: '#',
      }, {
        title: 'Кыраат',
        link: '#r2-sitting',
      }],
    }],
  },
  mutations: {
    setGender(state, gender) {
      state.gender = gender;
    },
    setNamaz(state, namaz) {
      state.namaz = namaz;
    },
    setCity(state, city) {
      state.city = city;
    },
    toggleSelectCity(state) {
      state.selectCity = !state.selectCity;
    },
    setMenu(state, menu) {
      state.menu = menu;
    },
  },
  actions: {

  },
});
