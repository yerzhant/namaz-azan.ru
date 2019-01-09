import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gender: 'man',
    namaz: null,
    mobileHeaderStatus: 'Выбор пола', // , возраста и мазхаба',
    city: null,
    namazTimes: {
      today: ['-', '-', '-', '-', '-', '-'],
      tomorrow: ['-', '-', '-', '-', '-', '-'],
    },
    selectCity: false,
    socials: {
      fb: {},
      yt: {},
      vk: {},
      tg: {},
    },
    showMenu: false,
    menu: null,
    menuItems: null,
  },
  mutations: {
    setGender(state, gender) {
      state.gender = gender;
    },
    setNamaz(state, namaz) {
      state.namaz = namaz;
    },
    setMobileHeaderStatus(state, status) {
      state.mobileHeaderStatus = status;
    },
    setCity(state, city) {
      state.city = city;
    },
    setNamazTimes(state, times) {
      state.namazTimes = times;
    },
    setSocials(state, socials) {
      state.socials = socials;
    },
    toggleSelectCity(state) {
      state.selectCity = !state.selectCity;
    },
    showMenu(state, show) {
      state.showMenu = show;
    },
    setMenu(state, menu) {
      state.menu = menu;
    },
    setMenuItems(state, menu) {
      state.menuItems = menu;
    },
  },
});
