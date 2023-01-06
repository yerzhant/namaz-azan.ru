import { defineStore } from "pinia";

export default defineStore("store", {
  state: {
    madhhab: "hanafi",
    gender: "man",
    namaz: null,
    mobileHeaderStatus: null,
    city: null,
    namazTimes: {
      today: ["-", "-", "-", "-", "-", "-"],
      tomorrow: ["-", "-", "-", "-", "-", "-"],
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
  getters: {
    gender: (state) => state.gender,
    genderText: (state) => {
      switch (state.gender) {
        case "man":
          return "Для мужчин";
        case "woman":
          return "Для женщин";
        default:
          return "???";
      }
    },
    madhhab: (state) => state.madhhab,
    madhhabText: (state) => {
      switch (state.madhhab) {
        case "hanafi":
          return "Ханафи";
        case "shafii":
          return "Шафии";
        default:
          return "???";
      }
    },
  },
});
