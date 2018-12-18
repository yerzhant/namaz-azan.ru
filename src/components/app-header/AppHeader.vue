<template lang="pug">
  header.header
    .menu
    .container
      .gender.drop-down Намаз:
        span.drop-down__selected-item {{ gender }}
        .drop-down__items
          .drop-down__item Для мужчин
          .drop-down__item Для женщин
      .madhhab.drop-down Мазхаб:
        span.drop-down__selected-item Ханафи
      .basmalah
        img.img(src='./basmalah.png')
      .language.drop-down Язык:
        span.drop-down__selected-item Русский
          img.flag(src='./ru.png')
      .tutoring Обучение намазу
</template>

<script>
export default {
  computed: {
    gender() {
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
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  width: calc(100% - 200px);
  height: 50px;
  background: url(./bg.png) no-repeat center / cover;
  border-bottom: 1px solid #a9b8cf;
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
  > div {
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

  &__selected-item {
    color: #0a6e9c;
    margin-left: 3px;
    padding-right: 15px;
    background: url(./drop-down.png) no-repeat right;

    .flag {
      margin-left: 10px;
    }
  }

  &__items {
    // display: none;
    position: absolute;
    top: 50px;
    right: 0;
    left: 0;
  }

  &__item {
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

    &:hover {
      background-color: #f6fbff;
    }
  }
}
</style>
