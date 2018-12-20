<template lang="pug">
  router-link.button(:to="link" :class="{red: red, blue: blue}") {{ title }}
</template>

<script>
export default {
  props: {
    title: String,
    link: String,
    red: Boolean,
    blue: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 155px;
  height: 41px;
  font-size: 12px;
  color: #2d2d2d;
  border: 1px solid #afb2bb;
  &.blue {
    color: #fff;
    background-color: #2b9ace;
    border: 1px solid #2b9ace;
  }
  &.red {
    color: #fff;
    background-color: #d55d81;
    border-color: #d55d81;
  }
}
</style>
