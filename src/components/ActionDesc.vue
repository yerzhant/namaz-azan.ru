<template lang="pug">
  section.action-desc(
    :class="{'black-blue': styleBlackBlue, 'with-margin': withMargin, 'with-margin-2': withMargin2}"
  )
    h2.title {{ title }}
    .short-desc {{ shortDesc }}
    .desc(:class="{'up-border': descUpBorder}") {{ desc }}
    .buttons
      slot
</template>

<script>
export default {
  props: {
    title: String,
    shortDesc: String,
    desc: String,
    descUpBorder: Boolean,
    styleBlackBlue: Boolean,
    withMargin: Boolean,
    withMargin2: Boolean,
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
  &.with-margin-2 {
    width: auto;
    margin-right: 60px;
    margin-left: 60px;
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
