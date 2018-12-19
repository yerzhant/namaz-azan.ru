import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gender: 'm',
  },
  mutations: {
    setGender: (state, gender) => {
      state.gender = gender;
    },
  },
  actions: {

  },
});
