import React, { useEffect, useState } from "react";
import { FaArrowDownLong } from "react-icons/fa6";
import "../styles/ٍSBtn.css"
const ScrollBtn = () => {
  const [visible, setVisible] = useState(false);

  // إظهار الزر عند النزول 200px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // وظيفة الصعود لأعلى
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <div className="scrollToTop" onClick={scrollToTop}>
        <FaArrowDownLong   className="i"/>
      </div>
    )
  );
};

export default ScrollBtn;
