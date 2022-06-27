import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiSearch, BiLoaderAlt, BiHelpCircle } from "react-icons/bi";
import { BsXCircleFill, BsChatSquareText, BsKeyboard } from "react-icons/bs";
import { AiOutlineMore, AiOutlineSetting } from "react-icons/ai";
import { TbLanguage } from "react-icons/tb";
import { FiPlus, FiLogOut } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import HeadlessTippy from "@tippyjs/react/headless";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import classNames from "classnames/bind";

import styles from "./Header.module.scss";
import images from "~/assets/images";
import Dropper from "~/components/Dropper/index";
import SearchAccountItems from "~/components/SearchAccountItems/index";
import SearchResultItems from "~/components/SearchResultItems/index";
import Button from "~/components/Button/index";
import Menu from "~/components/Dropper/Menu/index";
import languages from "~/assets/languagesCode/index";
import Image from "~/components/Image/index";

const cx = classNames.bind(styles);

//Menu items default before logIn
const MenuItems = [
  {
    title: "English",
    icon: <TbLanguage size={22} />,
    children: {
      title: "Language",
      data: languages,
    },
  },
  {
    title: "Feedback and help",
    icon: <BiHelpCircle size={22} />,
    to: "/feedback",
  },
  {
    title: "Keyboard shortcut",
    icon: <BsKeyboard size={22} />,
  },
];

//Menu items after LogIn
const UserMenu = [
  {
    title: "View profile",
    icon: <CgProfile size={22} />,
    to: "/profile",
  },
  {
    title: "Setting",
    icon: <AiOutlineSetting size={22} />,
    to: "/setting",
  },
  ...MenuItems,
  {
    title: "Log out",
    icon: <FiLogOut size={22} />,
    separate: true,
  },
];

//handle menu item logic
const handleMenuChange = (menuItem) => {
  console.log(menuItem);
};

function Header() {
  const [searchValue, setSearchValue] = useState("");
  const [visible, setVisible] = useState(true); //for Tippy library
  const show = () => setVisible(true);
  const hide = () => setVisible(false);
  const currentUser = true;

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
          <HeadlessTippy
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
          </HeadlessTippy>
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

        {currentUser ? (
          <div className={cx("current-user")}>
            <Button outline to="/upload" leftIcon={<FiPlus size={21} />}>
              Upload
            </Button>
            <Tippy content="Inbox" placement="bottom">
              <button className={cx("inbox-btn")}>
                <BsChatSquareText size={22} />
              </button>
            </Tippy>

            <Menu
              onChange={handleMenuChange}
              items={UserMenu}
              children={
                <Image
                  src="https://haycafe.vn/wp-content/uploads/2022/03/avatar-facebook-doc.jpg"
                  alt="user-avatar"
                  width="32"
                  height="32"
                  className={cx("user-avatar")}
                />
              }
            />
          </div>
        ) : (
          <div className={cx("actions")}>
            <Button outline to="/upload" leftIcon={<FiPlus size={21} />}>
              Upload
            </Button>
            <Button primary>Log in</Button>
            <div className={cx("more-btn")}>
              <Menu
                onChange={handleMenuChange}
                items={MenuItems}
                children={<AiOutlineMore size={24} />}
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
export default Header;
