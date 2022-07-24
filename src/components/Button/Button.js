import PropTypes from "prop-types";
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

Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  primary: PropTypes.bool,
  outline: PropTypes.bool,
  large: PropTypes.bool,
  small: PropTypes.bool,
  rounded: PropTypes.bool,
};

export default Button;
