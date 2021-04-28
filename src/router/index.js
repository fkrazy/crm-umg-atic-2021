import VueRouter from "vue-router";
import routes from "./routes";

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkExactActiveClass: "active",
  scrollBehavior: (to) => {
    if (to.hash) {
      return {selector: to.hash}
    } else {
      return { x: 0, y: 0 }
    }
  }
});

router.beforeEach((to, from, next) =>{
  if (to.name !== 'Login' && !sessionStorage.getItem("token")) next({ name: 'Login' })
  else if (to.name === "Login" && sessionStorage.getItem("token")) next("/")
    else next()
})

export default router;
