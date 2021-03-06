import Main from "./pages/MainPage";
import NotFound from "./pages/NotFoundPage";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main
  },
  {
    path: "/register",
    name: "register",
    component: () => import("./pages/RegisterPage")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./pages/LoginPage")
  },
  {
    path: "/search",
    name: "search",
    component: () => import("./pages/SearchPage")
  },
  {
    path: "/playerFullDetails",
    name: "PlayerFullDetails",
    component: () => import("./pages/PlayerFullDetailsPage")
  },
  {
    path: "/teamFullDetails",
    name: "TeamFullDetails",
    component: () => import("./pages/TeamFullDetailsPage")
  },
  {
    path: "*",
    name: "notFound",
    component: NotFound
  }
];

export default routes;
