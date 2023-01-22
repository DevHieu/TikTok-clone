import PropTypes from "prop-types";
import { useState } from "react";
import classNames from "classnames";
import styles from "./Image.module.scss";
import images from "~/assets/images";

function Image({ src, alt, className, ...props }) {
  const [image, setImage] = useState("");
  const handleError = () => {
    setImage(images.errorImg);
  };

  return (
    <img
      src={image || src}
      alt={alt}
      className={classNames(styles.images, className)}
      {...props}
      onError={handleError}
    />
  );
}

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};

export default Image;
