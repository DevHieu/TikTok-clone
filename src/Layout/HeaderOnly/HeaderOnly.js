import PropTypes from "prop-types";
import Header from "../components/header/Header";
import classNames from "classnames/bind";
import styles from "./HeaderOnly.module.scss";

const cx = classNames.bind(styles);

function UploadLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>{children}</div>
    </div>
  );
}

UploadLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UploadLayout;
