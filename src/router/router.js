import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const router = new VueRouter({
  // mode: 'history',
  // scrollBehavior(to, from, savedPosition) {
  // 	console.log(to, from, savedPosition);
  // },
  routes: [
    // {
    // 	path: '*',
    // 	component: views.error
    // },
    {
      path: "/",
      name: "登录",
      component: () =>
        import(/* webpackChunkName: "views.login" */ "~/views/login.vue")
    },
    {
      path: "/center",
      name: "云点中心",
      component: () =>
        import(/* webpackChunkName: "views.center" */ "~/views/center.vue"),
      children: [
        {
          path: "index",
          name: "首页",
          component: () =>
            import(/* webpackChunkName: "views.center.index" */ "~/views/center/index.vue")
        },
        {
          path: "list",
          name: "列表",
          component: () =>
            import(/* webpackChunkName: "views.center.list" */ "~/views/center/list.vue")
        },
        {
          path: "form",
          name: "表单",
          component: () =>
            import(/* webpackChunkName: "views.center.form" */ "~/views/center/form.vue")
        }
      ]
    }
  ]
});

export default router;
