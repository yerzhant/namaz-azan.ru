<template lang="pug">
  section
    AppHeader
    router-view
</template>

<script>
import AppHeader from '@/components/app-header/AppHeader.vue';

export default {
  components: {
    AppHeader,
  },
};
</script>
