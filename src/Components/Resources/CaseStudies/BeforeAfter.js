import React from "react";
import "./beforeAfter.css";

const BeforeAfter = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center px-5 lg:px-0 mt-10 md:mt-20 md:mb-20 gap-10 lg:w-[55%] md:h-[13.5rem]  mx-auto">
      <div className="w-full flex flex-col gap-4 h-full">
        <p className="before-section font-inter font-bold text-xl ps-2">
          Before QuillAudits
        </p>
        <p className="font-poppins font-400 text-sm">
          Exploits like reentrancy and front-running can let attackers withdraw
          extra funds and manipulate transaction timing for unfair gains
        </p>
        <p className="font-poppins font-400 text-sm">
          Vulnerabilities could allow users to mint CDP tokens or pension shares
          indefinitely, disrupting the system's economic balance.
        </p>
      </div>
      <div className="border-2 h-full"></div>
      <div className="w-full flex flex-col gap-4 h-full">
        <p className="after-section font-inter font-bold text-xl ps-2">
          After QuillAudits
        </p>
        <p className="font-poppins font-400 text-sm">
          Implementation of reentrancy protection mechanisms.
        </p>
        <p className="md:pt-8 font-poppins font-400 text-sm">
          Ensure precision in decimal handling with standard libraries,
          recalculate accurately, fix logic errors, and secure referral systems
          against exploitation.
        </p>
      </div>
    </div>
  );
};

export default BeforeAfter;
