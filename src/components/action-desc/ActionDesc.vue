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
  props: [
    'title',
    'shortDesc',
    'desc',
    'descUpBorder',
    'primaryTitle',
    'primaryRed',
    'secondaryTitle',
  ],
};
</script>

<style lang="scss" scoped>
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
  border: 1px solid #afb2bb;
}
</style>
