import "./App.css";
import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRoutes } from "~/routers/router";
import { DefaultLayout } from "~/components/Layout/upload";
import { UploadLayout } from "~/components/Layout/upload";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            let Layout = DefaultLayout;
            const PageElement = route.component;

            if (route.layout === "UploadLayout") {
              Layout = UploadLayout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <PageElement />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
