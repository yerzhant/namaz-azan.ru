<template lang="pug">
  header.header(
    :class="{'desc-open': descOpen}"
    :style="{'background-image': `url(${bgImage})`}"
  )
    section.info(:class="type")
      h1.title {{ title }}
      .short-desc {{ shortDesc }}
      .details
        .type {{ typeText }}
        .clocks {{ time }}
          span.foot-note  *

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
    button2: String,
    button2Link: String,
    button3: String,
    button3Link: String,
    desc: String,
    bgImage: String,
  },
  data() {
    return {
      descOpen: false,
    };
  },
  computed: {
    typeText() {
      switch (this.type) {
        case 'fadjr':
          return 'Утро';

        default:
          return '???';
      }
    },
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
  padding: 65px 75px;
  .title {
    font-family: $pt-sans;
    font-weight: bold;
    font-size: 25px;
    padding-bottom: 16px;
    margin-bottom: 20px;
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
    margin-top: 20px;
    margin-bottom: 20px;
    > * {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      flex-grow: 1;
      height: 50px;
      line-height: 1;
    }
  }
  .clocks {
    background: url(./clocks.png) no-repeat top;
  }
  &.fadjr {
    .type {
      background: url(./fadjr.png) no-repeat top;
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
</style>
