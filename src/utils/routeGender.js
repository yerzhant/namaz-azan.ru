export default {
  from(routeGender) {
    switch (routeGender) {
      case "rijaal":
        return "man";

      case "nisa":
        return "woman";

      default:
        return null;
    }
  },
  to(gender) {
    switch (gender) {
      case "man":
        return "rijaal";

      case "woman":
        return "nisa";

      default:
        return null;
    }
  },
};
