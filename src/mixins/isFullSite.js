export default {
  computed: {
    isFullSite() {
      const full = ["/", "/index.html"];
      return (
        full.some((p) => this.$route.path === p) ||
        this.$route.path.includes("/tour-salah")
      );
    },
  },
};
