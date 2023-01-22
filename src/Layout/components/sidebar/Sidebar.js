import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import axios from "axios";

import {
  HeaderItem,
  DiscoverItem,
  AccountSidebar,
} from "~/components/SidebarItems";
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
  const [step, setStep] = useState(5);
  const [account, setAccount] = useState([]);
  const accountAPI = process.env.REACT_APP_SUGGEST_ACCOUNT;

  useEffect(() => {
    axios.get(accountAPI).then((res) => setAccount(res.data));
  }, [accountAPI]);

  const handleSeeMore = () => {
    if ((step = 5)) {
      setStep(account.length);
    } else {
      setStep(5);
    }
  };
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
      <div className={cx("sidebar-suggested")}>
        <p className={cx("suggest-title")}>Suggested accounts</p>
        {account.slice(0, step).map((value, index) => (
          <AccountSidebar key={index} data={value} />
        ))}
        <p className={cx("see-all")} onClick={handleSeeMore()}>
          See all
        </p>
      </div>
      <div className={cx("sidebar-discover")}>
        <p className={cx("discover-title")}>Discover</p>
        <DiscoverItem />
        <p className={cx("see-all")}>See all</p>
      </div>
    </div>
  );
}
export default Sidebar;
