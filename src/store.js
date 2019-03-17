import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    madhhab: 'hanafi',
    gender: 'man',
    namaz: null,
    mobileHeaderStatus: null,
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
    setMadhhab(state, madhhab) {
      state.madhhab = madhhab;
    },
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
