<template lang="pug">
  section.site
    section.menu(v-if="!isFullSite")
      AppMenu
    section.content
      AppHeader
      router-view
      AppFooter(v-if="!isFullSite")
    SelectCity(v-if="!isFullSite")
</template>

<script>
import AppHeader from '@/components/app-header/AppHeader.vue';
import AppFooter from '@/components/app-footer/AppFooter.vue';
import AppMenu from '@/components/app-menu/AppMenu.vue';
import SelectCity from '@/components/select-city/SelectCity.vue';
import isFullSite from '@/mixins/isFullSite';

export default {
  components: {
    AppHeader,
    AppFooter,
    AppMenu,
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
}
.content {
  margin-top: 50px;
  width: calc(100% - 197px);
  @media (max-width: $mobile) {
    margin-top: 0;
  }
}
</style>
