import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  onClick,
  children,
  leftIcon,
  rightIcon,
  primary = false,
  outline = false,
  large = false,
  small = false,
  rounded = false,
  ...rest
}) {
  let Component = "button";
  const classes = cx("wrapper", { primary, outline, large, small, rounded });

  const props = {
    onClick,
    ...rest,
  };

  if (to) {
    Component = Link;
    props.to = to;
  } else if (href) {
    Component = "a";
    props.href = href;
  }

  return (
    <Component className={classes} {...props} onClick={onClick}>
      {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
      <span className={cx("children")}>{children}</span>
      {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
    </Component>
  );
}
export default Button;
