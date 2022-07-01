import { Link } from "react-router-dom";
import { BiHelpCircle } from "react-icons/bi";
import { BsKeyboard } from "react-icons/bs";
import { AiOutlineMore, AiOutlineSetting } from "react-icons/ai";
import { TbLanguage } from "react-icons/tb";
import { FiPlus, FiLogOut } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import classNames from "classnames/bind";

import styles from "./Header.module.scss";
import images from "~/assets/images";
import Button from "~/components/Button/index";
import Menu from "~/components/Dropper/Menu/index";
import languages from "~/assets/languagesCode/index";
import Image from "~/components/Image/index";
import Search from "~/components/Search/index";
import { InboxIcon, UploadIcon } from "~/components/Icons";

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
  const currentUser = true;

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <Link to="/">
            <img src={images.logo} alt="TikTok" />
          </Link>
        </div>
        <Search />

        {currentUser ? (
          <div className={cx("current-user")}>
            <Button
              outline
              to="/upload"
              leftIcon={<UploadIcon width="20px" height="20px" />}
            >
              Upload
            </Button>
            <Tippy content="Inbox" placement="bottom">
              <button className={cx("inbox-btn")}>
                <InboxIcon width="32px" height="32px" />
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
