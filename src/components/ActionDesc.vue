<template lang="pug">
  section.action-desc
    h2.title {{ title }}
    .short-desc {{ shortDesc }}
    .desc(:class="{'up-border': descUpBorder}") {{ desc }}
    .buttons
      router-link.primary(to="/" :class="{red: primaryRed}") {{ primaryTitle }}
      router-link.secondary(to="/") {{ secondaryTitle }}
</template>

<script>
export default {
  props: {
    title: String,
    shortDesc: String,
    desc: String,
    descUpBorder: Boolean,
    primaryTitle: String,
    primaryRed: Boolean,
    secondaryTitle: String,
  },
};
</script>

<style lang="scss" scoped>
.action-desc {
  width: 490px;
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
  padding-top: 20px;
  padding-bottom: 25px;

  &.up-border {
    border-top: 1px solid rgba(#8197aa, 0.4);
  }
}
.primary {
  display: inline-block;
  width: 155px;
  text-align: center;
  padding: 10px 0;
  margin-right: 10px;
  font-size: 12px;
  color: #fff;
  background-color: #2b9ace;
  border: 1px solid #2b9ace;
  &.red {
    background-color: #d55d81;
    border-color: #d55d81;
  }
}
.secondary {
  display: inline-block;
  width: 155px;
  text-align: center;
  padding: 10px 0;
  font-size: 12px;
  color: #2d2d2d;
  border: 1px solid #afb2bb;
}
</style>
