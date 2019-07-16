<template lang="pug">
  a.app-button(
    :class="{red, blue, small, 'blue-stylish': blueStylish}"
    :style="{width: `${width}px`, height: `${height}px`, opacity: `${opacity}`}"
    @click="go"
  )
    slot
</template>

<script>
export default {
  props: {
    link: String,
    url: String,
    red: Boolean,
    blue: Boolean,
    blueStylish: Boolean,
    small: Boolean,
    width: {
      type: Number,
      default: 155,
    },
    height: {
      type: Number,
      default: 41,
    },
    opacity: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    go() {
      if (this.url) {
        window.location.href = this.url;
      } else if (this.link) {
        this.$router.push(this.link);
      } else {
        this.$emit('click');
      }
    },
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
  cursor: pointer;
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
  &.blue-stylish {
    color: #fff;
    font-size: 13px;
    background: url(./app-header/tutoring.png) no-repeat;
    border: 1px solid #2b9ace;
  }
}
</style>
