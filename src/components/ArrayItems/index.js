import { BiHelpCircle } from "react-icons/bi";
import { BsKeyboard } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";
import { TbLanguage } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import languages from "~/assets/languagesCode/index";

const MENU_ITEMS = [
  {
    title: "English",
    icon: <TbLanguage size={24} />,
    children: {
      title: "Language",
      data: languages,
    },
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

const USER_MENU_ITEMS = [
  {
    title: "View profile",
    icon: <CgProfile size={24} />,
    to: "/feedback",
  },
  {
    title: "Setting",
    icon: <AiOutlineSetting size={24} />,
    to: "/feedback",
  },
  {
    title: "English",
    icon: <TbLanguage size={24} />,
    children: {
      title: "Language",
      data: languages,
    },
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
  {
    title: "Log out",
    icon: <FiLogOut size={24} />,
    to: "/feedback",
  },
];

export { MENU_ITEMS, USER_MENU_ITEMS };
