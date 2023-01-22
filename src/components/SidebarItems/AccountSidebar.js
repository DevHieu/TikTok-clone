import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react/headless";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from "./SidebarItems.module.scss";
import Image from "~/components/Image/Image";
import PreviewAccount from "~/components/Dropper/PreviewAccount/PreviewAccount";

const cx = classNames.bind(styles);

function AccountSidebar({ data }) {
  return (
    <div>
      <Tippy
        interactive
        placement="bottom-end"
        delay={[1000, 0]}
        offset={[-20, 0]}
        render={(attrs) => (
          <div className={cx("account-dropper")} tabIndex="-1" {...attrs}>
            <PreviewAccount
              avatar={data.avatar}
              nickname={data.nickname}
              full_name={data.full_name}
              tick={data.tick}
            />
          </div>
        )}
      >
        <Link to={`/@${data.nickname}`}>
          <div className={cx("account-sidebar-wrapper")}>
            <Image
              src={data.avatar}
              alt="avatar"
              width="32"
              height="32"
              className="circle"
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
              <div className={cx("user-name")}>{data.full_name}</div>
            </div>
          </div>
        </Link>
      </Tippy>
    </div>
  );
}

AccountSidebar.propTypes = {
  data: PropTypes.object,
};

export default AccountSidebar;
