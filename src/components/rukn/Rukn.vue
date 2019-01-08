<template lang="pug">
  section.rukn(:id="`r${rakaat}-${type}`" :class="[type, {first: first, 'in-tour': tour}]")
    .header(v-if="!tour")
      .header-text
        h3.title {{ title }}
        .sub-title(v-if="subTitle") {{ subTitle }}
      .number {{ number }}
    .short-desc(v-if="!tour") {{ shortDesc }}
    .info
      .description
        .tabs(
          v-if="content1 || content2 || content3 || content4"
          :class="{full: content1 && content2 && content3 && content4}"
        )
          .tab(
            v-if="content1"
            :class="{active: tab1}"
            @click="tab2 = tab3 = tab4 = false; tab1 = true"
          ) Транскрипция
          .tab(
            v-if="content2"
            :class="{active: tab2}"
            @click="tab1 = tab3 = tab4 = false; tab2 = true"
          ) Перевод
          .tab(
            v-if="content3"
            :class="{active: tab3}"
            @click="tab1 = tab2 = tab4 = false; tab3 = true"
          ) Арабский
          .tab(
            v-if="content4"
            :class="{active: tab4}"
            @click="tab1 = tab2 = tab3 = false; tab4 = true"
          ) Описание
        .tab-contents
          .header(v-if="tour")
            .header-text
              h3.title {{ title }}
              .sub-title(v-if="subTitle") {{ subTitle }}
            .number {{ number }}
          .tab-content(:class="{active: tab1}" v-html="content1")
          .tab-content(:class="{active: tab2}" v-html="content2")
          .tab-content(:class="{active: tab3}" v-html="content3")
          .tab-content(:class="{active: tab4}" v-html="content4")
          AppPlayer.player(:type="audio")
          .buttons
            AppButton(:height="36" blue @click="goNext" v-if="!last") ДАЛЕЕ
            AppButton.print(:height="36" @click="print") РАСПЕЧАТАТЬ
      .media
        .image-1(:class="[$store.state.gender, {active: image1}]")
        .image-2(:class="[$store.state.gender, {active: image2}]")
        .image-3(:class="[$store.state.gender, {active: image3}]")
        .tool-bar(:class="$store.state.gender")
          .button.image.active
          .filler
          .button.b1(:class="{active: image1}" @click="image2 = image3 = false; image1 = true") 1
          .button.b2(:class="{active: image2}" @click="image1 = image3 = false; image2 = true") 2
          .button.b3(:class="{active: image3}" @click="image1 = image2 = false; image3 = true") 3
      .next-button(v-if="tour && !last")
        AppButton(:height="36" blue @click="goNext") ДАЛЕЕ
</template>

<script>
import AppButton from '@/components/AppButton.vue';
import AppPlayer from '@/components/app-player/AppPlayer.vue';

export default {
  props: {
    rakaat: String,
    rakaats: String,
    type: String,
    kind: String,
    next: String,
    first: Boolean,
    last: Boolean,
    tour: Boolean,
    title: String,
    subTitle: String,
    number: String,
    shortDesc: String,
    content1: {
      type: String,
      default: '',
    },
    content2: {
      type: String,
      default: '',
    },
    content3: {
      type: String,
      default: '',
    },
    content4: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      image1: true,
      image2: false,
      image3: false,
      tab1: false,
      tab2: false,
      tab3: false,
      tab4: false,
    };
  },
  computed: {
    audio() {
      switch (this.type) {
        case 'qiyam':
          return this.rakaat === '1' ? 'sana+istiatha' : 'basmala';
        case 'qiraat':
          switch (this.rakaat) {
            case '1':
              return 'fatiha+kauthar';
            case '2':
              return 'fatiha+ikhlas';
            case '3':
              return this.kind === 'sunna' || this.kind === 'wadjib' ? 'fatiha+falaq' : 'fatiha';
            default:
              return this.kind === 'sunna' ? 'fatiha+nas' : 'fatiha';
          }
        case 'tashahhud':
          if (this.rakaats === '2') return 'attahiyat+salawat+dua';
          if (this.rakaat === '2') return 'attahiyat';
          return 'attahiyat+salawat+dua';
        case 'salam-right':
        case 'salam-left':
          return 'salam';
        case 'wudu dua':
          return 'wudu-dua';
        default:
          return this.type;
      }
    },
  },
  methods: {
    goNext() {
      if (this.tour) {
        this.$emit('next');
      } else if (this.next.substr(0, 1) === '#') {
        this.$scrollTo(this.next);
      } else {
        this.$router.push(this.next);
      }
    },
    print() {
      const win = window.open();
      win.document.write(`<p>${this.content1}</p>
        <p>${this.content2}</p><p>${this.content3}</p><p>${this.content4}</p>`);
      win.print();
      win.close();
    },
    reset() {
      Object.keys(this.$data).forEach(k => {
        this.$data[k] = false;
      });
      this.image1 = true;
      if (this.content1) {
        this.tab1 = true;
      } else if (this.content2) {
        this.tab2 = true;
      } else if (this.content3) {
        this.tab3 = true;
      } else if (this.content4) {
        this.tab4 = true;
      }
    },
  },
  created() {
    this.reset();
  },
  components: {
    AppButton,
    AppPlayer,
  },
};
</script>

<style lang="scss" scoped>
.rukn {
  width: 100%;
  padding: 70px 35px;
  background: url(./bg-top.png) no-repeat top;
  &.first {
    background: none;
    padding-top: 86px;
  }
  @media (max-width: $mobile) {
    padding: 60px 0;
  }
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 7px 16px;
  margin-bottom: 17px;
  border-bottom: 1px solid #cbd3db;
  .title {
    font-weight: 500;
    font-size: 20px;
    color: #464747;
  }
  .sub-title {
    font-size: 13px;
    color: #3a73a3;
  }
  .number {
    font-weight: bold;
    font-size: 32px;
    color: #2b87ce;
  }
}
.short-desc {
  font-family: $pt-sans;
  font-size: 16px;
  line-height: 23px;
  margin-bottom: 52px;
  @media (max-width: $mobile) {
    padding: 0 7px;
    margin-bottom: 40px;
  }
}
.info {
  display: flex;
  @media (max-width: $mobile) {
    flex-wrap: wrap;
  }
}
.description {
  flex-grow: 1;
  flex-basis: 469px;
  @media (max-width: $mobile) {
    flex-basis: fill;
  }
}
.tabs {
  display: flex;
  background-color: #eff4f7;
  border: 1px solid #cbd3db;
  height: 41px;
  margin-bottom: 50px;
  @media (max-width: $mobile) {
    margin-bottom: 20px;
  }
  &.full {
    border-right: none;
  }
  > .tab {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: 25%;
    height: 40px;
    border-right: 1px solid #cbd3db;
    cursor: pointer;
    font-family: $pt-sans;
    font-size: 13px;
    color: #465d73;
    @media (max-width: $mobile) {
      font-size: 9px;
    }
    &.active {
      background-color: #fff;
      border-bottom: 1px solid #fff;
    }
  }
}
.tab-contents {
  padding: 0 10px;
}
.tab-content {
  display: none;
  font-family: $pt-sans;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 38px;
  &.active {
    display: block;
  }
}
.player {
  margin-top: 67px;
  margin-bottom: 41px;
  @media (max-width: $mobile) {
    margin-top: 30px;
  }
}
.buttons {
  @media (max-width: $mobile) {
    display: none;
  }
  > * {
    margin-right: 10px;
  }
  .print {
    color: #4a5a67;
  }
}
.media {
  display: flex;
  width: 480px;
  height: 569px;
  margin-left: 58px;
  background: url(./bg-media.png) no-repeat top;
  background-color: #f7fcff;
  border-top: 1px solid #cbd3db;
  @media (max-width: $mobile) {
    width: 100%;
    height: 610px;
    margin-left: 0;
    flex-direction: column-reverse;
  }
}
.image-1,
.image-2,
.image-3 {
  display: none;
  flex-grow: 1;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: $mobile) {
    background-size: contain;
  }
  &.active {
    display: block;
  }
}
.tool-bar {
  background-color: #eff5f7;
  width: 43px;
  border-left: 1px solid #cbd3db;
  @media (max-width: $mobile) {
    width: 100%;
    display: flex;
    border-left: none;
    border-bottom: 1px solid #cbd3db;
    .filler {
      flex-grow: 1;
    }
  }
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45px;
    font-size: 17px;
    color: #9bafbf;
    border-bottom: 1px solid #cbd3db;
    cursor: pointer;
    @media (max-width: $mobile) {
      width: 43px;
      border-bottom: none;
      border-left: 1px solid #cbd3db;
    }
    &.image {
      background: url(./images.png) no-repeat center;
      margin-bottom: 175px;
      @media (max-width: $mobile) {
        margin-bottom: 0;
        border-right: 1px solid #cbd3db;
        border-left: none;
      }
    }
    &.b1 {
      border-top: 1px solid #cbd3db;
      @media (max-width: $mobile) {
        border-top: none;
      }
    }
    &.active {
      background-color: #fff;
      color: #2b87ce;
    }
  }
  .b1,
  .b2,
  .b3 {
    display: none;
  }
}
.niet {
  .player {
    display: none;
  }
  .image-1 {
    background-image: url(./niet.png);
    @media (max-width: $mobile) {
      background-size: initial;
    }
    &.woman {
      background-image: url(./niet-woman.png);
    }
  }
}
.takbir {
  .b1,
  .b2 {
    display: flex;
  }
  .tool-bar.woman {
    .b1,
    .b2 {
      display: none;
    }
  }
  .image-1 {
    background-image: url(./takbir-1.png);
    @media (max-width: $mobile) {
      background-size: initial;
    }
    &.woman {
      background-image: url(./takbir-woman.png);
    }
  }
  .image-2 {
    background-image: url(./takbir-2.png);
    &.woman {
      background-image: url(./takbir-woman.png);
    }
  }
}
.qiyam,
.qiraat {
  .b1,
  .b2 {
    display: flex;
  }
  .image-1 {
    background-image: url(./qiyam-1.png);
    @media (max-width: $mobile) {
      background-size: initial;
    }
    &.woman {
      background-image: url(./qiyam-woman-1.png);
    }
  }
  .image-2 {
    background-image: url(./qiyam-2.png);
    &.woman {
      background-image: url(./qiyam-woman-2.png);
    }
  }
}
.ruku {
  .b1,
  .b2 {
    display: flex;
  }
  .tool-bar.woman {
    .b1,
    .b2 {
      display: none;
    }
  }
  .image-1 {
    background-image: url(./ruku-1.png);
    background-position-y: 215px;
    @media (max-width: $mobile) {
      background-size: initial;
    }
    &.woman {
      background-image: url(./ruku-woman.png);
      background-position-y: 110px;
    }
  }
  .image-2 {
    background-image: url(./ruku-2.png);
    background-position-y: 200px;
    @media (max-width: $mobile) {
      background-size: initial;
    }
    &.woman {
      background-image: url(./ruku-woman.png);
      background-position-y: 110px;
    }
  }
}
.straight-up {
  .image-1 {
    background-image: url(./niet.png);
    @media (max-width: $mobile) {
      background-size: initial;
    }
    &.woman {
      background-image: url(./niet-woman.png);
    }
  }
}
.sadjda {
  .image-1 {
    background-image: url(./sadjda.png);
    background-position-y: 300px;
    &.woman {
      background-image: url(./sadjda-woman.png);
      background-position-y: 270px;
    }
  }
}
.sitting {
  .b1,
  .b2 {
    display: flex;
  }
  .image-1 {
    background-image: url(./sitting-1.png);
    background-position-y: 160px;
    &.woman {
      background-image: url(./sitting-woman-1.png);
    }
  }
  .image-2 {
    background-image: url(./sitting-2.png);
    background-position-y: 170px;
    &.woman {
      background-image: url(./sitting-woman-2.png);
      background-position-y: 250px;
    }
  }
}
.tashahhud {
  .b1,
  .b2,
  .b3 {
    display: flex;
  }
  .image-1 {
    background-image: url(./sitting-1.png);
    background-position-y: 160px;
    &.woman {
      background-image: url(./sitting-woman-1.png);
    }
  }
  .image-2 {
    background-image: url(./sitting-2.png);
    background-position-y: 170px;
    &.woman {
      background-image: url(./sitting-woman-2.png);
    }
  }
  .image-3 {
    background-image: url(./tashahhud.png);
    &.woman {
      background-image: url(./tashahhud-woman.png);
    }
  }
}
.salam-right {
  .image-1 {
    background-image: url(./salam-right.png);
    background-position-y: 160px;
    &.woman {
      background-image: url(./salam-right-woman.png);
    }
  }
}
.salam-left {
  .image-1 {
    background-image: url(./salam-left.png);
    background-position-y: 160px;
    &.woman {
      background-image: url(./salam-left-woman.png);
    }
  }
}
.dua {
  .image-1 {
    background-image: url(./dua.png);
    background-position-y: 160px;
    &.woman {
      background-image: url(./dua-woman.png);
    }
  }
}
.qunoot {
  .b1,
  .b2 {
    display: flex;
  }
  .image-1 {
    background-image: url(./takbir-1.png);
    @media (max-width: $mobile) {
      background-size: initial;
    }
    &.woman {
      background-image: url(./takbir-woman.png);
    }
  }
  .image-2 {
    background-image: url(./qiyam-1.png);
    @media (max-width: $mobile) {
      background-size: initial;
    }
    &.woman {
      background-image: url(./qiyam-woman-1.png);
    }
  }
}
.wudu {
  .player {
    display: none;
  }
  &.ghusl {
    .image-1 {
      background-image: url(./wudu/ghusl.png);
      background-position-y: bottom;
      @media (max-width: $mobile) {
        background-size: initial;
      }
    }
  }
  &.niet {
    .image-1 {
      background-image: url(./wudu/niet.png);
      background-position-y: 100px;
    }
  }
  &.hands {
    .image-1 {
      background-image: url(./wudu/hands.png);
      background-position-y: 130px;
    }
  }
  &.mouth {
    .image-1 {
      background-image: url(./wudu/mouth.png);
      background-position-y: 140px;
    }
  }
  &.nose {
    .image-1 {
      background-image: url(./wudu/nose.png);
      background-position-y: 140px;
    }
  }
  &.face {
    .image-1 {
      background-image: url(./wudu/face.png);
      background-position-y: 140px;
    }
  }
  &.full-hands {
    .image-1 {
      background-image: url(./wudu/full-hands.png);
      background-position-y: 110px;
    }
  }
  &.head {
    .image-1 {
      background-image: url(./wudu/head.png);
      background-position-y: 140px;
    }
  }
  &.ears-and-neck {
    .image-1 {
      background-image: url(./wudu/ears-and-neck.png);
      @media (max-width: $mobile) {
        background-size: initial;
      }
    }
  }
  &.leg-right {
    .image-1 {
      background-image: url(./wudu/leg-right.png);
      background-position-y: 110px;
    }
  }
  &.leg-left {
    .image-1 {
      background-image: url(./wudu/leg-left.png);
      background-position-y: 110px;
    }
  }
  &.legs {
    .b1,
    .b2 {
      display: flex;
    }
    .image-1 {
      background-image: url(./wudu/leg-right.png);
      background-position-y: 110px;
    }
    .image-2 {
      background-image: url(./wudu/leg-left.png);
      background-position-y: 110px;
    }
  }
  &.dua {
    .player {
      display: flex;
    }
    .image-1 {
      background-image: url(./wudu/dua.png);
      background-position-y: 100px;
    }
  }
}
.in-tour {
  width: 1022px;
  padding: 0;
  background: no-repeat;
  @media (max-width: $mobile) {
    width: 100%;
  }
  .media {
    background-color: #ecf7fd;
    @media (max-width: 1366px) {
      height: 500px;
    }
    @media (max-width: $mobile) {
      height: 610px;
    }
  }
  .tabs {
    margin-bottom: 40px;
    @media (max-width: $mobile) {
      margin-bottom: 20px;
    }
  }
  .tab.active {
    background-color: #f7fcff;
    border-bottom-color: #f7fcff;
    @media (max-width: $mobile) {
      background-color: #fff;
      border-bottom-color: #fff;
    }
  }
  .header {
    padding-left: 0;
    padding-right: 10px;
  }
  .tab-content {
    font-size: 15px;
    line-height: 22px;
    max-height: 500px;
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 5px;
      &-track {
        background-color: #eff4f7;
      }
      &-thumb {
        background-color: #cbd3db;
      }
    }
    @media (max-width: 1366px) {
      max-height: 270px;
    }
    @media (max-width: $mobile) {
      max-height: none;
    }
  }
  @media (max-width: 1366px) {
    &.ruku {
      .image-1,
      .image-2 {
        background-position-y: 170px;
      }
    }
    &.sadjda {
      .image-1 {
        background-position-y: 290px;
      }
    }
  }
  .next-button {
    display: none;
    @media (max-width: $mobile) {
      display: block;
      width: 100%;
      text-align: center;
      margin-top: 40px;
      margin-bottom: 50px;
    }
  }
}
</style>
