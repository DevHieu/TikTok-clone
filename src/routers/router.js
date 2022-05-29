import Home from "~/pages/Home/index";
import Following from "~/pages/Following/index";
import Upload from "~/pages/Upload/index";

//no need to log in
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/following", component: Following },
  { path: "/upload", component: Upload, layout: "UploadLayout" },
];

//need loin
const privateRoutes = [];

export { publicRoutes, privateRoutes };
