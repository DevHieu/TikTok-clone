import classNames from "classnames/bind";
import styles from "./PreviewAccount.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Button from "~/components/Button/Button";
import Image from "~/components/Image/Image";

const cx = classNames.bind(styles);

function PreviewAccount({ avatar, nickname, full_name, tick }) {
  return (
    <div className={cx("account-dropper")}>
      <div className={cx("dropper-header")}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://your_url_here.html"
        >
          <Image
            src={avatar}
            alt="avatar"
            width="44"
            height="44"
            className="circle"
          />
        </a>

        <Button primary>Follow</Button>
      </div>
      <div className={cx("dropper-body")}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://your_url_here.html"
          className={cx("name")}
        >
          <span className={cx("nickname-account")}>{nickname}</span>
          {tick && (
            <FontAwesomeIcon
              className={cx("check-icon")}
              icon={faCheckCircle}
            />
          )}
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://your_url_here.html"
          className={cx("full-name")}
        >
          {full_name}
        </a>
      </div>
      <div className={cx("dropper-footer")}>
        <div className={cx("followers")}>
          <span className={cx("followers-count")}>1.0M</span>
          <span className={cx("followers-text")}>Followers</span>
        </div>
        <div className={cx("likes")}>
          <span className={cx("likes-count")}>1.0M</span>
          <span className={cx("likes-text")}>Likes</span>
        </div>
      </div>
    </div>
  );
}
export default PreviewAccount;
