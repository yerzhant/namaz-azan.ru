import { createRouter, createWebHistory } from "vue-router";
import RouteGender from "@/utils/routeGender";
import AppSelect from "@/views/app-select/AppSelect.vue";
import AppMain from "@/views/app-main/AppMain.vue";
import store from "./store";

const router = new createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      alias: "/index.html",
      component: AppSelect,
      name: "select",
    },
    {
      path: "/:madhhab/:gender",
      component: AppMain,
      name: "main",
    },
    {
      path: "/:madhhab/:gender/tour-salah",
      component: () => import("./views/tour/Tour.vue"),
      name: "tour-salah",
    },
    {
      path: "/:madhhab/:gender/:section(shart|al-ahkaamul-aammah)/:type",
      component: () => import("./views/shart/Shart.vue"),
      name: "shart",
    },
    {
      path: "/:madhhab/:gender/tahharah/:type(wudu)",
      component: () => import("./views/wudu/Wudu.vue"),
      name: "wudu",
    },
    {
      path: "/:madhhab/:gender/tahharah/:type",
      component: () => import("./views/tahharah/Tahharah.vue"),
      name: "tahharah",
    },
    {
      path: "/:madhhab/:gender/:type(mareed)/:subType",
      component: () => import("./views/namaz-compare/NamazCompare.vue"),
      name: "namaz-compare",
    },
    {
      path: "/:madhhab/:gender/:type/:subType",
      component: () => import("./views/namaz/Namaz.vue"),
      name: "namaz",
    },
    {
      path: "/:pathMatch(.*)*",
      beforeEnter() {
        window.location = "https://azan.ru/not-found";
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
});

router.afterEach((to) => {
  if (to.params.gender) {
    store.commit("setGender", RouteGender.from(to.params.gender));
  }
  if (to.params.madhhab) {
    store.commit("setMadhhab", to.params.madhhab);
  }
});

export default router;
