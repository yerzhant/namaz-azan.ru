<!-- eslint-disable vue/multi-word-component-names -->
<template lang="pug">
section.socials(:class="{mobile}")
  a.fb(:href="store.socials.fb.value")
  a.yt(:href="store.socials.yt.value")
  a.vk(:href="store.socials.vk.value")
  a.tg(:href="store.socials.tg.value")
  a.logo(href="https://azan.ru" v-if="mobile") Azan.ru
</template>

<script>
import store from "../../store";

export default {
  data() {
    return {
      store: store(),
    };
  },
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
      width: 27px;
      height: 27px;
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
      padding: 6px 12px;
      text-align: right;
      color: #5ca5e2;
      font-size: 12px;
      line-height: 1;
    }
  }
}

.fb {
  background-image: url(./fb.png);

  @media (max-width: $mobile) {
    background-image: url(./fb-mobile.png);
    background-size: 8px;
  }
}

.yt {
  background-image: url(./yt.png);

  @media (max-width: $mobile) {
    background-image: url(./yt-mobile.png);
    background-size: 14px;
  }
}

.vk {
  background-image: url(./vk.png);

  @media (max-width: $mobile) {
    background-image: url(./vk-mobile.png);
    background-size: 19px;
  }
}

.tg {
  background-image: url(./tg.png);

  @media (max-width: $mobile) {
    background-image: url(./tg-mobile.png);
    background-size: 16px;
  }
}
</style>
