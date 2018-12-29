<template lang="pug">
  section.app-section(:class="{rakaat: rakaat, 'not-first': notFirst}")
    .header(:class="[$store.state.namaz]")
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
    notFirst: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.app-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
}
.header {
  padding-top: 100px;
  background: url(./shadow.png) no-repeat top, url(./bg.png) no-repeat top;
}
.title {
  margin: 0;
  font-weight: 300;
  font-size: 36px;
  color: #002f56;
  text-align: center;
}
.moon {
  margin-top: 15px;
  margin-bottom: 80px;
}
.content {
  width: 1077px;
}
.rakaat {
  .header {
    background-image: url(./shadow.png), url(./bg-small.png);
    padding-top: 75px;
    width: 100%;
    text-align: center;
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
    border-top: 1px solid #cbd3db;
    // border-bottom: 1px solid #b0c4c5;
  }
}
.fadjr {
  background: url(./bg-fadjr.png) no-repeat center;
}
</style>
