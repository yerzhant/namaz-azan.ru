<template lang="pug">
  section.action-desc(
    :class="{'black-blue': styleBlackBlue, 'black-blue-0': styleBlackBlue0, \
      'with-margin': withMargin, 'with-margin-2': withMargin2}"
  )
    h2.title {{ title }}
    .short-desc {{ shortDesc }}
    .desc(:class="{'top-border': descTopBorder, 'bottom-border': descBottomBorder}" v-html="desc")
    .buttons
      slot
</template>

<script>
export default {
  props: {
    title: String,
    shortDesc: String,
    desc: String,
    descTopBorder: Boolean,
    descBottomBorder: Boolean,
    styleBlackBlue: Boolean,
    styleBlackBlue0: Boolean,
    withMargin: Boolean,
    withMargin2: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.action-desc {
  width: 490px;
  @media (max-width: $mobile) {
    width: 100%;
  }
  &.with-margin {
    margin-left: 80px;
    width: 410px;
    @media (max-width: $mobile) {
      width: 100%;
      margin-left: 0;
    }
  }
  &.with-margin-2 {
    width: auto;
    margin-right: 40px;
    margin-left: 60px;
    @media (max-width: $mobile) {
      margin-right: 0;
      margin-left: 0;
    }
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
  @media (max-width: $mobile) {
    margin-bottom: 15px;
  }
}
.desc {
  font-weight: 300;
  line-height: 26px;
  padding-bottom: 25px;
  &.top-border {
    padding-top: 20px;
    border-top: 1px solid rgba(#8197aa, 0.4);
    @media (max-width: $mobile) {
      padding-top: 10px;
    }
  }
  &.bottom-border {
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(#8197aa, 0.4);
    @media (max-width: $mobile) {
      padding-bottom: 10px;
    }
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
.black-blue-0 {
  .title {
    color: #2a2a2a;
  }
  .short-desc {
    color: #0b64b6;
  }
  .desc {
    line-height: 22px;
  }
}
</style>
