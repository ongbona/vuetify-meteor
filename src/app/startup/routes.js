
// App
export default [
  {
    path: "/",
    name: "dashboard",
    component: () => import("../pages/Dashbord.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../pages/Login.vue"),
    meta: {
      layout: "login"
    }
  },
  {
    path: "*",
    name: "not-found",
    component: () => import("../pages/NotFound.vue")
  },

  {
    path: "/form",
    name: "form",
    component: () => import("../pages/Form.vue"),
    meta: {
      layout: "main"
    }
  },
  {
    path: "/vuetifyForm",
    name: "vuetifyForm",
    component: () => import("../pages/VuetifyForm.vue")
  },
  {
    path: "/dataTable",
    name: "dataTable",
    component: () => import("../pages/DataTable.vue")
  },
  {
    path: "/formWizard",
    name: "formWizard",
    component: () => import("../pages/FormWizard.vue")
  },
  {
    path: "/drawerForm",
    name: "drawerForm",
    component: () => import("../pages/DrawerForm.vue")
  }
];



