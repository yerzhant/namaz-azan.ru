<template lang="pug">
  section.app-section(:class="{rakaat: rakaat, 'not-first': notFirst}")
    .header(:class="$store.state.namaz")
      h2.title {{ title }}
      img.moon(src="./moon.png")
    .content
      slot
</template>

<script>
export default {
  props: {
    title: String,
    rakaat: Boolean,
    notFirst: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.app-section {
  padding-bottom: 100px;
}
.header {
  padding-top: 100px;
  background: url(./shadow.png) no-repeat top, url(./bg.png) no-repeat top;
  text-align: center;
}
.title {
  margin: 0;
  font-weight: 300;
  font-size: 36px;
  color: #002f56;
}
.moon {
  margin-top: 20px;
  margin-bottom: 86px;
}
.content {
  width: 1077px;
  margin-right: auto;
  margin-left: auto;
}
.rakaat {
  .header {
    background-image: url(./shadow.png), url(./bg-small.png);
    padding-top: 75px;
  }
  .title {
    font-weight: normal;
    font-size: 30px;
    color: #2a2a2a;
  }
  .moon {
    margin-bottom: 40px;
  }
  &.not-first {
    .header {
      height: 206px;
      margin-bottom: 138px - 86px;
    }
    .fadjr {
      background: url(./bg-fadjr.png) no-repeat center;
    }
  }
}
</style>
