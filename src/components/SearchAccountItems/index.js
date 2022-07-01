import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from "./AccountItems.module.scss";
import Image from "~/components/Image/index";

const cx = classNames.bind(styles);

function SearchAccountItems({ data }) {
  return (
    <Link to={`/@${data.nickname}`}>
      <div className={cx("wrapper")}>
        <Image
          src={data.avatar}
          alt="avatar"
          width="40"
          height="40"
          className={cx("avatar")}
        />
        <div className={cx("info")}>
          <span className={cx("name")}>
            <h4>{data.nickname}</h4>
            {data.tick && (
              <FontAwesomeIcon
                className={cx("check-icon")}
                icon={faCheckCircle}
              />
            )}
          </span>
          <div className={cx("user-name")}>
            <p>{data.full_name}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
export default SearchAccountItems;
