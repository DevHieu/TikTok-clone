import classNames from "classnames/bind";
import style from "./Layout.module.scss";
import Header from "./header/index";
import Sidebar from "./sidebar/index";

const cx = classNames.bind(style);

function DefaultLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("main-container")}>
        <Sidebar />
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
}
export default DefaultLayout;
