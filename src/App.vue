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
  created() {
    axios.get('/api/site/socials').then(r => {
      this.$store.commit('setSocials', r.data);
    });
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
  @media (max-width: 1365px) {
    display: none;
  }
}
.content {
  margin-top: 50px;
  width: calc(100% - 197px);
  &.full {
    width: 100%;
  }
  @media (max-width: 1365px) {
    width: 100%;
  }
  @media (max-width: $mobile) {
    margin-top: 0;
  }
}
</style>
