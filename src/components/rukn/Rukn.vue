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
          .tab(
            :class="{active: tab1}"
            @click="tab2 = tab3 = tab4 = false; tab1 = true"
          ) Транскрипция
          .tab(
            :class="{active: tab2}"
            @click="tab1 = tab3 = tab4 = false; tab2 = true"
          ) Перевод
          .tab(
            :class="{active: tab3}"
            @click="tab1 = tab2 = tab4 = false; tab3 = true"
          ) Арабский
          .tab(
            :class="{active: tab4}"
            @click="tab1 = tab2 = tab3 = false; tab4 = true"
          ) Описание
        .tab-contents
          .tab-content(:class="{active: tab1}") {{ content1 }}
          .tab-content(:class="{active: tab2}") {{ content2 }}
          .tab-content(:class="{active: tab3}") {{ content3 }}
          .tab-content(:class="{active: tab4}") {{ content4 }}
          // Player
          AppButton(:height="36" blue) ДАЛЕЕ
      .media
        .image-1(:class="{active: image1}")
        .image-2(:class="{active: image2}")
        .image-3(:class="{active: image3}")
        .tool-bar
          .button.image.active
          .button.b1(:class="{active: image1}" @click="image2 = image3 = false; image1 = true") 1
          .button.b2(:class="{active: image2}" @click="image1 = image3 = false; image2 = true") 2
          .button.b3(:class="{active: image3}" @click="image1 = image2 = false; image3 = true") 3
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
  data() {
    return {
      image1: true,
      image2: false,
      image3: false,
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false,
    };
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
.description {
  flex-grow: 1;
}
.tabs {
  display: flex;
  background-color: #eff4f7;
  border-left: 1px solid #cbd3db;
  margin-bottom: 50px;
  > .tab {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: 120px;
    height: 41px;
    border: 1px solid #cbd3db;
    border-left: none;
    cursor: pointer;
    font-family: $pt-sans;
    font-size: 13px;
    color: #465d73;
    &.active {
      background-color: #fff;
      border-bottom: 1px solid #fff;
    }
  }
}
.tab-contents {
  padding: 0 10px;
}
.tab-content {
  display: none;
  font-family: $pt-sans;
  font-size: 16px;
  line-height: 24px;
  &.active {
    display: block;
  }
}
.media {
  display: flex;
  width: 480px;
  height: 569px;
  margin-left: 58px;
  background: url(./bg-media.png) no-repeat top;
  background-color: #f7fcff;
  border-top: 1px solid #cbd3db;
}
.image-1,
.image-2,
.image-3 {
  display: none;
  flex-grow: 1;
  background-repeat: no-repeat;
  background-position: center;
  &.active {
    display: block;
  }
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
    cursor: pointer;
    &.image {
      background: url(./images.png) no-repeat center;
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
  .b1,
  .b2,
  .b3 {
    display: none;
  }
}
.takbir {
  .b1,
  .b2 {
    display: flex;
  }
  .image-1 {
    background-image: url(./takbir-1.png);
  }
  .image-2 {
    background-image: url(./takbir-2.png);
  }
}
</style>
