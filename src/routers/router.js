import routesConfig from "~/config/routes";

//Pages
import Home from "~/pages/Home/Home";
import Following from "~/pages/Following/Following";
import Upload from "~/pages/Upload/Upload";
import Profile from "~/pages/Profile/Profile";
import Live from "~/pages/Live/Live";
import Tag from "~/pages/Tag/Tag";
import Music from "~/pages/Music/Music";

//Layouts
import { HeaderOnly } from "~/Layout";

//no need to log in
const publicRoutes = [
  { path: routesConfig.home, component: Home },
  { path: routesConfig.following, component: Following },
  { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
  { path: routesConfig.profile, component: Profile },
  { path: routesConfig.live, component: Live },
  { path: routesConfig.tag, component: Tag },
  { path: routesConfig.music, component: Music },
];

//need login
const privateRoutes = [
  ...publicRoutes,
  { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
  { path: routesConfig.following, component: Following },
  { path: routesConfig.profile, component: Profile },
];

export { publicRoutes, privateRoutes };
