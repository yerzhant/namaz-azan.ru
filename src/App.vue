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
}
.content {
  margin-top: 50px;
}
</style>
