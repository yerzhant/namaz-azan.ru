<template lang="pug">
router-link.small-banner(:to="link" :class="[type, { bg2 }]")
  .image(:class="[type, madhhab]")
  .ornament
  .info
    .title {{ title }}
    .sub-title {{ subTitle }}
    .text {{ text }}
</template>

<script>
import { mapState } from "pinia";

export default {
  props: {
    link: String,
    type: String,
    title: String,
    subTitle: String,
    text: String,
    bg2: Boolean,
  },
  computed: {
    ...mapState(["madhhab"]),
  },
};
</script>

<style lang="scss" scoped>
.small-banner {
  display: flex;
  align-items: center;
  width: 359px;
  height: 269px;
  background-color: #fcffff;
  border-right: 1px solid #d5dee8;
  border-bottom: 1px solid #d5dee8;

  &:first-child,
  &:nth-child(4) {
    border-left: 1px solid #d5dee8;
  }

  &.bg2 {
    background-color: #f7fcff;
  }

  @media (max-width: $mobile) {

    &.ghusl,
    &.wudu {
      display: none;
    }

    margin-bottom: 20px;
    border-top: 1px solid #d5dee8;
    border-left: 1px solid #d5dee8;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

.image {
  width: 122px;
  height: 188px;
  background-repeat: no-repeat;
  background-position: right;
  margin-right: 1px;

  &.istibra {
    background-image: url(./istibra.png);
  }

  &.istinja {
    background-image: url(./istinja.png);
  }

  &.tayammum {
    background-image: url(./tayammum.png);
  }

  &.ghusl {
    background-image: url(./ghusl.png);
  }

  &.wudu {
    background-image: url(./wudu.png);

    &.shafii {
      background-image: url("./wudu-shafii.png");
    }
  }

  &.masah {
    background-image: url(./masah.png);
  }
}

.ornament {
  width: 27px;
  height: 188px;
  margin-right: 33px;
  background: url(./ornament.png) no-repeat left;

  @media (max-width: $mobile) {
    margin-right: 20px;
  }
}

.info {
  width: 127px;
}

.title {
  font-weight: 500;
  font-size: 17px;
  color: #3a3a3a;
}

.sub-title {
  font-size: 13px;
  color: #3375b2;
  padding-top: 3px;
  padding-bottom: 12px;
}

.text {
  font-size: 12px;
  line-height: 18px;
  color: #2a2a2a;
  border-top: 1px solid #d3dae0;
  border-bottom: 1px solid #d3dae0;
  padding-top: 12px;
  padding-bottom: 12px;
}
</style>
