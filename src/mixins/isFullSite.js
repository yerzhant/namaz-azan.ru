export default {
  computed: {
    isFullSite() {
      const full = ['/'];
      return full.some(p => this.$route.path === p);
    },
  },
};
