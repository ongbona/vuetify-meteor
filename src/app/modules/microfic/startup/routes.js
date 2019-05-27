export default [
  {
    path: "/clientCenter",
    name: "clientCenter",
    component: () => import("../pages/ClientCenter.vue")
  },
  {
    path: "/setting",
    name: "setting",
    component: () => import("../pages/Setting.vue")
  },
  {
    path: "/location",
    name: "MicroLocation",
    component: () => import("../pages/Location.vue")
  },

  {
    path: "/holiday",
    name: "MicroHoliday",
    component: () => import("../pages/Holiday.vue")
  },
  {
    path: "/security",
    name: "MicroSecurityType",
    component: () => import("../pages/SecurityType.vue")
  },
  {
    path: "/purpose",
    name: "MicroPurpose",
    component: () => import("../pages/PurposeType.vue")
  },
];
