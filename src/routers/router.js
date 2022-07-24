import routesConfig from "~/config/routes";

//Pages
import Home from "~/pages/Home/Home";
import Following from "~/pages/Following/Following";
import Upload from "~/pages/Upload/Upload";
import Profile from "~/pages/Profile/Profile";

//Layouts
import { HeaderOnly } from "~/Layout";

//no need to log in
const publicRoutes = [
  { path: routesConfig.home, component: Home },
  { path: routesConfig.following, component: Following },
  { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
  { path: routesConfig.profile, component: Profile },
];

//need login
const privateRoutes = [
  ...publicRoutes,
  { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
];

export { publicRoutes, privateRoutes };
