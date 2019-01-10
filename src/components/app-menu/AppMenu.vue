<template lang="pug">
  menu.menu(:class="$store.state.menu")
    .header
      .title ЭНЦИКЛОПЕДИЯ НАМАЗА
      .desc Самоучитель и справочник
        br
        | Cпецпроект
        a.desc(href="https://azan.ru")  Azan.ru

    .back-to-main(@click="$store.commit('setMenu')")
      span Назад в меню
      img(src="./menu.png")
    .level-2-image(:class="$store.state.namaz")

    nav.items.items-l1
      router-link.item(to="/main")
        .title ГЛАВНАЯ
        .desc {{ $route.path === '/main' ? 'Вы на главной' : 'Перейти на главную' }}
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
        router-link.item(to="/tahharah/ghusl")
          .title ГУСЛЬ
          .desc Полное омовение
        router-link.item(to="/tahharah/wudu")
          .title ВУДУ
          .desc Малое омовение

    menu.submenu(v-show="flags.tutoring")
      img.image(src="./tutoring-bg.jpg")
      nav.items
        router-link.item(to="/first-namaz")
          .title МОЙ ПЕРВЫЙ НАМАЗ
          .desc Обзор для новичков
        router-link.item(to="/tutorial/fard")
          .title НАМАЗ: ПОДРОБНО
          .desc Детализированый обзор
        a.item(href="https://www.youtube.com/watch?v=5b6t9fBLl9s")
          .title ВИДЕО УРОКИ
          .desc Омовение, намаз

    menu.submenu(v-show="flags.namaz")
      img.image(src="./namaz-bg.jpg")
      nav.items
        a.item(href="https://azan.ru/durus/fikh")
          .title ОБЩАЯ ИНФОРМАЦИЯ
          .desc К прочтению
        .item.right(
          :class="{open: flags.fard}"
          @click.stop="flags.fard = !flags.fard, closeAll('namaz', 'fard')"
        )
          .title ФАРД НАМАЗЫ
          .desc Обязательные
        .item.right(
          :class="{open: flags.wadjib}"
          @click.stop="flags.wadjib = !flags.wadjib, closeAll('namaz', 'wadjib')"
        )
          .title ВАДЖИБ НАМАЗЫ
          .desc Близко к обязательным
        .item.right(
          :class="{open: flags.sunnah}"
          @click.stop="flags.sunnah = !flags.sunnah, closeAll('namaz', 'sunnah')"
        )
          .title СУННАТ НАМАЗЫ
          .desc Желательные

      menu.submenu(v-show="flags.fard")
        .filler
        nav.items
          router-link.item(to="/fadjr/fard")
            .title ФАДЖР
            .desc Утренний
          router-link.item(to="/dhuhr/fard")
            .title ЗУХР
            .desc Полуденный
          router-link.item(to="/asr/fard")
            .title АСР
            .desc Послеполуденный
          router-link.item(to="/maghrib/fard")
            .title МАГРИБ
            .desc Вечерний
          router-link.item(to="/isha/fard")
            .title ИША
            .desc Ночной

      menu.submenu(v-show="flags.wadjib")
        .filler
        nav.items
          router-link.item(to="/witr/wadjib")
            .title ВИТР
            .desc Нечетный

      menu.submenu(v-show="flags.sunnah")
        .filler
        nav.items
          router-link.item(to="/fadjr/sunnah")
            .title ФАДЖР
            .desc До фарда
          router-link.item(to="/dhuhr/sunnah-before")
            .title ЗУХР
            .desc До фарда
          router-link.item(to="/dhuhr/sunnah-after")
            .title ЗУХР
            .desc После фарда
          router-link.item(to="/maghrib/sunnah")
            .title МАГРИБ
            .desc После фарда
          router-link.item(to="/isha/sunnah")
            .title ИША
            .desc После фарда

    nav.items.items-l2
      .item-l2(
        v-for="item in $store.state.menuItems"
        :class="{right: item.right, down: !item.right, open: item.open}"
        @click="openL2(item)"
      )
        .title(v-if="item.title") {{ item.title }}
        .submenu-l2(v-show="item.open")
          .subitem-l2(
            v-for="subitem in item.items"
            :class="{active: subitem.active}"
            :data-link="subitem.link.substring(1)"
            @click.stop="goTo(subitem.link, item)"
          ) {{ subitem.title }}

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
        wadjib: false,
        sunnah: false,
      },
    };
  },
  methods: {
    closeAll(exceptL1, exceptL2) {
      Object.keys(this.flags)
        .filter(k => k !== exceptL1 && k !== exceptL2)
        .forEach(k => {
          this.flags[k] = false;
        });
    },
    openL2(item) {
      this.$store.state.menuItems
        .filter(i => i !== item)
        .filter(i => i.title)
        .forEach(i => {
          i.open = false;
        });
      item.open = !item.open;
    },
    goTo(link, item) {
      if (link.substr(0, 1) === '#') {
        this.$scrollTo(link, { offset: -50 });
      } else {
        this.$router.push(link);
        item.open = false;
      }
    },
    scrolling() {
      const curPos = window.scrollY + 50;
      document.querySelectorAll('.item-l2.down .subitem-l2.active').forEach(i => {
        i.classList.remove('active');
      });
      const bodyRect = document.body.getBoundingClientRect();
      document.querySelectorAll('.rukn, .admin-text .section').forEach(r => {
        const rect = r.getBoundingClientRect();
        if (curPos >= rect.top - bodyRect.top && curPos < rect.bottom - bodyRect.top) {
          document.querySelector(`.subitem-l2[data-link=${r.id}]`).classList.add('active');
          this.$store.state.menuItems
            .filter(i => !i.right)
            .forEach(i => {
              i.open = i.items.some(s => s.link.substring(1) === r.id);
            });
        }
      });
    },
  },
  created() {
    document.addEventListener('click', this.closeAll);
    document.addEventListener('scroll', this.scrolling);
  },
  destroyed() {
    document.removeEventListener('click', this.closeAll);
    document.removeEventListener('scroll', this.scrolling);
  },
  components: {
    Socials,
  },
};
</script>

<style lang="scss" scoped>
.menu {
  position: fixed;
  width: 197px;
  .back-to-main,
  .level-2-image,
  .items-l2 {
    display: none;
  }
  &.level-2 {
    .header,
    .items-l1 {
      display: none;
    }
    .back-to-main {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 50px;
      padding: 0 23px;
      font-weight: 300;
      font-size: 13px;
      color: #aebbd2;
      background-color: #081934;
      cursor: pointer;
    }
    .level-2-image {
      display: block;
      height: 69px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      &.fadjr {
        background-image: url(./fadjr.jpg);
      }
      &.tutorial,
      &.dhuhr {
        background-image: url(./dhuhr.jpg);
      }
      &.asr {
        background-image: url(./asr.jpg);
      }
      &.maghrib {
        background-image: url(./maghrib.jpg);
      }
      &.isha {
        background-image: url(./isha.jpg);
      }
      &.witr {
        background-image: url(./witr.jpg);
      }
      &.ghusl {
        background-image: url(./ghusl.jpg);
      }
      &.wudu {
        background-image: url(./wudu.jpg);
      }
    }
    .items-l2 {
      display: block;
      border-top: 1px solid #313f54;
    }
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
  width: 197px;
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
    font-weight: 500;
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
.item-l2 {
  position: relative;
  cursor: pointer;
  &:hover {
    background-color: #07162d;
  }
  &.right > .title {
    background: url(./right-2.png) no-repeat;
    background-position: 197px - 27px;
  }
  &.right.open > .title {
    background-image: url(./right-open.png);
    background-color: #07162d;
  }
  &.down > .title {
    background: url(./down.png) no-repeat;
    background-position: 197px - 30px;
  }
  &.down.open > .title {
    background-image: url(./up.png);
    background-color: #07162d;
  }
  .title {
    display: flex;
    align-items: center;
    height: 51px;
    font-size: 13px;
    color: #d8e4f3;
    padding: 0 22px;
    border-bottom: 1px solid #313f54;
  }
  &.right {
    .submenu-l2 {
      position: absolute;
      top: -1px;
      right: -197px;
      width: 197px;
      border-top: 1px solid #313f54;
      background-color: #0c1e3b;
      padding: 0;
    }
    .subitem-l2 {
      display: flex;
      align-items: center;
      height: 51px;
      padding: 0 22px;
      font-weight: normal;
      color: #d8e4f3;
      border-bottom: 1px solid #313f54;
      &:hover,
      &.active {
        color: #fff;
        background: #081934;
      }
    }
  }
}
.submenu-l2 {
  padding: 13px 0;
  background-color: #0e2243;
}
.subitem-l2 {
  font-weight: 300;
  font-size: 13px;
  color: #d8e3f0;
  padding: 5px 22px;
  &:hover,
  &.active {
    font-weight: normal;
    color: #ade9ff;
    background: url(./subitem-active.png) no-repeat 12px;
  }
}
</style>
