import Header from "./header/index";
import Sidebar from "./sidebar/index";

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="main-container">
        <Sidebar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}
export default DefaultLayout;
