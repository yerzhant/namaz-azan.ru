<template lang="pug">
  section.app-section(:class="{rakaat: rakaat, 'not-first': notFirst, 'bg-1': bg1}")
    .header(:class="$store.state.namaz")
      h2.title(:class="{regular: regular}") {{ title }}
      img.moon(src="./moon.png")
    .content
      slot
</template>

<script>
export default {
  props: {
    title: String,
    regular: Boolean,
    bg1: Boolean,
    rakaat: Boolean,
    notFirst: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.app-section {
  padding-bottom: 100px;
  &.bg-1 {
    background-color: #f7fcff;
  }
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
  &.regular {
    font-weight: normal;
  }
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
    &.witr {
      background-image: url(./shadow.png), url(./bg-small-witr.png);
    }
    &.asr {
      background-image: url(./shadow.png), url(./bg-small-asr.png);
    }
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
      background: url(./bg-fadjr.jpg) no-repeat center;
    }
    .dhuhr {
      background: url(./bg-dhuhr.jpg) no-repeat center;
    }
    .asr {
      background: url(./bg-asr.jpg) no-repeat center;
    }
    .maghrib {
      background: url(./bg-maghrib.jpg) no-repeat center;
    }
    .isha {
      background: url(./bg-isha.jpg) no-repeat center;
    }
    .witr {
      background: url(./bg-witr.jpg) no-repeat center;
    }
  }
}
</style>
