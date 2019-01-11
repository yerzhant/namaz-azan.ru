export default {
  computed: {
    isFullSite() {
      const full = ['/', '/first-namaz', '/index.html'];
      return full.some(p => this.$route.path === p);
    },
  },
};
