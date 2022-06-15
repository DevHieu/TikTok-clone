import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";

import Dropper from "~/components/Dropper/index";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import MenuItems from "./MenuItem";

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
  const renderItems = items.map((item, index) => {
    return <MenuItems key={index} data={item} />;
  });

  return (
    <div>
      <Tippy
        interactive
        delay={[0, 700]}
        placement="bottom-end"
        render={(attrs) => (
          <div className={cx("menu-wrapper")} tabIndex="-1" {...attrs}>
            <Dropper>
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
