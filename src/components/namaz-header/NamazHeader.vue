<template lang="pug">
  header.header(:class="[type, $store.state.gender]")
    .info-wrapper
      section.info
        h1.title {{ title }}
          span.title-colon(v-if="subTitle") {{ ': ' }}
          span.sub-title {{ subTitle }}
        .short-desc {{ shortDesc }}
        .details(v-if="isNamaz")
          .type {{ typeText }}
          .clocks {{ time }}
            span.footnote *
          .rakaats(:class="subType")
            .rakaats-count {{ rakaats1 }}
            .rakaats-title {{ rakaats1Title }}
          .rakaats(v-if="rakaats2" :class="subType")
            .rakaats-count {{ rakaats2 }}
            .rakaats-title {{ rakaats2Title }}
          .rakaats(v-if="rakaats3" :class="subType")
            .rakaats-count {{ rakaats3 }}
            .rakaats-title {{ rakaats3Title }}
        .buttons
          AppButton(
            :link="button1Link"
            :width="buttonWidth"
            :height="36"
            :blue="button1Blue"
            v-if="button1"
          ) {{ button1 }}
          AppButton(
            :link="button2Link"
            :width="buttonWidth"
            :height="36"
            :blue="button2Blue"
            v-if="button2"
          ) {{ button2 }}
          AppButton(
            :link="button3Link"
            :width="buttonWidth"
            :height="36"
            :blue="button3Blue"
            v-if="button3"
          ) {{ button3 }}
        .city-info(v-if="isNamaz")
          span.footnote *
          span Указано время намаза для {{ $store.state.city }}
          span.bar |
          span.select(@click="$store.commit('toggleSelectCity')") Другой город

    section.desc(v-if="desc" :class="{closed: !descOpen}")
      .desc-text(v-html="desc")
    .button(v-if="desc")
      AppButton(
        :width="109"
        :height="32"
        small
        @click="descOpen = !descOpen; return false;"
      ) {{ descOpen ? 'СВЕРНУТЬ' : 'РАЗВЕРНУТЬ' }}
</template>

<script>
import AppButton from '@/components/AppButton.vue';

export default {
  props: {
    type: String,
    subType: String,
    typeText: String,
    title: String,
    subTitle: String,
    shortDesc: String,
    rakaats1: String,
    rakaats1Title: String,
    rakaats2: String,
    rakaats2Title: String,
    rakaats3: String,
    rakaats3Title: String,
    buttonWidth: {
      type: Number,
      default: 114,
    },
    button1: String,
    button1Link: String,
    button1Blue: Boolean,
    button2: String,
    button2Link: String,
    button2Blue: Boolean,
    button3: String,
    button3Link: String,
    button3Blue: Boolean,
    desc: String,
  },
  data() {
    return {
      descOpen: true,
    };
  },
  computed: {
    time() {
      const { today, tomorrow } = this.$store.state.namazTimes;
      switch (this.type) {
        case 'fadjr':
          return `${today[0]} - ${today[1]}`;

        case 'dhuhr':
        case 'tutorial':
          return `${today[2]} - ${today[3]}`;

        case 'jumuah':
          return `${today[2]}`;

        case 'asr':
          return `${today[3]} - ${today[4]}`;

        case 'maghrib':
          return `${today[4]} - ${today[5]}`;

        case 'isha':
        case 'witr':
          return `${today[5]} - ${tomorrow[0]}`;

        default:
          return '???';
      }
    },
    isNamaz() {
      switch (this.$store.state.namaz) {
        case 'istibra':
        case 'istinja':
        case 'ghusl':
        case 'wudu':
        case 'tayammum':
        case 'masah':
          return false;
        default:
          return true;
      }
    },
  },
  components: {
    AppButton,
  },
};
</script>

<style lang="scss" scoped>
.header {
  background-repeat: no-repeat;
  background-position: center -50px;
  background-color: #f7fcff;
  border-bottom: 1px solid #cbd3db;
}
.info {
  &-wrapper {
    width: 2 * 470px + 90px;
    margin-right: auto;
    margin-left: auto;
    @media (max-width: $mobile) {
      width: 100%;
      padding: 33px 20px 300px;
    }
  }
  width: 480px;
  height: 445px;
  padding: 30px 0;
  @media (max-width: $mobile) {
    width: 100%;
    height: initial;
    padding: 0;
  }
  .title {
    font-family: $pt-sans;
    font-weight: bold;
    font-size: 25px;
    letter-spacing: -0.8px;
    padding-bottom: 12px;
    margin-bottom: 16px;
    border-bottom: 1px solid #b8c2cb;
    @media (max-width: $mobile) {
      line-height: 1;
      font-size: 42px;
      padding-bottom: 18px;
      letter-spacing: 0.3px;
    }
  }
  .short-desc {
    font-weight: 300;
    line-height: 26px;
  }
  .details {
    display: flex;
    align-items: center;
    height: 80px;
    border-top: 1px solid #b8c2cb;
    border-bottom: 1px solid #b8c2cb;
    margin-top: 16px;
    margin-bottom: 22px;
    @media (max-width: $mobile) {
      height: auto;
      flex-wrap: wrap;
      border: none;
    }
    > * {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      flex-grow: 1;
      width: 100%;
      height: 50px;
      font-size: 13px;
      line-height: 1;
      color: #464646;
      position: relative;
      &::after {
        position: absolute;
        top: -10px;
        right: 0;
        width: 1px;
        height: 70px;
        content: '';
        background-color: #b8c2cb;
      }
      &:last-child::after {
        display: none;
        @media (max-width: $mobile) {
          display: initial;
        }
      }
      @media (max-width: $mobile) {
        width: 106px;
        margin-top: 15px;
        margin-bottom: 15px;
        flex-grow: 0;
        &::before {
          position: absolute;
          top: -15px;
          bottom: -15px;
          right: 0;
          left: 0;
          content: '';
          border-top: 1px solid #b8c2cb;
          border-bottom: 1px solid #b8c2cb;
        }
        &:nth-child(4)::before,
        &:nth-child(5)::before {
          border-top: none;
        }
      }
    }
  }
  .clocks {
    font-size: 11px;
    background: url(./clocks.png) no-repeat top;
    @media (max-width: $mobile) {
      background-image: url(./clocks-m.png);
      background-size: 31px;
    }
    .footnote {
      color: #e64343;
      margin-left: 3px;
    }
  }
  .rakaats {
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    &-count {
      font-size: 30px;
      color: #989898;
      margin-bottom: 8px;
    }
  }
  .buttons {
    > * {
      margin-right: 10px;
      &:last-child {
        margin-right: 0;
      }
      @media (max-width: $mobile) {
        font-size: 10px;
        width: 100px !important;
        height: 31px !important;
      }
    }
  }
  .city-info {
    margin-top: 16px;
    font-weight: 300;
    font-size: 13px;
    color: #000;
    @media (max-width: $mobile) {
      font-size: 10px;
    }
    .footnote {
      color: #ff0000;
      margin-right: 3px;
    }
    .bar {
      margin-right: 6px;
      margin-left: 6px;
    }
    .select {
      color: #01498c;
      cursor: pointer;
    }
  }
}
.desc {
  position: relative;
  &-text {
    font-family: $pt-sans;
    font-size: 16px;
    line-height: 24px;
    // column-count: 2;
    // column-gap: 65px;
    padding-top: 25px;
    width: 2 * 470px + 90px;
    margin-right: auto;
    margin-left: auto;
    @media (max-width: $mobile) {
      width: 100%;
      columns: initial;
      padding: 25px 20px 0;
    }
  }
  &.closed {
    height: 70px;
    overflow: hidden;
    &::before {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      content: '';
      background: linear-gradient(to bottom, transparent, #f7fcff);
      z-index: 1;
    }
  }
}
.button {
  background-color: #f7fcff;
  text-align: center;
  padding-top: 35px;
  padding-bottom: 30px;
}
.fadjr {
  background-image: url(./fadjr-bg.png);
  &.woman {
    background-image: url(./fadjr-bg-w.png);
  }
  @media (max-width: $mobile) {
    background-image: none;
  }
  .info {
    &-wrapper {
      @media (max-width: $mobile) {
        background: url(./dhuhr-bg-m.png) no-repeat bottom / cover;
      }
    }
    .rakaats.sunnah:nth-last-child(2) {
      color: #175682;
      .rakaats-count {
        color: #146eb4;
      }
    }
    .rakaats:last-child {
      color: #175682;
      .rakaats-count {
        color: #146eb4;
      }
      &.sunnah {
        color: #464646;
        .rakaats-count {
          color: #989898;
        }
      }
    }
    .type {
      background: url(./fadjr.png) no-repeat top;
    }
  }
}
.tutorial,
.dhuhr {
  background-image: url(./dhuhr-bg.png);
  &.woman {
    background-image: url(./dhuhr-bg-w.png);
  }
  @media (max-width: $mobile) {
    background-image: none;
  }
  .info {
    &-wrapper {
      @media (max-width: $mobile) {
        background: url(./dhuhr-bg-m.png) no-repeat bottom / cover;
      }
    }
    .rakaats.sunnah-before:nth-last-child(3) {
      color: #175682;
      .rakaats-count {
        color: #146eb4;
      }
    }
    .rakaats.sunnah-after:last-child {
      color: #175682;
      .rakaats-count {
        color: #146eb4;
      }
    }
    .rakaats:nth-last-child(2) {
      color: #175682;
      .rakaats-count {
        color: #146eb4;
      }
      &.sunnah-before,
      &.sunnah-after {
        color: #464646;
        .rakaats-count {
          color: #989898;
        }
      }
    }
    .type {
      background: url(./dhuhr.png) no-repeat top;
    }
  }
}
.asr {
  background-image: url(./asr-bg.png);
  &.woman {
    background-image: url(./asr-bg-w.png);
  }
  background-color: #fdfcfa;
  .button {
    background-color: #fdfcfa;
  }
  .desc.closed::before {
    background: linear-gradient(to bottom, transparent, #fdfcfa);
  }
  @media (max-width: $mobile) {
    background-image: none;
  }
  .info {
    &-wrapper {
      @media (max-width: $mobile) {
        background: url(./dhuhr-bg-m.png) no-repeat bottom / cover;
      }
    }
    .rakaats:last-child {
      color: #175682;
      .rakaats-count {
        color: #146eb4;
      }
    }
    .type {
      background: url(./asr.png) no-repeat center 10px;
    }
  }
}
.maghrib {
  background-image: url(./maghrib-bg.png);
  &.woman {
    background-image: url(./maghrib-bg-w.png);
  }
  background-color: #f7f9ff;
  .button {
    background-color: #f7f9ff;
  }
  .desc.closed::before {
    background: linear-gradient(to bottom, transparent, #f7f9ff);
  }
  @media (max-width: $mobile) {
    background-image: none;
  }
  .info {
    &-wrapper {
      @media (max-width: $mobile) {
        background: url(./dhuhr-bg-m.png) no-repeat bottom / cover;
      }
    }
    .rakaats.sunnah:last-child {
      color: #175682;
      .rakaats-count {
        color: #146eb4;
      }
    }
    .rakaats:nth-last-child(2) {
      color: #175682;
      .rakaats-count {
        color: #146eb4;
      }
      &.sunnah {
        color: #464646;
        .rakaats-count {
          color: #989898;
        }
      }
    }
    .type {
      background: url(./maghrib.png) no-repeat top;
    }
  }
}
.isha {
  background-image: url(./isha-bg.png);
  &.woman {
    background-image: url(./isha-bg-w.png);
  }
  background-color: #f7f8ff;
  .button {
    background-color: #f7f8ff;
  }
  .desc.closed::before {
    background: linear-gradient(to bottom, transparent, #f7f8ff);
  }
  @media (max-width: $mobile) {
    background-image: none;
  }
  .info {
    &-wrapper {
      @media (max-width: $mobile) {
        background: url(./dhuhr-bg-m.png) no-repeat bottom / cover;
      }
    }
    .rakaats.sunnah:nth-last-child(2) {
      color: #175682;
      .rakaats-count {
        color: #146eb4;
      }
    }
    .rakaats:nth-last-child(3) {
      color: #175682;
      .rakaats-count {
        color: #146eb4;
      }
      &.sunnah {
        color: #464646;
        .rakaats-count {
          color: #989898;
        }
      }
    }
    .type {
      background: url(./isha.png) no-repeat top;
    }
  }
}
.witr {
  background-image: url(./witr-bg.png);
  &.woman {
    background-image: url(./witr-bg-w.png);
  }
  background-color: #faf7ff;
  .button {
    background-color: #faf7ff;
  }
  .desc.closed::before {
    background: linear-gradient(to bottom, transparent, #faf7ff);
  }
  @media (max-width: $mobile) {
    background-image: none;
  }
  .info {
    &-wrapper {
      @media (max-width: $mobile) {
        background: url(./dhuhr-bg-m.png) no-repeat bottom / cover;
      }
    }
    .rakaats:last-child {
      color: #175682;
      .rakaats-count {
        color: #146eb4;
      }
    }
    .type {
      background: url(./witr.png) no-repeat center 5px;
    }
  }
}
.jumuah {
  background-image: url(./jumuah-bg.png);
  @media (max-width: $mobile) {
    background-image: none;
  }
  .info {
    &-wrapper {
      @media (max-width: $mobile) {
        background: url(./dhuhr-bg-m.png) no-repeat bottom / cover;
      }
    }
    .rakaats.sunnah-before:nth-last-child(3) {
      color: #175682;
      .rakaats-count {
        color: #146eb4;
      }
    }
    .rakaats.sunnah-after:last-child {
      color: #175682;
      .rakaats-count {
        color: #146eb4;
      }
    }
    .rakaats:nth-last-child(2) {
      color: #175682;
      .rakaats-count {
        color: #146eb4;
      }
      &.sunnah-before,
      &.sunnah-after {
        color: #464646;
        .rakaats-count {
          color: #989898;
        }
      }
    }
    .type {
      background: url(./dhuhr.png) no-repeat top;
    }
  }
}
.wudu {
  background-image: url(./wudu-bg.png);
  @media (max-width: 375px) {
    background-image: url(./wudu-bg-m.png);
    background-position-y: 257px;
    background-size: contain;
    height: 910px;
    @media (max-width: 360px) {
      background-position-y: 283px;
      height: 940px;
    }
  }
  .short-desc {
    padding-bottom: 16px;
    margin-bottom: 23px;
    border-bottom: 1px solid #b8c2cb;
  }
  .info {
    padding: 95px 0;
    @media (max-width: $mobile) {
      padding: 0;
      &-wrapper {
        padding-bottom: 270px;
        @media (max-width: 375px) {
          padding-bottom: 290px;
        }
      }
    }
  }
}
.tahharah {
  border-bottom: none;
  .short-desc {
    padding-bottom: 16px;
    border-bottom: 1px solid #b8c2cb;
  }
  .info {
    padding: 120px 0;
  }
}
.ghusl {
  background-image: url(../../views/tahharah/ghusl-bg.png);
  @media (max-width: $mobile) {
    background-image: url(../../views/tahharah/ghusl-bg-m.png);
    background-position-y: 283px;
    background-size: contain;
    height: 600px;
    .info {
      padding: 0;
      &-wrapper {
        padding-bottom: 180px;
      }
    }
  }
}
.istibra {
  background-image: url(../../views/tahharah/istibra-bg.png);
  @media (max-width: $mobile) {
    background-image: url(../../views/tahharah/istibra-bg-m.png);
    background-position-y: 241px;
    background-size: contain;
    height: 558px;
    .info {
      padding: 0;
      &-wrapper {
        padding-bottom: 210px;
      }
    }
  }
}
.istinja {
  background-image: url(../../views/tahharah/istinja-bg.png);
  @media (max-width: $mobile) {
    background-image: url(../../views/tahharah/istinja-bg-m.png);
    background-position-y: 241px;
    background-size: contain;
    height: 558px;
    .info {
      padding: 0;
      &-wrapper {
        padding-bottom: 210px;
      }
    }
  }
}
.tayammum {
  background-image: url(../../views/tahharah/tayammum-bg.png);
  @media (max-width: $mobile) {
    background-image: url(../../views/tahharah/tayammum-bg-m.png);
    background-position-y: 267px;
    background-size: contain;
    height: 584px;
    .info {
      padding: 0;
      &-wrapper {
        padding-bottom: 210px;
      }
    }
  }
}
.masah {
  background-image: url(../../views/tahharah/masah-bg.png);
  @media (max-width: 375px) {
    background-image: url(../../views/tahharah/masah-bg-m.png);
    background-position-y: 241px;
    background-size: contain;
    height: 558px;
    @media (max-width: 360px) {
      background-position-y: 267px;
      height: 584px;
    }
    .info {
      padding: 0;
      &-wrapper {
        padding-bottom: 210px;
      }
    }
  }
}
.sub-title {
  text-transform: uppercase;
}
@media (max-width: $mobile) {
  .sub-title {
    display: block;
    font-family: $roboto;
    font-weight: normal;
    font-size: 16px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: initial;
    margin-top: 10px;
    color: #1a467a;
  }
  .title-colon {
    display: none;
  }
}
</style>
