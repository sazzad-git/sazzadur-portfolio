"use client";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

import { useSwiper } from "swiper/react";

const WorkSliderBtns = ({ containerStyles, btnStyles, iconsStyles }) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        {/* <PiCaretLeftBold /> */}
        <FaChevronLeft className={iconsStyles} />
      </button>
      <button className={btnStyles} onClick={() => swiper.slideNext()}>
        <FaChevronRight />
        {/* <PiCaretRightBold className={iconsStyles} /> */}
      </button>
    </div>
  );
};

export default WorkSliderBtns;
