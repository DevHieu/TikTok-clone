import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./Dropper.module.scss";

const cx = classNames.bind(styles);

function Dropper({ children }) {
  return <div className={cx("wrapper")}>{children}</div>;
}

Dropper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Dropper;
