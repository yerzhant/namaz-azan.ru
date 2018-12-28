<template lang="pug">
  section.rukn(:class="type")
    .header
      .header-text
        h2.title {{ title }}
        .sub-title {{ subTitle }}
      .number {{ number }}
    .short-desc {{ shortDesc }}
    .info
      .description
        .tabs
          .tab-1 Транскрипция
          .tab-2 Перевод
          .tab-3 Арабский
          .tab-4 Описание
        .tab-contents
          .tab-content-1 {{ content1 }}
          .tab-content-2 {{ content2 }}
          .tab-content-3 {{ content3 }}
          .tab-content-4 {{ content4 }}
        // Player
        AppButton(:height="36" blue) ДАЛЕЕ
      .media
        .main-1
        .main-2
        .main-3
        .tool-bar
          .button.image.active
          .button.b1.active 1
          .button.b2 2
          .button.b3 3
</template>

<script>
import AppButton from '@/components/AppButton.vue';

export default {
  props: {
    type: String,
    first: Boolean,
    title: String,
    subTitle: String,
    number: String,
    shortDesc: String,
    content1: String,
    content2: String,
    content3: String,
    content4: String,
  },
  components: {
    AppButton,
  },
};
</script>

<style lang="scss" scoped>
.rukn {
  width: 100%;
  padding: 70px 35px;
  background: url(./bg-top.png) no-repeat top;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 7px 16px;
  margin-bottom: 17px;
  border-bottom: 1px solid #cbd3db;
  .title {
    font-weight: normal;
    font-size: 20px;
    color: #464747;
  }
  .sub-title {
    font-size: 13px;
    color: #3a73a3;
  }
  .number {
    font-weight: bold;
    font-size: 32px;
    color: #2b87ce;
  }
}
.short-desc {
  font-family: $pt-sans;
  font-size: 16px;
  line-height: 23px;
  margin-bottom: 52px;
}
.info {
  display: flex;
}
.tabs {
  display: flex;
  background-color: #eff4f7;
}
.media {
  display: flex;
  width: 480px;
  height: 569px;
  background: url(./bg-media.png) no-repeat top;
  background-color: #f7fcff;
  border-top: 1px solid #cbd3db;
}
.main-1,
.main-2,
.main-3 {
  display: none;
  flex-grow: 1;
  background-repeat: no-repeat;
  background-position: center;
}
.main-1 {
  display: block;
}
.tool-bar {
  background-color: #eff5f7;
  width: 43px;
  border-left: 1px solid #cbd3db;
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45px;
    font-size: 17px;
    color: #9bafbf;
    border-bottom: 1px solid #cbd3db;
    &.image {
      background: url(./image.png) no-repeat center;
      margin-bottom: 175px;
    }
    &.b1 {
      border-top: 1px solid #cbd3db;
    }
    &.active {
      background-color: #fff;
      color: #2b87ce;
    }
  }
}
.takbir {
  .main-1 {
    background-image: url(./takbir-1.png);
  }
}
</style>
