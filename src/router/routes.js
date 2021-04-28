import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
const Dashboard = () => import(/* webpackChunkName: "dashboard" */"@/pages/Dashboard/page/Dashboard.vue");
const ClientList = () => import(/* webpackChunkName: "common" */ "@/pages/clients/list/index.vue");
const ClientEdit = () => import(/* webpackChunkName: "common" */ "@/pages/clients/edit/index.vue");
const ClientReport = () => import(/* webpackChunkName: "common" */ "@/pages/clients/report/index.vue");
const LoginPage = () => import(/* webpackChunkName: "common" */ "@/pages/login/index.vue");

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard
      },
      {
        path: "clients",
        redirect: "/clientes",
        component: {
          render (c) { return c('router-view') }
        },
        children: [
          {
            path: '',
            name: "clientes",
            component: ClientList
          },
          {
            path: 'create',
            name: 'crear',
            component: ClientEdit
          },
          {
            path: 'report',
            name: 'reporte',
            component: ClientReport
          }
        ]
      }
    ]
  },
  {
    path:"/login",
    component: LoginPage,
    name: "Login"
  },
  { path: "*", component: NotFound },
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
