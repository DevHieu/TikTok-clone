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
      className={classNames(styles.wrapper, className)}
      {...props}
      onError={handleError}
    />
  );
}
export default Image;
