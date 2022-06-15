import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiSearch, BiLoaderAlt, BiHelpCircle } from "react-icons/bi";
import { BsXCircleFill, BsPlus, BsKeyboard } from "react-icons/bs";
import { AiOutlineMore } from "react-icons/ai";
import { TbLanguage } from "react-icons/tb";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import classNames from "classnames/bind";

import styles from "./Header.module.scss";
import images from "~/assets/images";
import Dropper from "~/components/Dropper/index";
import SearchAccountItems from "~/components/SearchAccountItems/index";
import SearchResultItems from "~/components/SearchResultItems/index";
import Button from "~/components/Button/index";
import Menu from "~/components/Dropper/Menu/index";

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    title: "English",
    icon: <TbLanguage size={24} />,
  },
  {
    title: "Feedback and help",
    icon: <BiHelpCircle size={24} />,
    to: "/feedback",
  },
  {
    title: "Keyboard shortcut",
    icon: <BsKeyboard size={24} />,
  },
];

function Header() {
  const [searchValue, setSearchValue] = useState("");
  const [visible, setVisible] = useState(true);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  useEffect(() => {
    if (searchValue.length > 0) {
      show();
    } else {
      hide();
    }
  }, [searchValue]);

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <Link to="/">
            <img src={images.logo} alt="TikTok" />
          </Link>
        </div>
        <div className={cx("search")}>
          <Tippy
            interactive
            render={(attrs) => (
              <div className={cx("search-result")} tabIndex="-1" {...attrs}>
                <Dropper>
                  <div>
                    <SearchResultItems />
                    <SearchResultItems />
                    <SearchResultItems />
                  </div>
                  <div className={cx("accounts-result")}>
                    <p className={cx("account-heading")}>Accounts</p>
                    <SearchAccountItems />
                    <SearchAccountItems />
                    <SearchAccountItems />
                    <SearchAccountItems />
                    <SearchAccountItems />
                    <SearchAccountItems />
                    <SearchAccountItems />
                    <SearchAccountItems />
                  </div>
                </Dropper>
              </div>
            )}
            visible={visible}
            onClickOutside={hide}
          >
            <input
              className={cx("search-input")}
              type="text"
              placeholder="Search account and videos"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </Tippy>
          <div className={cx("search-focusing")}>
            <button className={cx("clear-btn")}>
              <BsXCircleFill />
            </button>
            <div className={cx("search-loading")}>
              <BiLoaderAlt />
            </div>
          </div>
          <span className={cx("span-spliter")}></span>
          <button className={cx("search-btn")}>
            <BiSearch size={24} />
          </button>
        </div>
        <div className={cx("actions")}>
          <Button outline to="/upload" leftIcon={<BsPlus size={28} />}>
            Upload
          </Button>
          <Button primary>Log in</Button>
          <div className={cx("see-more")}>
            <Menu items={MENU_ITEMS} children={<AiOutlineMore size={24} />} />
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
