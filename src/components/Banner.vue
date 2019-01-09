<template lang="pug">
  section.banner(:class="[type, {shadow: shadow}]")
    .top
      .desc
        ActionDesc.action-desc(
          :title="title"
          :shortDesc="shortDesc"
          :desc="desc"
          :descUpBorder="descUpBorder"
          :styleBlackBlue="descStyleBlackBlue"
          :withMargin="descWithMargin"
          :withMargin2="descWithMargin2"
        )
          slot(name="buttons")
      .image(:class="$store.state.gender")
    .bottom
      slot
</template>

<script>
import ActionDesc from '@/components/ActionDesc.vue';

export default {
  props: {
    type: String,
    title: String,
    shortDesc: String,
    desc: String,
    descUpBorder: Boolean,
    descStyleBlackBlue: Boolean,
    descWithMargin: Boolean,
    descWithMargin2: Boolean,
    shadow: Boolean,
  },
  components: {
    ActionDesc,
  },
};
</script>

<style lang="scss" scoped>
.banner {
  display: flex;
  flex-direction: column;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  &.shadow {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  }
}
.top {
  display: flex;
  flex-grow: 1;
  width: 2 * 538px + 1px;
  margin-right: auto;
  margin-left: auto;
  @media (max-width: $mobile) {
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
  }
  > * {
    flex-basis: 50%;
  }
}
.bottom {
  width: 100%;
}
.desc {
  align-self: center;
  @media (max-width: $mobile) {
    padding: 33px 20px 0;
  }
}
.image {
  background-repeat: no-repeat;
  background-position: center;
}
.first-namaz {
  background-image: url(../views/app-main/first-namaz-bg.jpg);
  height: 610px;
  @media (max-width: $mobile) {
    height: 750px;
    background-image: url(../views/app-main/first-namaz-bg-m.png);
    background-position-y: -5px;
    background-size: cover;
  }
  .top {
    flex-direction: row-reverse;
    @media (max-width: $mobile) {
      flex-direction: column;
    }
  }
  .image {
    background-image: url(../views/app-main/first-namaz.png);
    background-position: bottom right;
    @media (max-width: $mobile) {
      height: 449px;
      background-position-x: center;
      background-size: contain;
    }
    &.woman {
      background-image: url(../views/app-main/first-namaz-woman.png);
      background-position-x: 50px;
      @media (max-width: $mobile) {
        background-position-x: center;
        background-size: 65%;
      }
    }
  }
}
.namaz-detailed {
  background-image: url(../views/app-main/namaz-detailed-bg.jpg);
  // height: 1031px;
  height: 920px;
  @media (max-width: $mobile) {
    background-size: cover;
    height: 1150px;
  }
  .image {
    background-image: url(../views/app-main/namaz-detailed.png);
    @media (max-width: $mobile) {
      height: 305px;
      background-size: 80%;
      background-position: 25px bottom;
    }
    &.woman {
      background-image: url(../views/app-main/namaz-detailed-woman.png);
      @media (max-width: $mobile) {
        height: 308px;
        background-position: center 32px;
      }
    }
  }
  &.short {
    height: 355px;
    background-position: top;
    .image {
      background-position: bottom;
    }
  }
}
.ghusl {
  background-image: url(../views/app-main/ghusl-bg.jpg);
  width: 1076px;
  height: 268px;
  border: 1px solid #d4dee8;
  @media (max-width: $mobile) {
    width: 100%;
    height: initial;
    background: none;
    .desc {
      padding-top: 15px;
      padding-bottom: 31px;
    }
  }
  .top {
    flex-direction: row-reverse;
    @media (max-width: $mobile) {
      flex-direction: column-reverse;
      background-color: #f7fcff;
    }
  }
  .image {
    background-image: url(../views/app-main/ghusl.png);
    background-position: bottom;
    @media (max-width: $mobile) {
      background: url(../views/app-main/ghusl-m.jpg) no-repeat top / contain;
      flex-basis: 180px;
    }
  }
}
.taharat {
  background-image: url(../views/app-main/taharat-bg.jpg);
  width: 1076px;
  height: 265px;
  border: 1px solid #d4dee8;
  border-top: none;
  @media (max-width: $mobile) {
    width: 100%;
    height: initial;
    background: none;
    .desc {
      padding-top: 15px;
      padding-bottom: 31px;
    }
    .top {
      flex-direction: column-reverse;
      background-color: #f7fcff;
    }
  }
  .image {
    background-image: url(../views/app-main/taharat.png);
    background-position: bottom;
    @media (max-width: $mobile) {
      background: url(../views/app-main/taharat-m.jpg) no-repeat top / contain;
      flex-basis: 180px;
    }
  }
}
.fard {
  background-color: #fff;
  width: 1076px;
  height: 265px;
  border: 1px solid #b1bcc2;
  @media (max-width: $mobile) {
    width: 100%;
    height: auto;
  }
  .top {
    flex-direction: row-reverse;
    @media (max-width: $mobile) {
      flex-direction: column-reverse;
    }
  }
  .desc {
    flex-basis: fill;
    flex-grow: 1;
    @media (max-width: $mobile) {
      padding-top: 20px;
      padding-bottom: 30px;
    }
  }
  .image {
    flex-basis: 480px;
    @media (max-width: $mobile) {
      flex-basis: 176px;
      background-size: cover;
    }
  }
  &.fadjr {
    .image {
      background-image: url(../views/namaz/fard-fadjr.jpg);
      background-position: -1px 0;
      @media (max-width: $mobile) {
        background-image: url(../views/namaz/fard-fadjr-m.jpg);
        background-position: initial;
      }
      &.woman {
        background-image: url(../views/namaz/fard-fadjr-woman.jpg);
      }
    }
  }
  &.dhuhr {
    .image {
      background-image: url(../views/namaz/fard-dhuhr.jpg);
      @media (max-width: $mobile) {
        background-image: url(../views/namaz/fard-dhuhr-m.jpg);
      }
      &.woman {
        background-image: url(../views/namaz/fard-dhuhr-woman.jpg);
      }
    }
  }
  &.asr {
    .image {
      background-image: url(../views/namaz/fard-asr.jpg);
      background-position: 0 0;
      @media (max-width: $mobile) {
        background-image: url(../views/namaz/fard-asr-m.jpg);
      }
      &.woman {
        background-image: url(../views/namaz/fard-asr-woman.jpg);
      }
    }
  }
  &.maghrib {
    .image {
      background-image: url(../views/namaz/fard-maghrib.jpg);
      background-position: 0 0;
      @media (max-width: $mobile) {
        background-image: url(../views/namaz/fard-maghrib-m.jpg);
      }
      &.woman {
        background-image: url(../views/namaz/fard-maghrib-woman.jpg);
      }
    }
  }
  &.isha {
    .image {
      background-image: url(../views/namaz/fard-isha.jpg);
      background-position: -1px -1px;
      @media (max-width: $mobile) {
        background-image: url(../views/namaz/fard-isha-m.jpg);
        background-position: initial;
      }
      &.woman {
        background-image: url(../views/namaz/fard-isha-woman.jpg);
      }
    }
  }
  &.wudu {
    .image {
      background-image: url(../views/wudu/wudu.jpg);
    }
  }
  &.ghusl {
    background: #fff;
    .image {
      background-image: url(../views/wudu/ghusl.jpg);
    }
  }
  &.blue {
    background-color: #f7fcff;
    &.ghusl {
      .image {
        background-image: url(../views/tahharah/ghusl.jpg);
      }
    }
  }
}
</style>
