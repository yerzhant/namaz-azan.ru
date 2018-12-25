<template lang="pug">
  menu.menu
    .header
      .title ЭНЦИКЛОПЕДИЯ НАМАЗА
      .desc Самоучитель и справочник
        br
        | Cпецпроект Azan.ru

    nav.items
      router-link.item(to="/")
        .title ГЛАВНАЯ
        .desc {{ $route.path === '/' ? 'Вы на главной' : 'Перейти на главную' }}
      .item.right(
        :class="{open: flags.taharat}"
        @click.stop="flags.taharat = !flags.taharat, closeAll('taharat')"
      )
        .title ТАХАРАТ
        .desc Очищение
      .item.right(
        :class="{open: flags.tutoring}"
        @click.stop="flags.tutoring = !flags.tutoring, closeAll('tutoring')"
      )
        .title ОБУЧЕНИЕ
        .desc Видео-фото уроки
      .item.right(
        :class="{open: flags.namaz}"
        @click.stop="flags.namaz = !flags.namaz, closeAll('namaz')"
      )
        .title НАМАЗ
        .desc Все виды намаза

    menu.submenu(v-show="flags.taharat")
      img.image(src="./taharat-bg.jpg")
      nav.items
        router-link.item(to="#")
          .title ГУСЛЬ
          .desc Полное омовение
        router-link.item(to="#")
          .title ВУДУ
          .desc Малое омовение

    menu.submenu(v-show="flags.tutoring")
      img.image(src="./tutoring-bg.jpg")
      nav.items
        router-link.item(to="#")
          .title МОЙ ПЕРВЫЙ НАМАЗ
          .desc Обзор для новичков
        router-link.item(to="#")
          .title НАМАЗ: ПОДРОБНО
          .desc Детализированый обзор
        router-link.item(to="#")
          .title ВИДЕО УРОКИ
          .desc Омовение, намаз

    menu.submenu(v-show="flags.namaz")
      img.image(src="./namaz-bg.jpg")
      nav.items
        .item.right
          .title ОБЩАЯ ИНФОРМАЦИЯ
          .desc К прочтению
        .item.right(
          :class="{open: flags.fard}"
          @click.stop="flags.fard = !flags.fard, closeAll('namaz', 'fard')"
        )
          .title ФАРД НАМАЗЫ
          .desc Обязательные
        .item.right
          .title ВАДЖИБ НАМАЗЫ
          .desc Близко к обязательным
        .item.right
          .title СУННАТ НАМАЗЫ
          .desc Желательные

      menu.submenu(v-show="flags.fard")
        .filler
        nav.items
          router-link.item(to="/fadjr")
            .title ФАДЖР
            .desc Утренний
          router-link.item(to="#")
            .title ЗУХР
            .desc Полуденный
          router-link.item(to="#")
            .title АСР
            .desc Послеполуденный
          router-link.item(to="#")
            .title МАГРИБ
            .desc Вечерний
          router-link.item(to="#")
            .title ИША
            .desc Ночной

    .socials-block
      Socials
</template>

<script>
import Socials from '@/components/socials/Socials.vue';

export default {
  data() {
    return {
      flags: {
        taharat: false,
        tutoring: false,
        namaz: false,
        fard: false,
      },
    };
  },
  methods: {
    closeAll(exceptL1, exceptL2) {
      Object.keys(this.flags)
        .filter(k => k !== exceptL1 && k !== exceptL2)
        .forEach((k) => {
          this.flags[k] = false;
        });
    },
  },
  created() {
    document.addEventListener('click', this.closeAll);
  },
  destroyed() {
    document.removeEventListener('click', this.closeAll);
  },
  components: {
    Socials,
  },
};
</script>

<style lang="scss" scoped>
.menu {
  position: relative;
  width: 197px;

  @media (max-width: 1365px) {
    display: none;
  }
}
.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 22px;
  height: 145px;
  background: url(./bg.jpg) no-repeat;
  background-position-y: -13px;
  border-bottom: 1px solid #313e54;
  .title {
    font-size: 16px;
    letter-spacing: -0.5px;
    line-height: 24px;
    color: #f0faff;
    font-family: $open-sans;
    font-weight: bold;
    text-shadow: 0 0 3px rgba(0, 0, 0, 0.75);
    border-bottom: 1px solid #2f4a75;
    padding-bottom: 10px;
    margin-bottom: 10px;
  }
  .desc {
    color: #aebbd2;
    font-weight: 300;
    font-size: 11px;
    line-height: 17px;
  }
}
.items {
  background-color: #081934;
}
.item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 71px;
  border-bottom: 1px solid #313e54;
  font-size: 12px;
  padding: 0 22px;
  cursor: pointer;
  .title {
    color: #d8e3f0;
    margin-bottom: 4px;
  }
  .desc {
    font-weight: 300;
    color: #aebbd2;
  }
  &:hover,
  &.router-link-exact-active {
    background-color: #07162d;
    .title {
      color: #fff;
    }
  }
  &:hover {
    &.right {
      background-image: url(./right-active.png);
    }
  }
  &.right {
    background-image: url(./right.png);
    background-repeat: no-repeat;
    background-position: 197px - 22px;
    &.open {
      background-image: url(./right-open.png);
      background-color: #07162d;
      .title {
        color: #fff;
      }
    }
  }
}
.submenu {
  z-index: 10000;
  position: absolute;
  top: 0;
  right: -197px;
  width: 197px;
  border-left: 1px solid #313e54;
  .image {
    display: block;
  }
  .filler {
    height: 3px;
    background-color: #081934;
  }
}
.socials-block {
  text-align: center;
  margin-top: 20px;
}
</style>
