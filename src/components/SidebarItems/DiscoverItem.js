import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import classNames from "classnames/bind";
import styles from "./SidebarItems.module.scss";

import { HashTag, MusicTag } from "~/components/Icons/Icons.js";

const cx = classNames.bind(styles);

function DiscoverItem() {
  const discoverAPI = process.env.REACT_APP_DISCOVER;
  const [discover, setDiscover] = useState([]);

  useEffect(() => {
    axios.get(discoverAPI).then((res) => setDiscover(res.data));
  }, [discoverAPI]);

  return (
    <div className={cx("discover-item")}>
      {discover.map((value) => (
        <Link to={value.linkTo} className={cx("container")} key={value.id}>
          <span className={cx("icon-style")}>
            {value.style === "music" ? <MusicTag /> : <HashTag />}
          </span>
          <span className={cx("item-title")}>{value.title}</span>
        </Link>
      ))}
    </div>
  );
}
export default DiscoverItem;
