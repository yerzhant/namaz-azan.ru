import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gender: 'm',
    city: 'Алматы',
  },
  mutations: {
    setGender: (state, gender) => {
      state.gender = gender;
    },
    setCity: (state, city) => {
      state.city = city;
    },
  },
  actions: {

  },
});
