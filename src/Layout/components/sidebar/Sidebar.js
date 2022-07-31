import classNames from "classnames/bind";

import { HeaderItem } from "./SidebarItems";
import {
  HomeIcon,
  HomeActiveIcon,
  FollowingIcon,
  FollowingActiveIcon,
  LiveIcon,
  LiveActiveIcon,
} from "~/components/Icons/Icons";
import Button from "~/components/Button/Button";
import styles from "./Sidebar.module.scss";

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <div className={cx("container")}>
      <div className={cx("sidebar-header")}>
        <nav className={cx("header-items")}>
          <HeaderItem
            title="Home"
            icon={<HomeIcon width="32px" height="32px" />}
            activeIcon={<HomeActiveIcon width="32px" height="32px" />}
            to="/"
          />
        </nav>
        <nav className={cx("header-items")}>
          <HeaderItem
            title="Following"
            icon={<FollowingIcon width="32px" height="32px" />}
            activeIcon={<FollowingActiveIcon width="32px" height="32px" />}
            to="/following"
          />
        </nav>
        <nav className={cx("header-items")}>
          <HeaderItem
            title="Live"
            icon={<LiveIcon width="32px" height="32px" />}
            activeIcon={<LiveActiveIcon width="32px" height="32px" />}
            to="/live"
          />
        </nav>
      </div>
      <div className={cx("sidebar-login")}>
        <p className={cx("login-title")}>
          Log in to follow creators, like videos, and view comments.
        </p>
        <Button large>Log In</Button>
      </div>
    </div>
  );
}
export default Sidebar;
