import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gender: 'm',
    namaz: 'fadjr',
    city: 'Алматы',
    selectCity: false,
    menu: 'level-2',
    menuItems: [{
      title: 'Фаджр',
      open: true,
      right: true,
      items: [{
        title: 'Фадрж',
        link: '#',
        active: true,
      }, {
        title: 'Зухр',
        link: '#',
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
      title: '1 ракаат',
      open: false,
      items: [{
        title: 'Ниет',
        link: '#',
        active: true,
      }, {
        title: 'Такбир',
        link: '#',
      }],
    }, {
      title: '2 ракаат',
      open: false,
      items: [{
        title: 'Кыям',
        link: '#',
      }, {
        title: 'Кыраат',
        link: '#',
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
