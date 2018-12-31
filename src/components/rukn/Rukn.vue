<template lang="pug">
  section.rukn(:id="`r${rakaat}-${type}`" :class="[type, {first: first}]")
    .header(id="xxx")
      .header-text
        h3.title {{ title }}
        .sub-title(v-if="subTitle") {{ subTitle }}
      .number {{ number }}
    .short-desc {{ shortDesc }}
    .info
      .description
        .tabs(
          v-if="content1 || content2 || content3 || content4"
          :class="{full: content1 && content2 && content3 && content4}"
        )
          .tab(
            v-if="content1"
            :class="{active: tab1}"
            @click="tab2 = tab3 = tab4 = false; tab1 = true"
          ) Транскрипция
          .tab(
            v-if="content2"
            :class="{active: tab2}"
            @click="tab1 = tab3 = tab4 = false; tab2 = true"
          ) Перевод
          .tab(
            v-if="content3"
            :class="{active: tab3}"
            @click="tab1 = tab2 = tab4 = false; tab3 = true"
          ) Арабский
          .tab(
            v-if="content4"
            :class="{active: tab4}"
            @click="tab1 = tab2 = tab3 = false; tab4 = true"
          ) Описание
        .tab-contents
          .tab-content(:class="{active: tab1}") {{ content1 }}
          .tab-content(:class="{active: tab2}") {{ content2 }}
          .tab-content(:class="{active: tab3}") {{ content3 }}
          .tab-content(:class="{active: tab4}") {{ content4 }}
          AppPlayer.player(:type="type")
          .buttons
            AppButton(:height="36" blue @click="goNext") ДАЛЕЕ
            AppButton.print(:height="36" @click="print") РАСПЕЧАТАТЬ
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
import AppPlayer from '@/components/app-player/AppPlayer.vue';

export default {
  props: {
    rakaat: String,
    type: String,
    next: String,
    first: Boolean,
    title: String,
    subTitle: String,
    number: String,
    shortDesc: String,
    content1: {
      type: String,
      default: '',
    },
    content2: {
      type: String,
      default: '',
    },
    content3: {
      type: String,
      default: '',
    },
    content4: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      image1: true,
      image2: false,
      image3: false,
      tab1: false,
      tab2: false,
      tab3: false,
      tab4: false,
    };
  },
  methods: {
    goNext() {
      if (this.next.substr(0, 1) === '#' && this.next.length > 1) {
        this.$scrollTo(this.next);
      }
    },
    print() {
      const win = window.open();
      win.document.write(`<p>${this.content1}</p>\
        <p>${this.content2}</p><p>${this.content3}</p><p>${this.content4}</p>`);
      win.print();
      win.close();
    },
  },
  created() {
    if (this.content1) {
      this.tab1 = true;
    } else if (this.content2) {
      this.tab2 = true;
    } else if (this.content3) {
      this.tab3 = true;
    } else if (this.content4) {
      this.tab4 = true;
    }
  },
  components: {
    AppButton,
    AppPlayer,
  },
};
</script>

<style lang="scss" scoped>
.rukn {
  width: 100%;
  padding: 70px 35px;
  background: url(./bg-top.png) no-repeat top;
  &.first {
    background: none;
    padding-top: 86px;
  }
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 7px 16px;
  margin-bottom: 17px;
  border-bottom: 1px solid #cbd3db;
  .title {
    font-weight: 500;
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
  flex-basis: 469px;
}
.tabs {
  display: flex;
  background-color: #eff4f7;
  border: 1px solid #cbd3db;
  height: 41px;
  margin-bottom: 50px;
  &.full {
    border-right: none;
  }
  > .tab {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: 25%;
    height: 40px;
    border-right: 1px solid #cbd3db;
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
  margin-bottom: 38px;
  &.active {
    display: block;
  }
}
.player {
  margin-top: 67px;
  margin-bottom: 41px;
}
.buttons {
  > * {
    margin-right: 10px;
  }
  .print {
    color: #4a5a67;
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
.niet {
  .player {
    display: none;
  }
  .image-1 {
    background-image: url(./niet.png);
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
.qiyam,
.qiraat {
  .b1,
  .b2 {
    display: flex;
  }
  .image-1 {
    background-image: url(./qiyam-1.png);
  }
  .image-2 {
    background-image: url(./qiyam-2.png);
  }
}
.ruku {
  .b1,
  .b2 {
    display: flex;
  }
  .image-1 {
    background-image: url(./ruku-1.png);
    background-position-y: 215px;
  }
  .image-2 {
    background-image: url(./ruku-2.png);
    background-position-y: 200px;
  }
}
.straight-up {
  .image-1 {
    background-image: url(./straight-up.png);
  }
}
.sadjda {
  .image-1 {
    background-image: url(./sadjda.png);
    background-position-y: 300px;
  }
}
.sitting {
  .b1,
  .b2 {
    display: flex;
  }
  .image-1 {
    background-image: url(./sitting-1.png);
    background-position-y: 160px;
  }
  .image-2 {
    background-image: url(./sitting-2.png);
    background-position-y: 170px;
  }
}
.tashahhud {
  .b1,
  .b2,
  .b3 {
    display: flex;
  }
  .image-1 {
    background-image: url(./tashahhud-1.png);
    background-position-y: 160px;
  }
  .image-2 {
    background-image: url(./tashahhud-2.png);
    background-position-y: 170px;
  }
  .image-3 {
    background-image: url(./tashahhud-3.png);
  }
}
.salam-right {
  .image-1 {
    background-image: url(./salam-right.png);
    background-position-y: 160px;
  }
}
.salam-left {
  .image-1 {
    background-image: url(./salam-left.png);
    background-position-y: 160px;
  }
}
.dua {
  .image-1 {
    background-image: url(./dua.png);
    background-position-y: 160px;
  }
}
</style>
