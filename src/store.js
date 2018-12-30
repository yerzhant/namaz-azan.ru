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
        link: '#',
        active: true,
      }, {
        title: 'Dhuhr',
        link: '#',
      }],
    }, {
      title: 'Fard',
      right: true,
      items: [{
        title: 'Sunna',
        link: '#',
      }, {
        title: 'Fard',
        link: '#',
        active: true,
      }],
    }, {
      title: '1 rakaat',
      items: [{
        title: 'Niet',
        link: '#',
      }, {
        title: 'Takbir',
        link: '#',
      }],
    }, {
      title: '2 rakaat',
      items: [{
        title: 'Qiyam',
        link: '#',
      }, {
        title: 'Qyraat',
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
