<template lang="pug">
  section.app-section(:class="{rakaat: rakaat}")
    h1.title {{ title }}
    img.moon(src="./moon.png")
    .content
      slot
</template>

<script>
export default {
  props: {
    title: String,
    rakaat: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.app-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 100px;
  background: url(./shadow.png) no-repeat top, url(./bg.png) no-repeat top;
  &.rakaat {
    padding-top: 75px;
    background-image: url(./shadow.png), url(./bg-small.png);
    .title {
      font-weight: normal;
      font-size: 30px;
      color: #2a2a2a;
    }
    .moon {
      margin-bottom: 40px;
    }
  }
}
.title {
  margin: 0;
  font-weight: 300;
  font-size: 36px;
  color: #002f56;
}
.moon {
  margin-top: 15px;
  margin-bottom: 80px;
}
.content {
  width: 1077px;
}
</style>
