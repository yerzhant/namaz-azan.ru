import { defineStore } from "pinia";

export default defineStore("store", {
  state: () => {
    return {
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
    };
  },
  actions: {
    setMadhhab(madhhab) {
      this.madhhab = madhhab;
    },
    setGender(gender) {
      this.gender = gender;
    },
    setNamaz(namaz) {
      this.namaz = namaz;
    },
    setMobileHeaderStatus(status) {
      this.mobileHeaderStatus = status;
    },
    setCity(city) {
      this.city = city;
    },
    setNamazTimes(times) {
      this.namazTimes = times;
    },
    setSocials(socials) {
      this.socials = socials;
    },
    toggleSelectCity() {
      this.selectCity = !this.selectCity;
    },
    setShowMenu(show) {
      this.showMenu = show;
    },
    setMenu(menu) {
      this.menu = menu;
    },
    setMenuItems(menu) {
      this.menuItems = menu;
    },
  },
  getters: {
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
