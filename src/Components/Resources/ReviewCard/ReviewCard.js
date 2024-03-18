import React from "react";
import "./reviewCard.css";
import startInvertedComma from "../../../Assets/Vector.svg";
import stars from "../../../Assets/Group 1261153168.svg";
import endInvertedComma from "../../../Assets/Vector Blue.svg"
import CEOImage from "../../../Assets/Mask group.svg"

const ReviewCard = () => {
  return (
    <div className="card-container md:w-[55%] mx-auto lg:mx-0 px-5 md:px-0 rounded-md">
      <div className="card-upper-container relative rounded-t-md h-[8rem] flex justify-between md:justify-start gap-3 pt-4">
      <div className="ps-3">
          <img src={startInvertedComma} alt="Inverted Comma"/>
        </div>
        <div className="flex flex-col gap-2 font-jost text-white pt-10 pe-3 md:pe-0">
          <span className="font-600 text-xl">Sally Radley</span>
          <span className="font-400 text-sm">WebGFi - CEO</span>
        </div>

        <div className="absolute left-5  -bottom-10 md:left-[15rem]  xl:left-[19rem]  w-28 md:w-36">
            <img src={CEOImage} alt="CEO" className="h-full w-full"/>
        </div>
      </div>
      <div className="h-[10rem] py-4 px-1 md:px-12">
        <div className="flex justify-end md:block">
          <img src={stars} alt="Stars" className="md:w-36"/>
        </div>
        <p className="text-sm font-400 font-jost py-4">
          “It felt like the auditing team was available within a short
          timeframe, which was excellent. The auditing process looked thorough,
          and I really appreciate the fact that you took time to investigate GAS
          optimizations.”
        </p>
      </div>
      <div className="flex justify-end pe-5 pb-4"><img src={endInvertedComma} alt="Inverter Comma" /></div>

    </div>
  );
};

export default ReviewCard;
