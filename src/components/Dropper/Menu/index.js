import PropTypes from "prop-types";
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

function Menu({
  children,
  items = [],
  hideOnClick = false,
  onChange = defaultFunction(),
}) {
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

  const handleHide = () => {
    setHistory((prev) => prev.slice(0, 1));
  };

  return (
    <div>
      <Tippy
        interactive
        delay={[0, 700]}
        offset={[12, 8]}
        placement="bottom-end"
        hideOnClick={hideOnClick}
        onHide={handleHide}
        render={(attrs) => (
          <div className={cx("menu-wrapper")} tabIndex="-1" {...attrs}>
            <Dropper>
              {history.length > 1 && (
                <MenuHeader
                  title={currentMenu.title}
                  onBack={() => {
                    setHistory((prev) => prev.slice(0, prev.length - 1));
                  }}
                />
              )}
              <div className={cx("menu-body")}>{renderItems}</div>
            </Dropper>
          </div>
        )}
      >
        <div className={cx("menu-icon")}>{children}</div>
      </Tippy>
    </div>
  );
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  hideOnClick: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Menu;
