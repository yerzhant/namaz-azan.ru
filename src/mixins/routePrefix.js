import routeGender from "@/utils/routeGender";

export default {
  computed: {
    routePrefix() {
      const { madhhab, gender } = this.$store.state;
      return `/${madhhab}/${routeGender.to(gender)}`;
    },
  },
};
