<template lang="pug">
  menu.mobile-menu(v-show="$store.state.showMenu")
    .header
      .close(@click="$store.commit('showMenu', false)")
      .bar
      .info Энциклопедия намаза - спецпроект образовательного портала
        a.link(href="https://azan.ru")  Azan.ru
    .static-bar Главное меню
    .items
      router-link.item(to="/main")
        .info
          .titles
            .title ГЛАВНАЯ
            .sub-title {{ $route.path === '/main' ? 'Вы на главной' : 'Перейти на главную' }}

      .item(:class="{open: tahharah}" @click="tahharah = !tahharah")
        .info
          .titles.submenu
            .title ТАХАРАТ
            .sub-title Очищение
        .subitems(v-show="tahharah")
          router-link.subitem-l2(to="/tahharah/gusl") Гусль
          router-link.subitem-l2(to="/tahharah/wudu") Вуду

      .item(:class="{open: namaz}" @click="namaz = !namaz")
        .info
          .titles.submenu
            .title НАМАЗ
            .sub-title Все виды намаза
        .subitems(v-show="namaz")
          .subitem
            .title(:class="{open: fard}" @click.stop="fard = !fard") ФАРД НАМАЗЫ
            .subitems(v-show="fard")
              router-link.subitem-l2(to="/fadjr") Фаджр
              router-link.subitem-l2(to="/dhuhr") Зухр
              router-link.subitem-l2(to="/asr") Аср
              router-link.subitem-l2(to="/maghrib") Магриб
              router-link.subitem-l2(to="/isha") Иша
          .subitem
            .title(:class="{open: wadjib}" @click.stop="wadjib = !wadjib") ВАДЖИБ НАМАЗЫ
            .subitems(v-show="wadjib")
              router-link.subitem-l2(to="/witr") Витр
          .subitem
            .title(:class="{open: sunnah}" @click.stop="sunnah = !sunnah") СУННАТ НАМАЗЫ
            .subitems(v-show="sunnah")
              router-link.subitem-l2(to="/fadjr") Фаджр
              router-link.subitem-l2(to="/dhuhr") Зухр
              router-link.subitem-l2(to="/asr") Аср
              router-link.subitem-l2(to="/maghrib") Магриб
              router-link.subitem-l2(to="/isha") Иша

      .socials-block
        Socials(mobile)
</template>

<script>
import Socials from '@/components/socials/Socials.vue';

export default {
  data() {
    return {
      tahharah: false,
      namaz: false,
      fard: false,
      wadjib: false,
      sunnah: false,
    };
  },
  components: {
    Socials,
  },
};
</script>

<style lang="scss" scoped>
.mobile-menu {
  z-index: 10000;
  position: fixed;
  top: 0;
  bottom: 0;
  width: 290px;
  box-shadow: 0 0 90px rgba(0, 0, 0, 0.56);
  background-color: #081933;
  &::before {
    z-index: -1;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    content: '';
    background-color: rgba($color: #000000, $alpha: 0.4);
  }
}
.header {
  display: flex;
  align-items: center;
  height: 70px;
  .close {
    width: 55px;
    height: 55px;
    cursor: pointer;
    background: url(./close.png) no-repeat center / 14px;
  }
  .bar {
    width: 1px;
    height: 48px;
    background-color: #303e53;
  }
  .info {
    font-size: 10px;
    font-weight: 300;
    color: #b0c1de;
    width: 170px;
    margin-left: 20px;
    .link {
      color: #5ca5e2;
    }
  }
}
.static-bar {
  display: flex;
  align-items: center;
  font-weight: 300;
  font-size: 10px;
  color: #8fa3c0;
  background-color: #303e53;
  padding: 0 20px;
  height: 20px;
}
.items {
  height: calc(100% - 90px);
  overflow-y: auto;
}
.item {
  display: block;
  outline: none;
  cursor: pointer;
  .info {
    padding: 23px 20px;
    border-bottom: 1px solid #34455e;
    .titles {
      font-size: 13px;
      line-height: 1;
      &.submenu {
        background: url(./down.png) no-repeat right / 14px;
      }
      .title {
        font-weight: 500;
        color: #d8e3f0;
        margin-bottom: 6px;
      }
      .sub-title {
        font-weight: 300;
        color: #aebbd2;
      }
    }
  }
  &.router-link-exact-active,
  &:hover {
    background-color: #07162d;
    .titles {
      .title {
        color: #f0faff;
      }
    }
  }
  &.open {
    background-color: #07162d;
    .titles {
      &.submenu {
        background-image: url(./open.png);
      }
      .title {
        color: #fff;
      }
    }
  }
}
.subitem {
  .title {
    background: url(./down-subitem.png) no-repeat 256px / 12px, url(./dot.png) no-repeat 20px / 3px;
    background-color: #0d1e3c;
    border-bottom: 1px solid #34455e;
    font-size: 13px;
    line-height: 1;
    color: #d8e3f0;
    padding: 20px 30px;
    &:hover {
      background-color: #07162d;
    }
    &.open {
      background-color: #07162d;
      background-image: url(./open-subitem.png), url(./dot-open.png);
    }
  }
}
.subitem-l2 {
  display: block;
  background-color: #162a4e;
  border-bottom: 1px solid #34455e;
  color: #d8e3f0;
  line-height: 1;
  padding: 19px 30px;
}
.socials-block {
  margin-top: 24px;
  padding-left: 20px;
}
</style>
