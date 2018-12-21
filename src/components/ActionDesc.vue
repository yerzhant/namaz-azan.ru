<template lang="pug">
  section.action-desc(:class="{'black-blue': styleBlackBlue, 'with-margin': withMargin}")
    h2.title {{ title }}
    .short-desc {{ shortDesc }}
    .desc(:class="{'up-border': descUpBorder}") {{ desc }}
    .buttons
      AppButton(:title="primaryTitle" link="/" :red="primaryRed" :blue="!primaryRed")
      AppButton(:title="secondaryTitle" link="/" v-if="secondaryTitle")
</template>

<script>
import AppButton from './AppButton.vue';

export default {
  props: {
    title: String,
    shortDesc: String,
    desc: String,
    descUpBorder: Boolean,
    primaryTitle: String,
    primaryRed: Boolean,
    secondaryTitle: String,
    styleBlackBlue: Boolean,
    withMargin: Boolean,
  },
  components: {
    AppButton,
  },
};
</script>

<style lang="scss" scoped>
.action-desc {
  width: 490px;
  &.with-margin {
    margin-left: 80px;
    width: 410px;
  }
}
.title {
  font-family: $pt-sans;
  font-weight: bold;
  font-size: 24px;
  letter-spacing: -1px;
  color: #014d7e;
  margin-top: 0;
  margin-bottom: 4px;
}
.short-desc {
  color: #464646;
  margin-bottom: 20px;
}
.desc {
  font-weight: 300;
  line-height: 26px;
  padding-bottom: 25px;

  &.up-border {
    padding-top: 20px;
    border-top: 1px solid rgba(#8197aa, 0.4);
  }
}
.buttons a:first-child {
  margin-right: 10px;
}
.black-blue {
  .title {
    font-size: 18px;
    color: #3a3a3a;
  }
  .short-desc {
    color: #1d72bb;
    margin-bottom: 10px;
  }
  .desc {
    line-height: 22px;
    padding-bottom: 15px;
  }
}
</style>
