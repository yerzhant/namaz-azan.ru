import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gender: 'm',
    namaz: '',
    city: 'Алматы',
    selectCity: false,
  },
  mutations: {
    setGender: (state, gender) => {
      state.gender = gender;
    },
    setNamaz: (state, namaz) => {
      state.namaz = namaz;
    },
    setCity: (state, city) => {
      state.city = city;
    },
    toggleSelectCity: (state) => {
      state.selectCity = !state.selectCity;
    },
  },
  actions: {

  },
});
