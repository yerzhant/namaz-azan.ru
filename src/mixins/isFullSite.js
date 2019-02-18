export default {
  computed: {
    isFullSite() {
      const full = ['/', '/solaatil-uulaa', '/index.html'];
      return full.some(p => this.$route.path === p);
    },
  },
};
