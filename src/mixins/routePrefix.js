import routeGender from "@/utils/routeGender";

export default {
  computed: {
    routePrefix() {
      const { madhhab, gender } = this.store;
      return `/${madhhab}/${routeGender.to(gender)}`;
    },
  },
};
