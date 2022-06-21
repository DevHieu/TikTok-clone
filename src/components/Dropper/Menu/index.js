import { useState } from "react";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";

import Dropper from "~/components/Dropper/index";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import MenuHeader from "./MenuHeader";
import MenuItems from "./MenuItem";

const cx = classNames.bind(styles);

const defaultFunction = () => {};

function Menu({ children, items = [], onChange = defaultFunction() }) {
  const [history, setHistory] = useState([{ data: items }]);
  const currentMenu = history[history.length - 1];

  const renderItems = currentMenu.data.map((item, index) => {
    const isExits = !!item.children;
    return (
      <MenuItems
        key={index}
        data={item}
        onClick={() => {
          if (isExits) {
            setHistory((prev) => [...prev, item.children]);
          } else {
            onChange(item);
          }
        }}
      />
    );
  });

  return (
    <div>
      <Tippy
        interactive
        delay={[0, 700]}
        placement="bottom-end"
        onHide={() => {
          setHistory((prev) => prev.slice(0, 1));
        }}
        render={(attrs) => (
          <div className={cx("menu-wrapper")} tabIndex="-1" {...attrs}>
            <Dropper>
              {history.length > 1 && (
                <MenuHeader
                  title="Language"
                  onBack={() => {
                    setHistory((prev) => prev.slice(0, prev.length - 1));
                  }}
                />
              )}
              <div>{renderItems}</div>
            </Dropper>
          </div>
        )}
      >
        <div className={cx("more-icon")}>{children}</div>
      </Tippy>
    </div>
  );
}
export default Menu;
