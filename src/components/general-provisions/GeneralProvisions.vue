<template lang="pug">
.general-provisions
  .main
    .info
      .title {{ title }}
      .desc {{ desc }}
      AppButton(:link="link" blue :height="36") УЗНАТЬ ПОДРОБНО
    .image(:class="image")
  .buttons
    .button(:class="{active: index == 0}" @click="index = 0")
      .image.ma-hiya
      .title ЧТО ТАКОЕ НАМАЗ?
    .button(:class="{active: index == 1}" @click="index = 1")
      .image.aqsaam
      .title ВИДЫ НАМАЗОВ
    .button(:class="{active: index == 2}" @click="index = 2")
      .image.shuruut
      .title УСЛОВИЯ НАМАЗА
    .button(:class="{active: index == 3}" @click="index = 3")
      .image.azan-iqamat
      .title АЗАН И ИКАМАТ
    .button(:class="{active: index == 4}" @click="index = 4")
      .image.aadaab
      .title ЭТИКЕТ (АДАБЫ) НАМАЗА
    .button(:class="{active: index == 5}" @click="index = 5")
      .image.fasaad
      .title ЧТО НАРУШАЕТ НАМАЗ
</template>

<script>
import routePrefix from "@/mixins/routePrefix";
import AppButton from "@/components/AppButton.vue";

const info = [
  {
    title: "ЧТО ТАКОЕ НАМАЗ?",
    desc: `Намаз – это персидское слово обозначает один из самых важных видов поклонения
          Всевышнему Аллаху: определенные слова и движения, которые вместе составляют
          исламский молитвенный обряд. Каждый совершеннолетний (по Шариату) и находящийся...`,
    image: "ma-hiya",
  },
  {
    title: "ВИДЫ НАМАЗОВ",
    desc: `Намазы делятся на три вида: фард-намазы, совершение которых является обязанностью
          каждого мусульманина, ваджиб-намазы, которые также обязательны, как и фарз-намазы,
          сунна-муаккада, совершение которых крайне желательно и нафиль-намазы. К нафиль намазам...`,
    image: "aqsaam",
  },
  {
    title: "УСЛОВИЯ НАМАЗА",
    desc: `Условия намаза – это требования, не считающиеся составной частью самого намаза,
          выполнять которые, тем не менее, необходимо, чтобы намаз был совершен правильно,
          а значит, действителен. Если не соблюсти хотя бы одно из условий намаза, он не будет засчитан как...`,
    image: "shuruut",
  },
  {
    title: "АЗАН И ИКАМАТ",
    desc: `«Азан» – это арабское слово которое означает «объявление», «извещение». В применении
          к намазу азан означает громкое объявление людям том, что настало время намаза. Икамат – это
          формула оповещения собравшихся в мечети о начале намаза. Таким образом...`,
    image: "azan-iqamat",
  },
  {
    title: "ЭТИКЕТ (АДАБЫ) НАМАЗА",
    desc: `Намаз – это предстояние перед Всевышним Аллахом, прямое обращение к Нему и важнейший вид
          поклонения. Поэтому человеку следует, все время держа это в голове, проявлять в намазе
          искренность, скромность и сосредоточенность. Стоять прямо, смотреть строго...`,
    image: "aadaab",
  },
  {
    title: "ЧТО НАРУШАЕТ НАМАЗ",
    desc: `После того, как мы научились совершать намаз, нам необходимо также знать о том, что
          нарушает его действительность, чтобы избегать этих вещей. В первую очередь, нужно
          убедиться, что соблюдены все условия намаза, – невыполнение хотя бы одного из них сделает...`,
    image: "fasaad",
  },
];

export default {
  props: {
    initialIndex: Number,
  },
  data() {
    return {
      index: 0,
    };
  },
  computed: {
    title() {
      return info[this.index].title;
    },
    desc() {
      return info[this.index].desc;
    },
    image() {
      return info[this.index].image;
    },
    link() {
      switch (this.image) {
        // case 'shuruut':
        //   return '/shart/makan';

        default:
          return `${this.routePrefix}/al-ahkaamul-aammah/${this.image}`;
      }
    },
  },
  watch: {
    initialIndex() {
      if (this.initialIndex) {
        this.index = this.initialIndex;
      }
    },
  },
  created() {
    if (this.initialIndex) {
      this.index = this.initialIndex;
    }
  },
  components: {
    AppButton,
  },
  mixins: [routePrefix],
};
</script>

<style lang="scss" scoped>
.general-provisions {
  .main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 440px;
    background: url(./bg.png) no-repeat center;

    .image {
      width: 50%;
      height: 440px;
      background-repeat: no-repeat;
      background-size: cover;

      &.ma-hiya {
        background-image: url(./ma-hiya.jpg);
      }

      &.aqsaam {
        background-image: url(./aqsaam.jpg);
      }

      &.shuruut {
        background-image: url(./shuruut.jpg);
      }

      &.azan-iqamat {
        background-image: url(./azan-iqamat.jpg);
      }

      &.aadaab {
        background-image: url(./aadaab.jpg);
      }

      &.fasaad {
        background-image: url(./fasaad.jpg);
      }
    }
  }

  .info {
    flex-basis: 50%;
    justify-self: flex-end;
    width: 540px;
    padding-left: calc(50% - 540px);
    padding-right: 135px;

    .title {
      font-weight: 500;
      font-size: 20px;
      line-height: 1;
      color: #3a3a3a;
      border-bottom: 1px solid #cbd3db;
      padding-bottom: 35px;
      margin-bottom: 15px;
    }

    .desc {
      line-height: 22px;
      margin-bottom: 24px;
    }
  }

  .buttons {
    display: flex;
    justify-content: center;
    height: 120px;
    background-color: #eff5f9;
    border-top: 1px solid #cdd5db;
  }

  .button {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 180px;
    text-align: center;
    font-size: 11px;
    color: #343b3f;
    cursor: pointer;

    &::before {
      position: absolute;
      left: 0;
      content: "";
      width: 1px;
      height: 90px;
      background-color: #dae2e8;
    }

    &:last-child::after {
      position: absolute;
      right: 0;
      content: "";
      width: 1px;
      height: 90px;
      background-color: #dae2e8;
    }

    &:hover,
    &.active {
      color: #2b9ace;
      background-color: #f5f9fb;

      &::before,
      + ::before,
      &:last-child::after {
        height: 100%;
      }

      .image {
        &.ma-hiya {
          background-image: url(./ma-hiya-active.png);
        }

        &.aqsaam {
          background-image: url(./aqsaam-active.png);
        }

        &.shuruut {
          background-image: url(./shuruut-active.png);
        }

        &.azan-iqamat {
          background-image: url(./azan-iqamat-active.png);
        }

        &.aadaab {
          background-image: url(./aadaab-active.png);
        }

        &.fasaad {
          background-image: url(./fasaad-active.png);
        }
      }
    }

    .image {
      height: 45px;
      background-repeat: no-repeat;
      background-position: center;

      &.ma-hiya {
        background-image: url(./ma-hiya.png);
      }

      &.aqsaam {
        background-image: url(./aqsaam.png);
      }

      &.shuruut {
        background-image: url(./shuruut.png);
      }

      &.azan-iqamat {
        background-image: url(./azan-iqamat.png);
      }

      &.aadaab {
        background-image: url(./aadaab.png);
      }

      &.fasaad {
        background-image: url(./fasaad.png);
      }
    }

    .title {
      padding-top: 8px;
    }
  }
}
</style>
