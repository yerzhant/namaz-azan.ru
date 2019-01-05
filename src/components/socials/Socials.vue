<template lang="pug">
  section.socials(:class="{mobile}")
    a.fb(href="#")
    a.yt(href="#")
    a.vk(href="#")
    a.tg(href="#")
    a.logo(href="https://azan.ru" v-if="mobile") Azan.ru
</template>

<script>
export default {
  props: {
    mobile: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.socials {
  display: inline-block;
  > a {
    display: inline-block;
    width: 31px;
    height: 31px;
    border: 1px solid #67758b;
    background-repeat: no-repeat;
    background-position: center;
    margin-right: 10px;
    &:last-child {
      margin-right: 0;
    }
  }
  &.mobile {
    > a {
      vertical-align: top;
    }
    .fb {
      background-image: url(./fb-mobile.png);
      background-size: 8px;
    }
    .yt {
      background-image: url(./yt-mobile.png);
      background-size: 14px;
    }
    .vk {
      background-image: url(./vk-mobile.png);
      background-size: 19px;
    }
    .tg {
      background-image: url(./tg-mobile.png);
      background-size: 16px;
    }
    .logo {
      width: 91px;
      background-image: url(./logo-mobile.png);
      background-size: 18px;
      background-position-x: 8px;
      padding: 7px 12px;
      text-align: right;
      color: #5ca5e2;
      font-size: 12px;
      line-height: 1;
    }
  }
}
.fb {
  background-image: url(./fb.png);
}
.yt {
  background-image: url(./yt.png);
}
.vk {
  background-image: url(./vk.png);
}
.tg {
  background-image: url(./tg.png);
}
</style>
