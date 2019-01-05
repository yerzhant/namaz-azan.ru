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
          .subitem-l2(@click="goTo('/tahharah/gusl')") Гусль
          .subitem-l2(@click="goTo('/tahharah/wudu')") Вуду

      .item(:class="{open: namaz}" @click="namaz = !namaz")
        .info
          .titles.submenu
            .title НАМАЗ
            .sub-title Все виды намаза
        .subitems(v-show="namaz")
          .subitem
            .title-block(:class="{open: fard}" @click.stop="fard = !fard")
              .title ФАРД НАМАЗЫ
            .subitems(v-show="fard")
              .subitem-l2(@click="goTo('/fadjr')") Фаджр
              .subitem-l2(@click="goTo('/dhuhr')") Зухр
              .subitem-l2(@click="goTo('/asr')") Аср
              .subitem-l2(@click="goTo('/maghrib')") Магриб
              .subitem-l2(@click="goTo('/isha')") Иша
          .subitem
            .title-block(:class="{open: wadjib}" @click.stop="wadjib = !wadjib")
              .title ВАДЖИБ НАМАЗЫ
            .subitems(v-show="wadjib")
              .subitem-l2(@click="goTo('/witr')") Витр
          .subitem
            .title-block(:class="{open: sunnah}" @click.stop="sunnah = !sunnah")
              .title СУННАТ НАМАЗЫ
            .subitems(v-show="sunnah")
              .subitem-l2(@click="goTo('/fadjr')") Фаджр
              .subitem-l2(@click="goTo('/dhuhr')") Зухр
              .subitem-l2(@click="goTo('/asr')") Аср
              .subitem-l2(@click="goTo('/maghrib')") Магриб
              .subitem-l2(@click="goTo('/isha')") Иша

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
  methods: {
    goTo(path) {
      this.$store.commit('showMenu', false);
      this.$router.push(path);
    },
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
  &::-webkit-scrollbar {
    width: 5px;
    &-thumb {
      background-color: #34455e;
    }
  }
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
  .title-block {
    background-color: #0d1e3c;
    border-bottom: 1px solid #34455e;
    padding: 20px;
    padding-right: 22px;
    &:hover {
      background-color: #07162d;
    }
    &.open {
      background-color: #07162d;
      .title {
        background-image: url(./open-subitem.png), url(./dot-open.png);
      }
    }
    .title {
      background: url(./down-subitem.png) no-repeat right / 12px,
        url(./dot.png) no-repeat left / 3px;
      font-size: 13px;
      line-height: 1;
      color: #d8e3f0;
      padding-left: 10px;
    }
  }
}
.subitem-l2 {
  background-color: #162a4e;
  border-bottom: 1px solid #34455e;
  color: #d8e3f0;
  line-height: 1;
  padding: 19px 30px;
}
.socials-block {
  margin-top: 24px;
  margin-bottom: 24px;
  padding-left: 20px;
}
</style>
