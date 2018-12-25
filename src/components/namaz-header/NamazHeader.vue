<template lang="pug">
  header.header(
    :class="{'desc-open': descOpen}"
    :style="{'background-image': `url(${bgImage})`}"
  )
    section.info
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
    desc: String,
    bgImage: String,
  },
  data() {
    return {
      descOpen: false,
    };
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
  height: 445px;
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
