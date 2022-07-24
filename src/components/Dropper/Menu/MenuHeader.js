import PropTypes from "prop-types";
import { AiOutlineLeft } from "react-icons/ai";
import classNames from "classnames/bind";

import styles from "./Menu.module.scss";
const cx = classNames.bind(styles);

function MenuHeader({ title, onBack }) {
  return (
    <div className={cx("menu-header")}>
      <button className={cx("back-btn")} onClick={onBack}>
        <AiOutlineLeft />
      </button>
      <h3 className={cx("header-title")}>{title}</h3>
    </div>
  );
}

MenuHeader.propTyeps = {
  title: PropTypes.string.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default MenuHeader;
