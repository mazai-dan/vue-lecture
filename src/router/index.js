import Vue from "vue";
import VueRouter from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import NotFound from "../views/404";

Vue.use(VueRouter);

const routes = [
  {
    path: "/user",
    component: () =>
      import(/* webpackChunkName: "layout" */ "../layouts/user-layout"),
    children: [
      {
        path: "/user",
        redirect: "/user/login"
      },
      {
        path: "/user/login",
        name: "login",
        component: () =>
          import(/* webpackChunkName: "user" */ "../views/user/login")
      },
      {
        path: "/user/register",
        name: "register",
        component: () =>
          import(/* webpackChunkName: "user" */ "../views/user/register")
      }
    ]
  },
  {
    path: "/",
    component: () =>
      import(/* webpackChunkName: "layout" */ "../layouts/basic-layout"),
    children: [
      {
        path: "/",
        redirect: "/dashboard/analysis"
      },
      {
        path: "/dashboard",
        name: "dashboard",
        component: { render: h => h("router-view") },
        children: [
          {
            path: "/dashboard/analysis",
            name: "analysis",
            component: () =>
              import(
                /* webpackChunkName: "user" */ "../views/dashboard/analysis"
              )
          }
        ]
      },
      //form
      {
        path: "/form",
        name: "form",
        component: { render: h => h("router-view") },
        children: [
          {
            path: "form/basic-form",
            name: "basic-form",
            component: () =>
              import(
                /* webpackChunkName: "forms" */ "../views/forms/basic-form"
              )
          },
          {
            path: "form/step-form",
            name: "step-form",
            component: () =>
              import(
                /* webpackChunkName: "forms" */ "../views/forms/setp-form/index"
              ),
            children: [
              {
                path: "/form/setp-form",
                redirect: "/form/setp-form/info"
              },
              {
                path: "/form/setp-form/info",
                name: "info",
                component: () =>
                  import(
                    /* webpackChunkName: "forms" */ "../views/forms/setp-form/setp-form-info"
                  )
              },
              {
                path: "/form/setp-form/confirm",
                name: "info",
                component: () =>
                  import(
                    /* webpackChunkName: "forms" */ "../views/forms/setp-form/setp-form-confirm"
                  )
              },
              {
                path: "formsetp-form/result",
                name: "info",
                component: () =>
                  import(
                    /* webpackChunkName: "forms" */ "../views/forms/setp-form/setp-form-result"
                  )
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: "*",
    name: "404",
    component: NotFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach((to, from, next) => {
  NProgress.done();
});
export default router;
