<!-- eslint-disable vue/multi-word-component-names -->
<template lang="pug">
section.rukn(:id="`r${rakaat}-${type}`" :class="[type, kind, {first: first, 'in-tour': tour}]")
  .header(v-if="!tour")
    .header-text
      h3.title {{ title }}
      .sub-title(v-if="subTitle") {{ subTitle }}
    .number {{ number }}
  .short-desc(v-if="!tour" v-html="shortDesc")
  .info
    .description
      .tabs(
        v-if="transcription || translation || arabic || description"
        :class="{full: transcription && translation && arabic && description}"
      )
        .tab(
          v-if="description"
          :class="{active: tabDescription}"
          @click="tabTranscription = tabTranslation = tabArabic = false; tabDescription = true"
        ) Описание
        .tab(
          v-if="transcription"
          :class="{active: tabTranscription}"
          @click="tabTranslation = tabArabic = tabDescription = false; tabTranscription = true"
        ) Транскрипция
        .tab(
          v-if="translation"
          :class="{active: tabTranslation}"
          @click="tabTranscription = tabArabic = tabDescription = false; tabTranslation = true"
        ) Перевод
        .tab(
          v-if="arabic"
          :class="{active: tabArabic}"
          @click="tabTranscription = tabTranslation = tabDescription = false; tabArabic = true"
        ) Арабский
      .tab-contents
        .header(v-if="tour")
          .header-text
            h3.title {{ title }}
            .sub-title(v-if="subTitle") {{ subTitle }}
          .number {{ number }}
        .tab-content(:class="{active: tabTranscription}" v-html="transcription")
        .tab-content(:class="{active: tabTranslation}" v-html="translation")
        .tab-content(:class="{active: tabArabic}" v-html="arabic").arabic
        .tab-content(:class="{active: tabDescription}" v-html="description" @click="openTab")
        AppPlayer.player(:type="audio" ref="player")
        .buttons
          AppButton(:height="36" blue @click="goNext" v-if="!last") ДАЛЕЕ
          //- AppButton.print(:height="36" @click="print") РАСПЕЧАТАТЬ
    .media
      .image-1(:class="[store.gender, store.madhhab, {active: image1}]")
      .image-2(:class="[store.gender, store.madhhab, {active: image2}]")
      .image-3(:class="[store.gender, store.madhhab, {active: image3}]")
      .tool-bar(:class="[store.gender, store.madhhab]")
        .button.image.active
        .filler
        .button.b1(:class="{active: image1}" @click="image2 = image3 = false; image1 = true") 1
        .button.b2(:class="{active: image2}" @click="image1 = image3 = false; image2 = true") 2
        .button.b3(:class="{active: image3}" @click="image1 = image2 = false; image3 = true") 3
    .next-button(v-if="tour && !last")
      AppButton(:height="36" blue @click="goNext") ДАЛЕЕ
</template>

<script>
import AppButton from "@/components/AppButton.vue";
import AppPlayer from "@/components/app-player/AppPlayer.vue";

export default {
  props: {
    store: Object,
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
    transcription: {
      type: String,
      default: "",
    },
    translation: {
      type: String,
      default: "",
    },
    arabic: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      image1: true,
      image2: false,
      image3: false,
      tabTranscription: false,
      tabTranslation: false,
      tabArabic: false,
      tabDescription: false,
    };
  },
  computed: {
    audio() {
      if (this.kind === "wudu") {
        return "wudu-dua";
      }

      if (this.store.madhhab === "shafii") {
        switch (this.type) {
          case "qiyam":
            return this.rakaat === "1"
              ? "dua-qiyamah-shafii"
              : "istiaathah-shafii";
          case "qiraat":
            switch (this.rakaat) {
              case "1":
                return "fatihah+kauthar-shafii";
              case "2":
                return "fatihah+ikhlas-shafii";
              default:
                return "fatiha-shafii";
            }
          case "tashahhud":
            if (this.rakaats === "2") return "attahiyat+salawat+dua-shafii";
            if (this.rakaat === "2") return "attahiyat-shafii";
            return "attahiyat+salawat+dua-shafii";
          case "salam-right":
          case "salam-left":
            return "salam-shafii";
          case "salam":
            return "salam-2-shafii";
          case "sadjda-2":
            return "sadjda-shafii";
          case "dua":
            return "dua";
          default:
            return `${this.type}-shafii`;
        }
      }

      switch (this.type) {
        case "qiyam":
          return this.rakaat === "1" ? "sana+istiatha" : "basmala";
        case "qiraat":
          switch (this.rakaat) {
            case "1":
              return "fatiha+kauthar";
            case "2":
              return "fatiha+ikhlas";
            case "3":
              return this.kind === "sunnah" || this.kind === "wadjib"
                ? "fatiha+falaq"
                : "fatiha";
            default:
              return this.kind === "sunnah" ? "fatiha+nas" : "fatiha";
          }
        case "tashahhud":
          if (this.rakaats === "2") return "attahiyat+salawat+dua";
          if (this.rakaat === "2") return "attahiyat";
          return "attahiyat+salawat+dua";
        case "salam-right":
        case "salam-left":
          return "salam";
        case "salam":
          return "salam-2";
        case "sadjda-2":
          return "sadjda";
        default:
          return this.type;
      }
    },
  },
  methods: {
    openTab(event) {
      if (event.target.className === "open-transcription") {
        this.tabDescription = false;
        this.tabTranscription = true;
      }
    },
    goNext() {
      if (this.tour) {
        this.$emit("next");
      } else if (this.next.startsWith("#")) {
        const nextElement = document.getElementById(this.next.substring(1));
        const top = nextElement.getBoundingClientRect().top;
        const bodyTop = document.body.getBoundingClientRect().top;
        window.scrollTo({ top: top - bodyTop, behavior: "smooth" });
      } else {
        this.$router.push(this.next);
      }
    },
    print() {
      const win = window.open();
      win.document.write(`<p>${this.transcription}</p>
        <p>${this.translation}</p><p>${this.arabic}</p><p>${this.description}</p>`);
      win.print();
      win.close();
    },
    reset() {
      Object.keys(this.$data).forEach((k) => {
        this.$data[k] = false;
      });
      this.image1 = true;
      if (this.description) {
        this.tabDescription = true;
      } else if (this.transcription) {
        this.tabTranscription = true;
      } else if (this.translation) {
        this.tabTranslation = true;
      } else if (this.arabic) {
        this.tabArabic = true;
      }
    },
    stopPlayer() {
      this.$refs.player.stop();
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

  :deep(.open-transcription) {
    display: inline-block;
    font-weight: bold;
    color: #2b87ce;
    border-radius: 3px;
    border: 1px solid #2b87ce;
    padding: 0 5px;
    margin: 2px 3px;
    cursor: pointer;
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
        background-image: url(./images-m.png);
        background-size: 19px;
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

    &.shafii {
      background-image: url("./niet-shafii.png");
    }

    @media (max-width: $mobile) {
      background-size: initial;
    }

    &.woman {
      background-image: url(./niet-woman.png);

      &.shafii {
        background-image: url("./niet-woman-shafii.png");
      }
    }
  }
}

.takbir,
.additional-takbirs {
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

    &.shafii {
      background-image: url("./takbir-1-shafii.png");
    }

    @media (max-width: $mobile) {
      background-size: initial;
    }

    &.woman {
      background-image: url(./takbir-woman.png);

      &.shafii {
        background-image: url("./takbir-woman-shafii.png");
      }
    }
  }

  .image-2 {
    background-image: url(./takbir-2.png);

    &.shafii {
      background-image: url("./takbir-2-shafii.png");
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

    &.shafii {
      background-image: url("./qiyam-1-shafii.png");
    }

    @media (max-width: $mobile) {
      background-size: initial;
    }

    &.woman {
      background-image: url(./qiyam-woman-1.png);

      &.shafii {
        background-image: url("./qiyam-woman-1-shaffi.png");
      }
    }
  }

  .image-2 {
    background-image: url(./qiyam-2.png);

    &.shafii {
      background-image: url("./qiyam-2-shafii.png");
    }

    &.woman {
      background-image: url(./qiyam-woman-2.png);

      &.shafii {
        background-image: url("./qiyam-woman-2-shaffi.png");
      }
    }
  }
}

.ruku {
  .b1,
  .b2 {
    display: flex;
  }

  .tool-bar {
    &.shafii,
    &.woman {
      .b1,
      .b2 {
        display: none;
      }
    }
  }

  .image-1 {
    background-image: url(./ruku-1.png);
    background-position-y: 215px;

    &.shafii {
      background-image: url("./ruku-shafii.png");
      background-position-y: 170px;
    }

    @media (max-width: $mobile) {
      background-size: initial;
    }

    &.woman {
      background-image: url(./ruku-woman.png);
      background-position-y: 110px;

      &.shafii {
        background-image: url("./ruku-woman-shafii.png");
      }
    }
  }

  .image-2 {
    background-image: url(./ruku-2.png);
    background-position-y: 200px;

    @media (max-width: $mobile) {
      background-size: initial;
    }
  }
}

.straight-up {
  .tool-bar.shafii {
    .b1,
    .b2 {
      display: flex;
    }
  }

  .image-1 {
    background-image: url(./niet.png);

    &.shafii {
      background-image: url("./takbir-1-shafii.png");
    }

    @media (max-width: $mobile) {
      background-size: initial;
    }

    &.woman {
      background-image: url(./niet-woman.png);

      &.shafii {
        background-image: url("./takbir-woman-shafii.png");
      }
    }
  }

  .image-2.shafii {
    background-image: url("./niet-shafii.png");

    &.woman {
      background-image: url("./niet-woman-shafii.png");
    }
  }
}

.fajr-qunoot {
  .image-1 {
    &.shafii {
      background-image: url("./fajr-qunoot-shafii.png");
    }

    @media (max-width: $mobile) {
      background-size: initial;
    }

    &.woman {
      &.shafii {
        background-image: url("./fajr-qunoot-woman-shafii.png");
      }
    }
  }
}

.sadjda,
.sadjda-2 {
  .image-1 {
    background-image: url(./sadjda.png);

    &.shafii {
      background-image: url("./sadjda-shafii.png");
    }

    background-position-y: 300px;

    &.woman {
      background-image: url(./sadjda-woman.png);
      background-position-y: 270px;

      &.shafii {
        background-image: url("./sadjda-woman-shafii.png");
      }
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

    &.shafii {
      background-image: url("./sitting-1-shafii.png");
    }

    &.woman {
      background-image: url(./sitting-woman-1.png);

      &.shafii {
        background-image: url("./sitting-woman-1-shafii.png");
      }
    }
  }

  .image-2 {
    background-image: url(./sitting-2.png);
    background-position-y: 170px;

    &.shafii {
      background-image: url("./sitting-2-shafii.png");
    }

    &.woman {
      background-image: url(./sitting-woman-2.png);
      background-position-y: 250px;

      &.shafii {
        background-image: url("./sitting-woman-2-shafii.png");
      }
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

    &.shafii {
      background-image: url("./sitting-1-shafii.png");
    }

    &.woman {
      background-image: url(./sitting-woman-1.png);

      &.shafii {
        background-image: url("./sitting-woman-1-shafii.png");
      }
    }
  }

  .image-2 {
    background-image: url(./sitting-2.png);
    background-position-y: 170px;

    &.shafii {
      background-image: url("./sitting-2-shafii.png");
    }

    &.woman {
      background-image: url(./sitting-woman-2.png);

      &.shafii {
        background-image: url("./sitting-woman-2-shafii.png");
      }
    }
  }

  .image-3 {
    background-image: url(./tashahhud.png);

    &.shafii {
      background-image: url("./tashahhood-shafii.png");

      &.woman {
        background-image: url(./tashahhud-woman-shafii.png);
      }
    }

    &.woman {
      background-image: url(./tashahhud-woman.png);
    }
  }
}

.salam {
  .b1,
  .b2 {
    display: flex;
  }

  .image-1 {
    background-image: url(./salam-right.png);
    background-position-y: 160px;

    &.shafii {
      background-image: url("./salam-right-shafii.png");
    }

    &.woman {
      background-image: url(./salam-right-woman.png);

      &.shafii {
        background-image: url("./salam-right-woman-shafii.png");
      }
    }
  }

  .image-2 {
    background-image: url(./salam-left.png);
    background-position-y: 160px;

    &.shafii {
      background-image: url("./salam-left-shafii.png");
      background-position-y: 154px;
    }

    &.woman {
      background-image: url(./salam-left-woman.png);

      &.shafii {
        background-image: url("./salam-left-woman-shafii.png");
      }
    }
  }
}

.salam-right {
  .image-1 {
    background-image: url(./salam-right.png);
    background-position-y: 160px;

    &.shafii {
      background-image: url("./salam-right-shafii.png");
    }

    &.woman {
      background-image: url(./salam-right-woman.png);

      &.shafii {
        background-image: url("./salam-right-woman-shafii.png");
      }
    }
  }
}

.salam-left {
  .image-1 {
    background-image: url(./salam-left.png);
    background-position-y: 160px;

    &.shafii {
      background-image: url("./salam-left-shafii.png");
    }

    &.woman {
      background-image: url(./salam-left-woman.png);

      &.shafii {
        background-image: url("./salam-left-woman-shafii.png");
      }
    }
  }
}

.dua {
  .image-1 {
    background-image: url(./dua.png);
    background-position-y: 160px;

    &.shafii {
      background-image: url("./dua-shafii.png");
    }

    &.woman {
      background-image: url(./dua-woman.png);

      &.shafii {
        background-image: url("./dua-woman-shafii.png");
      }
    }
  }
}

.taraweeh-tasbeeh {
  .image-1 {
    background-image: url(./sitting-1.png);
    background-position-y: 160px;

    &.woman {
      background-image: url(./sitting-woman-1.png);
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

      &.shafii {
        background-image: url("./wudu/niet-shafii.png");
      }
    }
  }

  &.hands {
    .image-1 {
      background-image: url(./wudu/hands.png);
      background-position-y: 130px;

      &.shafii {
        background-image: url(./wudu/hands-shafii.png);
      }
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

      &.shafii {
        background-image: url("./wudu/nose-shafii.png");
      }
    }
  }

  &.mouth-nose {
    .b1,
    .b2 {
      display: flex;
    }

    .image-1 {
      background-image: url(./wudu/mouth.png);
      background-position-y: 140px;

      &.shafii {
        background-image: url("./wudu/mouth-shafii.png");
      }
    }

    .image-2 {
      background-image: url(./wudu/nose.png);
      background-position-y: 140px;

      &.shafii {
        background-image: url("./wudu/nose-shafii.png");
      }
    }
  }

  &.face {
    .image-1 {
      background-image: url(./wudu/face.png);
      background-position-y: 140px;

      &.shafii {
        background-image: url("./wudu/face-shafii.png");
      }
    }
  }

  &.full-hands {
    .image-1 {
      background-image: url(./wudu/full-hands.png);
      background-position-y: 110px;

      &.shafii {
        background-image: url("./wudu/full-hands-shafii.png");
      }
    }
  }

  &.head {
    .image-1 {
      background-image: url(./wudu/head.png);
      background-position-y: 140px;

      &.shafii {
        background-image: url("./wudu/head-shafii.png");
        background-position-y: 100px;
      }
    }
  }

  &.ears-and-neck {
    .image-1 {
      background-image: url(./wudu/ears-and-neck.png);

      &.shafii {
        background-image: url("./wudu/ears-shafii.png");
      }

      @media (max-width: $mobile) {
        background-size: initial;
      }
    }
  }

  &.leg-right {
    .image-1 {
      background-image: url(./wudu/leg-right.png);
      background-position-y: 110px;

      &.shafii {
        background-image: url("./wudu/legs-shafii.png");
      }
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

    .tool-bar {
      &.shafii {
        .b1,
        .b2 {
          display: none;
        }
      }
    }

    .image-1 {
      background-image: url(./wudu/leg-right.png);
      background-position-y: 110px;

      &.shafii {
        background-image: url("./wudu/legs-shafii.png");
      }
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

      &.shafii {
        background-image: url("./wudu/dua-shafii.png");
        background-position-y: 30px;
      }
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
    max-height: 300px;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 14px;

      &-track {
        border-left: 8px solid transparent;
        background-color: #eff4f7;
        background-clip: padding-box;
      }

      &-thumb {
        border-left: 8px solid transparent;
        background-color: #cbd3db;
        background-clip: padding-box;
      }
    }

    &.arabic {
      line-height: 1.4;
    }

    @media (max-width: 1366px) {
      max-height: 150px;
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
