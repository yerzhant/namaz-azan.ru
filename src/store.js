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
      title: 'Fadjr',
      right: true,
      items: [{
        title: 'Fadjr',
        url: '#',
        active: true,
      }, {
        title: 'Dhuhr',
        url: '#',
      }],
    }, {
      title: 'Fard',
      right: true,
      items: [{
        title: 'Sunna',
        url: '#',
      }, {
        title: 'Fard',
        url: '#',
        active: true,
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
