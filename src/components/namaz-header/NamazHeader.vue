<template lang="pug">
  header.header(:class="[type, {'desc-open': descOpen}]")
    section.info
      h1.title {{ title }}
      .short-desc {{ shortDesc }}
      .details
        .type {{ typeText }}
        .clocks {{ time }}
          span.footnote *
        .rakaats
          .rakaats-count {{ rakaats1 }}
          .rakaats-title {{ rakaats1Title }}
        .rakaats(v-if="rakaats2")
          .rakaats-count {{ rakaats2 }}
          .rakaats-title {{ rakaats2Title }}
        .rakaats(v-if="rakaats3")
          .rakaats-count {{ rakaats3 }}
          .rakaats-title {{ rakaats3Title }}
      .buttons
        AppButton(:link="button1Link" :width="114" :height="36" :blue="button1Blue") {{ button1 }}
        AppButton(:link="button2Link" :width="114" :height="36" :blue="button2Blue") {{ button2 }}
      .city-info
        span.footnote *
        span Указано время намаза для города: {{ $store.state.city }}
        span.bar |
        span.select(@click="$store.commit('toggleSelectCity')") Другой город

    section.desc(:class="{closed: !descOpen}")
      .desc-text {{ desc }}
    .button
      AppButton(
        :width="109"
        :height="32"
        small
        @click="descOpen = !descOpen"
      ) {{ descOpen ? 'СВЕРНУТЬ' : 'РАЗВЕРНУТЬ' }}
</template>

<script>
import AppButton from '@/components/AppButton.vue';

export default {
  props: {
    type: String,
    typeText: String,
    title: String,
    shortDesc: String,
    rakaats1: String,
    rakaats1Title: String,
    rakaats2: String,
    rakaats2Title: String,
    rakaats3: String,
    rakaats4Title: String,
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
    bgImage: String,
  },
  data() {
    return {
      descOpen: false,
    };
  },
  computed: {
    time() {
      switch (this.type) {
        case 'fadjr':
          return '06:59 - 07:42';

        default:
          return '???';
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
  &.desc-open {
    background-color: #f7fcff;
  }
}
.info {
  width: 480px + 2 * 75px;
  height: 445px;
  padding: 60px 75px;
  .title {
    font-family: $pt-sans;
    font-weight: bold;
    font-size: 25px;
    letter-spacing: -0.8px;
    padding-bottom: 12px;
    margin-bottom: 16px;
    border-bottom: 1px solid #b8c2cb;
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
      }
    }
  }
  .clocks {
    font-size: 11px;
    background: url(./clocks.png) no-repeat top;
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
    }
  }
  .city-info {
    margin-top: 16px;
    font-weight: 300;
    font-size: 13px;
    color: #000;
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
    column-count: 2;
    column-gap: 65px;
    padding: 25px 75px 0;
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
  .info {
    .rakaats:last-child {
      color: #175682;
      .rakaats-count {
        color: #146eb4;
      }
    }
    .type {
      background: url(./fadjr.png) no-repeat top;
    }
  }
}
</style>
