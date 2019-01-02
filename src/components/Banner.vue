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
  > * {
    flex-basis: 50%;
  }
}
.bottom {
  width: 100%;
}
.desc {
  align-self: center;
}
.image {
  background-repeat: no-repeat;
  background-position: center;
}
.first-namaz {
  background-image: url(../views/app-main/first-namaz-bg.jpg);
  height: 610px;
  .top {
    flex-direction: row-reverse;
  }
  .image {
    background-image: url(../views/app-main/first-namaz.png);
    background-position: bottom right;
    &.woman {
      background-image: url(../views/app-main/first-namaz-woman.png);
      background-position-x: 50px;
    }
  }
}
.namaz-detailed {
  background-image: url(../views/app-main/namaz-detailed-bg.jpg);
  height: 1031px;
  .image {
    background-image: url(../views/app-main/namaz-detailed.png);
    &.woman {
      background-image: url(../views/app-main/namaz-detailed-woman.png);
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
.gusl {
  background-image: url(../views/app-main/gusl-bg.jpg);
  width: 1076px;
  height: 268px;
  border: 1px solid #d4dee8;
  .top {
    flex-direction: row-reverse;
  }
  .image {
    background-image: url(../views/app-main/gusl.png);
    background-position: bottom;
  }
}
.taharat {
  background-image: url(../views/app-main/taharat-bg.jpg);
  width: 1076px;
  height: 265px;
  border: 1px solid #d4dee8;
  border-top: none;
  .image {
    background-image: url(../views/app-main/taharat.png);
    background-position: bottom;
  }
}
.fard {
  background-color: #fff;
  width: 1076px;
  height: 265px;
  border: 1px solid #b1bcc2;
  .top {
    flex-direction: row-reverse;
  }
  .desc {
    flex-basis: fill;
    flex-grow: 1;
  }
  .image {
    flex-basis: 480px;
  }
  &.fadjr {
    .image {
      background-image: url(../views/namaz/fard-fadjr.jpg);
      background-position: -1px 0;
      &.woman {
        background-image: url(../views/namaz/fard-fadjr-woman.jpg);
      }
    }
  }
  &.dhuhr {
    .image {
      background-image: url(../views/namaz/fard-dhuhr.jpg);
      &.woman {
        background-image: url(../views/namaz/fard-dhuhr-woman.jpg);
      }
    }
  }
  &.asr {
    .image {
      background-image: url(../views/namaz/fard-asr.jpg);
      background-position: 0 0;
      &.woman {
        background-image: url(../views/namaz/fard-asr-woman.jpg);
      }
    }
  }
  &.maghrib {
    .image {
      background-image: url(../views/namaz/fard-maghrib.jpg);
      background-position: 0 0;
      &.woman {
        background-image: url(../views/namaz/fard-maghrib-woman.jpg);
      }
    }
  }
  &.isha {
    .image {
      background-image: url(../views/namaz/fard-isha.jpg);
      background-position: -1px -1px;
      &.woman {
        background-image: url(../views/namaz/fard-isha-woman.jpg);
      }
    }
  }
  &.wudu {
    .image {
      background-image: url(../views/namaz/tahharah/wudu.jpg);
    }
  }
  &.gusl {
    background: #fff;
    .image {
      background-image: url(../views/namaz/tahharah/gusl.jpg);
    }
  }
  &.blue {
    background-color: #f7fcff;
    &.gusl {
      .image {
        background-image: url(../views/tahharah/gusl.jpg);
      }
    }
  }
}
</style>
