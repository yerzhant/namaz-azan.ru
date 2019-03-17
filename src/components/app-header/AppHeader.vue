<template lang="pug">
  header.header(:class="[$store.state.namaz, {full: isFullSite}]")
    .menu(@click="$store.commit('showMenu', true)")
    .container
      .gender.drop-down(
        :class="{active: genderOpen}"
        @click.stop="toggleGender"
      ) Намаз:
        span.selected-item {{ genderText }}
        .items
          .item(
            :class="{active: gender == 'man'}"
            @click="setGender('man')"
          ) Для мужчин
          .item(
            :class="{active: gender == 'woman'}"
            @click="setGender('woman')"
          ) Для женщин

      .madhhab.drop-down Мазхаб:
        span.selected-item Ханафи

      .basmalah
        router-link(to="/")
          img.img(src="./basmalah.png")

      .language.drop-down Язык:
        span.selected-item Русский
          img.flag(src="./ru.png")

      router-link.tutoring(
        :to="`/hanafi/${routeGender}/tour-salah`"
      ) Обучение намазу
</template>

<script>
import RouteGender from '@/utils/routeGender';
import isFullSite from '@/mixins/isFullSite';

export default {
  data() {
    return {
      genderOpen: false,
    };
  },
  computed: {
    gender() {
      return this.$store.state.gender;
    },
    genderText() {
      switch (this.$store.state.gender) {
        case 'man':
          return 'Для мужчин';
        case 'woman':
          return 'Для женщин';
        default:
          return '???';
      }
    },
    routeGender() {
      return RouteGender.to(this.$store.state.gender);
    },
  },
  methods: {
    setGender(gender) {
      const routeName = this.$route.name;
      if (routeName === 'select') {
        this.$store.commit('setGender', gender);
      } else {
        this.$router.push({ name: routeName, params: { gender: RouteGender.to(gender) } });
      }
    },
    toggleGender() {
      this.genderOpen = !this.genderOpen;
    },
    hideMenus() {
      this.genderOpen = false;
    },
  },
  created() {
    document.addEventListener('click', this.hideMenus);
  },
  destroyed() {
    document.removeEventListener('click', this.hideMenus);
  },
  mixins: [isFullSite],
};
</script>

<style lang="scss" scoped>
.header {
  z-index: 5000;
  position: fixed;
  top: 0;
  width: calc(100% - 197px);
  max-width: 1920px - 197px;
  height: 50px;
  background: url(./bg.png) no-repeat center;
  border-bottom: 1px solid #a9b8cf;
  &.fadjr {
    background-image: url(./bg-fadjr.png);
  }
  &.dhuhr {
    background-image: url(./bg-dhuhr.png);
  }
  &.asr {
    background-image: url(./bg-asr.png);
  }
  &.maghrib {
    background-image: url(./bg-maghrib.png);
  }
  &.isha {
    background-image: url(./bg-isha.png);
  }
  &.witr {
    background-image: url(./bg-witr.png);
  }
  &.full {
    width: 100%;
    max-width: 1920px;
    background-image: url(./full-bg.png);
    .menu {
      display: block;
    }
  }
  @media (max-width: 1346px) {
    width: 100%;
  }
  @media (max-width: $mobile) {
    display: none;
  }
}
.menu {
  position: absolute;
  top: 0;
  left: 0;
  width: 58px;
  height: 49px;
  cursor: pointer;
  background: url(./menu.png) no-repeat center;
  @media (min-width: 1347px) {
    display: none;
  }
}
.container {
  display: flex;
  max-width: 1366px;
  margin-right: auto;
  margin-left: auto;
  font-family: $pt-sans;
  font-size: 13px;
  color: #465d73;
  @media (max-width: 1346px) {
    max-width: 100%;
    margin-right: 0;
    margin-left: 58px;
  }
  > * {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 49px;
  }
}
.full {
  .container {
    @media (max-width: 1366px + 58px * 2 + 17px) {
      max-width: 100%;
      margin-right: 0;
      margin-left: 58px;
    }
  }
}
.gender,
.madhhab,
.language,
.basmalah {
  position: relative;
  &::before {
    position: absolute;
    left: 0;
    content: '';
    width: 1px;
    height: 30px;
    background-color: #bfcde1;
  }
}
.basmalah {
  flex-grow: 1;
  .img {
    display: block;
  }
}
.tutoring {
  width: 162px;
  font-family: $roboto;
  font-weight: 500;
  color: #fff;
  background: url(./tutoring.png) no-repeat center;
}
.drop-down {
  position: relative;
  width: 162px;
  cursor: pointer;
  &:hover,
  &.active {
    background-color: #e5eff8;
  }
  .selected-item {
    color: #0a6e9c;
    margin-left: 3px;
    padding-right: 15px;
    background: url(./drop-down.png) no-repeat right;
    .flag {
      margin-left: 10px;
    }
  }
  .items {
    display: none;
    position: absolute;
    top: 50px;
    right: 0;
    left: 0;
  }
  &.active {
    &::before,
    + ::before {
      height: 49px;
    }
    .items {
      display: block;
    }
  }
  .item {
    display: flex;
    align-items: center;
    width: 163px;
    height: 49px;
    padding: 0 20px;
    color: #0a6e9c;
    background-color: #e5eff8;
    border-right: 1px solid #c1cfdd;
    border-left: 1px solid #c1cfdd;
    border-bottom: 1px solid #c1cfdd;
    &:hover,
    &.active {
      background-color: #f6fbff;
    }
  }
}
.madhhab,
.language {
  cursor: initial;
  &:hover {
    background-color: initial;
  }
}
</style>
