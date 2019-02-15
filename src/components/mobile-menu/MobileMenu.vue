<template lang="pug">
  menu.mobile-menu(
    v-show="$store.state.showMenu"
    @click="$store.commit('showMenu', false)"
  )
    .header
      .close(@click="$store.commit('showMenu', false)")
      .bar
      .info Энциклопедия намаза - спецпроект образовательного портала
        a.link(href="https://azan.ru")  Azan.ru
    .static-bar Главное меню
    .items
      .item(@click="goTo('/roiisiyyah')")
        .info
          .titles
            .title ГЛАВНАЯ
            .sub-title {{ $route.path === '/roiisiyyah' ? 'Вы на главной' : 'Перейти на главную' }}

      .item(:class="{open: general}" @click.stop="general = !general")
        .info
          .titles.submenu
            .title ВВЕДЕНИЕ
            .sub-title Общие положения
        .subitems(v-show="general")
          .subitem-l2(@click="goTo('/al-ahkaamul-aammah/ma-hiya')") Что такое намаз
          .subitem-l2(@click="goTo('/al-ahkaamul-aammah/aqsaam')") Виды намазов
          .subitem-l2(@click="goTo('/al-ahkaamul-aammah/shuruut')") Условия намаза
          .subitem-l2(@click="goTo('/al-ahkaamul-aammah/azan-iqamat')") Азан и икамат
          .subitem-l2(@click="goTo('/al-ahkaamul-aammah/aadaab')") Этикет (адабы) намаза
          .subitem-l2(@click="goTo('/al-ahkaamul-aammah/fasaad')") Что нарушает намаз

      //- .item(:class="{open: shart}" @click.stop="shart = !shart")
      //-   .info
      //-     .titles.submenu
      //-       .title УСЛОВИЯ
      //-       .sub-title Условия намаза
      //-   .subitems(v-show="shart")
      //-     .subitem-l2(@click="goTo('/shart/makan')") Чистота места
      //-     .subitem-l2(@click="goTo('/shart/tahharah')") Омовение
      //-     .subitem-l2(@click="goTo('/shart/awrah')") Аурат
      //-     .subitem-l2(@click="goTo('/shart/qiblah')") Кибла
      //-     .subitem-l2(@click="goTo('/shart/zaman')") Время
      //-     .subitem-l2(@click="goTo('/shart/niet')") Намерение

      .item(:class="{open: tahharah}" @click.stop="tahharah = !tahharah")
        .info
          .titles.submenu
            .title ТАХАРАТ
            .sub-title Очищение
        .subitems(v-show="tahharah")
          .subitem-l2(@click="goTo('/tahharah/istibra')") Истибра
          .subitem-l2(@click="goTo('/tahharah/istinja')") Истинджа
          .subitem-l2(@click="goTo('/tahharah/ghusl')") Гусль
          .subitem-l2(@click="goTo('/tahharah/wudu')") Вуду
          .subitem-l2(@click="goTo('/tahharah/tayammum')") Таяммум
          .subitem-l2(@click="goTo('/tahharah/masah')") Масх

      .item(:class="{open: namaz}" @click.stop="namaz = !namaz")
        .info
          .titles.submenu
            .title НАМАЗ
            .sub-title Все виды намаза
        .subitems(v-show="namaz")
          .subitem-l2(@click="goTo('/al-ahkaamul-aammah/azan-iqamat')") Азан, Икамат
          .subitem
            .title-block(:class="{open: fard}" @click.stop="fard = !fard")
              .title ФАРД НАМАЗЫ
            .subitems(v-show="fard")
              .subitem-l2(@click="goTo('/fadjr/fard')") Фаджр
              .subitem-l2(@click="goTo('/dhuhr/fard')") Зухр
              .subitem-l2(@click="goTo('/asr/fard')") Аср
              .subitem-l2(@click="goTo('/maghrib/fard')") Магриб
              .subitem-l2(@click="goTo('/isha/fard')") Иша
              .subitem-l2(@click="goTo('/jumuah/fard')") Джума
          .subitem
            .title-block(:class="{open: wadjib}" @click.stop="wadjib = !wadjib")
              .title ВАДЖИБ НАМАЗЫ
            .subitems(v-show="wadjib")
              .subitem-l2(@click="goTo('/witr/wadjib')") Витр
          .subitem
            .title-block(:class="{open: sunnah}" @click.stop="sunnah = !sunnah")
              .title СУННАТ НАМАЗЫ
            .subitems(v-show="sunnah")
              .subitem-l2(@click="goTo('/fadjr/sunnah')") Фаджр
              .subitem-l2(@click="goTo('/dhuhr/sunnah-before')") Зухр до фарда
              .subitem-l2(@click="goTo('/dhuhr/sunnah-after')") Зухр после фарда
              .subitem-l2(@click="goTo('/maghrib/sunnah')") Магриб
              .subitem-l2(@click="goTo('/isha/sunnah')") Иша

      .item(:class="{open: tutoring}" @click.stop="tutoring = !tutoring")
        .info
          .titles.submenu
            .title ОБУЧЕНИЕ
            .sub-title Видео-фото уроки
        .subitems(v-show="tutoring")
          .subitem-l2(@click="goTo('/solaatil-uulaa')") Мой первый намаз
          .subitem-l2(@click="goTo('/tutorial/fard')") Намаз: подробно
          a.subitem-l2(href="https://www.youtube.com/watch?v=5b6t9fBLl9s") Видео уроки

      .socials-block
        Socials(mobile)
</template>

<script>
import Socials from '@/components/socials/Socials.vue';

export default {
  data() {
    return {
      general: false,
      shart: false,
      tahharah: false,
      namaz: false,
      fard: false,
      wadjib: false,
      sunnah: false,
      tutoring: false,
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
      }
      .sub-title {
        font-weight: 300;
        color: #aebbd2;
        margin-top: 6px;
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
  display: block;
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
