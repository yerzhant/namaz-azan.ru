export default {
  computed: {
    isFullSite() {
      const full = ['/', '/tour'];
      return full.some(p => this.$route.path === p);
    },
  },
};
