<template lang="pug">
  section.site
    section.menu
      AppMenu
    section.content
      AppHeader
      router-view
</template>

<script>
import AppHeader from '@/components/app-header/AppHeader.vue';
import AppMenu from '@/components/app-menu/AppMenu.vue';

export default {
  components: {
    AppHeader,
    AppMenu,
  },
};
</script>

<style lang="scss" scoped>
.site {
  display: flex;
}
</style>
