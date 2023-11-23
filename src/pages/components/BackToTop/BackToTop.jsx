import { KeyboardArrowUp } from "@mui/icons-material";
import { Fab } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import styles from "./BackToTop.module.scss";
const VISIBLE_OFFSET = 300;

function BaseBackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollHandler = useCallback(() => {
    setIsVisible(window.pageYOffset > VISIBLE_OFFSET);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [scrollHandler]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <div className={styles.root}>
        <Fab
          color="primary"
          size="medium"
          aria-label="Back to top"
          onClick={scrollToTop}
        >
          <KeyboardArrowUp />
        </Fab>
      </div>
    )
  );
}

export default BaseBackToTop;
