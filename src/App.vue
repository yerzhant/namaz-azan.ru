<template lang="pug">
  section.site
    section.menu
      AppMenu
    section.content
      AppHeader
      router-view
      AppFooter
</template>

<script>
import AppHeader from '@/components/app-header/AppHeader.vue';
import AppFooter from '@/components/app-footer/AppFooter.vue';
import AppMenu from '@/components/app-menu/AppMenu.vue';

export default {
  components: {
    AppHeader,
    AppFooter,
    AppMenu,
  },
};
</script>

<style lang="scss" scoped>
.site {
  display: flex;
  max-width: 1920px;
  margin-right: auto;
  margin-left: auto;
}
.menu {
  align-self: stretch;
  background-color: #142b4f;
}
.content {
  margin-top: 50px;
  width: 100%;

  @media (max-width: $mobile) {
    margin-top: 0;
  }
}
</style>
