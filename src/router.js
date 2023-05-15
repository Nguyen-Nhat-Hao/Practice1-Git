import Vue from "vue";
import VueRouter from "vue-router";
import NewAbout from './components/NewAbout.vue'
Vue.use(VueRouter);
import HomePage from "./components/HomePage.vue";
import AboutPage from "./components/AboutPage.vue";
import BaseAbout from "./components/BaseAbout.vue";
var About2 = { template: '<h2> welcome to about 2</h2>' };

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/about",
    component: BaseAbout,
    children: [
      {
        path: "",
        component: AboutPage
      },
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: "new",
        component: NewAbout,
      },
      {
        // UserPosts will be rendered inside User's <router-view>
        // when /user/:id/posts is matched
        path: "about2",
        component: About2,
      },
    ],
  },
];

const router = new VueRouter({
  routes, // short for `routes: routes`
});
export default router;
