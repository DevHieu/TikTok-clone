import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
// import faMagnifyingGlass from "@fortawesome/free-regular-svg-icons";
import classNames from "classnames/bind";
import style from "./Header.module.scss";
import images from "~/assets/images";

const cx = classNames.bind(style);

function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <a href="/">
            <img src={images.logo} alt="TikTok" />
          </a>
        </div>
        <div className={cx("search")}>
          <input
            className={cx("search-input")}
            type="text"
            placeholder="Search account and videos"
          />
          {/* <button className={cx("clear-btn")}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          <div className={cx("search-loading")}>
            <FontAwesomeIcon icon={faSpinner} />
          </div> */}
          <span className={cx("span-spliter")}></span>
          <button className={cx("search-btn")}>
            <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
          </button>
        </div>
        <div className={cx("actions")}></div>
      </div>
    </header>
  );
}
export default Header;
