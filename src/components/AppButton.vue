<template lang="pug">
  router-link.button(
    :to="link"
    :class="{red: red, blue: blue, small: small}"
    :style="{width: `${width}px`, height: `${height}px`}"
    @click.native="$emit('click')"
  )
    slot
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: '#',
    },
    red: Boolean,
    blue: Boolean,
    small: Boolean,
    width: {
      type: Number,
      default: 155,
    },
    height: {
      type: Number,
      default: 41,
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color: #2d2d2d;
  border: 1px solid #afb2bb;
  outline: none;
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
  &.small {
    color: #717171;
    font-size: 11px;
  }
}
</style>
