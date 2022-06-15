import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from "./ResultItems.module.scss";

const cx = classNames.bind(styles);

function SearchResultItems() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("result-icon")}>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className={cx("glass-icon")}
        />
      </div>
      <div>
        <h4 className={cx("result-content")}>hi</h4>
      </div>
    </div>
  );
}
export default SearchResultItems;
