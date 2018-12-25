<template lang="pug">
  header.header(
    :class="{'desc-open': descOpen}"
    :style="{'background-image': `url(${bgImage})`}"
  )
    section.info
    section.desc {{ desc }}
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
      descOpen: true,
    };
  },
  components: {
    AppButton,
  },
};
</script>

<style lang="scss" scoped>
.header {
  padding-bottom: 30px;
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
  font-family: $pt-sans;
  font-size: 16px;
  line-height: 24px;
  column-count: 2;
  column-gap: 65px;
  padding: 25px 75px 35px;
}
.button {
  background-color: #f7fcff;
  text-align: center;
}
</style>
