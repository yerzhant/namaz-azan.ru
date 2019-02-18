<template lang="pug">
  section.site
    section.menu(v-if="!isFullSite")
      AppMenu
    section.content(:class="{full: isFullSite}")
      AppHeader
      MobileHeader
      router-view
      AppFooter(v-if="!isFullSite")
    SelectCity(v-if="!isFullSite")
    MobileMenu
    transition(name="scroll-up-fade")
      .scroll-up(v-show="showScrollUp" @click="$scrollTo('body')")
</template>

<script>
import AppHeader from '@/components/app-header/AppHeader.vue';
import AppFooter from '@/components/app-footer/AppFooter.vue';
import AppMenu from '@/components/app-menu/AppMenu.vue';
import MobileMenu from '@/components/mobile-menu/MobileMenu.vue';
import MobileHeader from '@/components/mobile-header/MobileHeader.vue';
import SelectCity from '@/components/select-city/SelectCity.vue';
import isFullSite from '@/mixins/isFullSite';
import axios from 'axios';

export default {
  data() {
    return {
      showScrollUp: false,
    };
  },
  methods: {
    scrolling() {
      this.showScrollUp = window.scrollY > 200;
    },
  },
  created() {
    axios.get('/api/site/socials').then(r => {
      this.$store.commit('setSocials', r.data);
    });

    let cityId = localStorage.getItem('cityId');
    let city = localStorage.getItem('city');
    if (!cityId) {
      cityId = 50362;
      city = 'Алматы';
      localStorage.setItem('cityId', cityId);
      localStorage.setItem('city', city);
    }
    axios.get(`/api/asr/today-and-tomorrow/${cityId}`).then(r => {
      this.$store.commit('setCity', city);
      this.$store.commit('setNamazTimes', r.data);
    });

    document.addEventListener('scroll', this.scrolling);
  },
  destroyed() {
    document.removeEventListener('scroll', this.scrolling);
  },
  components: {
    AppHeader,
    AppFooter,
    AppMenu,
    MobileMenu,
    MobileHeader,
    SelectCity,
  },
  mixins: [isFullSite],
};
</script>

<style lang="scss" scoped>
.site {
  position: relative;
  display: flex;
  max-width: 1920px;
  margin-right: auto;
  margin-left: auto;
}
.menu {
  align-self: stretch;
  background-color: #142b4f;
  width: 197px;
  z-index: 10000;
  @media (max-width: 1346px) {
    display: none;
  }
}
.content {
  margin-top: 50px;
  width: calc(100% - 197px);
  &.full {
    width: 100%;
  }
  @media (max-width: 1346px) {
    width: 100%;
  }
  @media (max-width: $mobile) {
    margin-top: 0;
  }
}
.scroll-up {
  position: fixed;
  right: 25px;
  bottom: 25px;
  width: 51px;
  height: 51px;
  background: url(./images/scroll-up.png) no-repeat center;
  background-color: #828282;
  border-radius: 5px;
  cursor: pointer;
  z-index: 1000;
  opacity: 0.6;
  &:hover {
    background-color: #525252;
  }
  &.active {
    display: block;
  }
  &-fade {
    &-enter-active,
    &-leave-active {
      transition: opacity 0.5s;
    }
    &-enter,
    &-leave-to {
      opacity: 0;
    }
  }
}
</style>
