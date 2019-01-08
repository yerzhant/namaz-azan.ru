export default {
  computed: {
    isFullSite() {
      const full = ['/', '/first-namaz'];
      return full.some(p => this.$route.path === p);
    },
  },
};
