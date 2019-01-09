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
  @media (max-width: $mobile) {
    padding-bottom: 40px;
  }
}
.header {
  padding-top: 100px;
  background: url(./shadow.png) no-repeat top, url(./bg.png) no-repeat top;
  text-align: center;
  @media (max-width: $mobile) {
    padding-top: 60px;
    background: url(./bg-m.png) no-repeat center -2px / 360px;
    border-top: 1px solid #8e9faa;
  }
}
.title {
  margin: 0;
  font-weight: 300;
  font-size: 36px;
  color: #002f56;
  @media (max-width: $mobile) {
    font-weight: normal;
    font-size: 27px;
    padding: 0 20px;
  }
  &.regular {
    font-weight: normal;
  }
}
.moon {
  margin-top: 20px;
  margin-bottom: 86px;
  @media (max-width: $mobile) {
    margin-top: 10px;
    margin-bottom: 40px;
  }
}
.content {
  width: 1077px;
  margin-right: auto;
  margin-left: auto;
  @media (max-width: $mobile) {
    width: 100%;
    padding: 0 20px;
  }
}
.rakaat {
  padding-bottom: 50px;
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
      @media (max-width: $mobile) {
        margin-bottom: 0;
      }
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
