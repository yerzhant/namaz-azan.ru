<template lang="pug">
  header.header
    .menu
    .container
      .gender.drop-down(
        :class="{active: genderOpen}"
        @click.stop="toggleGender"
      ) Намаз:
        span.selected-item {{ genderText }}
        .items
          .item(
            :class="{active: gender == 'm'}"
            @click="setGender('m')"
          ) Для мужчин
          .item(
            :class="{active: gender == 'w'}"
            @click="setGender('w')"
          ) Для женщин

      .madhhab.drop-down Мазхаб:
        span.selected-item Ханафи

      .basmalah
        router-link(to="/")
          img.img(src="./basmalah.png")

      .language.drop-down Язык:
        span.selected-item Русский
          img.flag(src="./ru.png")

      router-link.tutoring(to="/xxx") Обучение намазу
</template>

<script>
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
        case 'm':
          return 'Для мужчин';
        case 'w':
          return 'Для женщин';
        default:
          return '???';
      }
    },
  },
  methods: {
    setGender(gender) {
      this.$store.commit('setGender', gender);
    },
    toggleGender() {
      this.genderOpen = !this.genderOpen;
    },
  },
  created() {
    document.addEventListener('click', () => this.genderOpen = false);
  }
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
  background: url(./bg.png) no-repeat center / cover;
  border-bottom: 1px solid #a9b8cf;

  @media (max-width: 1365px) {
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
  background: url(./menu.png) no-repeat center;

  @media (min-width: 1366px) {
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

  @media (max-width: 1365px) {
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
