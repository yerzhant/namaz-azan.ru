<template lang="pug">
  router-link.app-button(
    :to="to"
    :class="{red: red, blue: blue, small: small}"
    :style="{width: `${width}px`, height: `${height}px`}"
    @click.native="$emit('click')"
  )
    slot
</template>

<script>
export default {
  props: {
    link: String,
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
  data() {
    return {
      to: '',
    };
  },
  watch: {
    link() {
      this.to = this.link || this.$route.path;
    },
  },
  created() {
    this.to = this.link || this.$route.path;
  },
};
</script>

<style lang="scss" scoped>
.app-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 12px;
  color: #4a4a4a;
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
