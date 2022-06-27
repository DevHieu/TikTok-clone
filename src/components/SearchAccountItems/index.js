import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from "./AccountItems.module.scss";
import Image from "~/components/Image/index";

const cx = classNames.bind(styles);

function SearchAccountItems() {
  return (
    <div className={cx("wrapper")}>
      <Image
        src="https://haycafe.vn/wp-content/uploads/2022/03/avatar-facebook-doc.jpg"
        alt="avatar"
        width="40"
        height="40"
        circle
        className={cx("avatar")}
      />
      <div className={cx("info")}>
        <span className={cx("name")}>
          <h4>Nguyen Van A</h4>
          <FontAwesomeIcon className={cx("check-icon")} icon={faCheckCircle} />
        </span>
        <div className={cx("user-name")}>
          <p>Nguyen Van A</p>
        </div>
      </div>
    </div>
  );
}
export default SearchAccountItems;
