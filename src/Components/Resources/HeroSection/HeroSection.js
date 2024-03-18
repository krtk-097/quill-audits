import React from "react";
import "./heroSection.css";
import CdPensionWhite from "../../../Assets/CD-Pension.svg";
import CdPensionBlack from "../../../Assets/CD-Pension-black.svg";
import { IoMdArrowForward } from "react-icons/io";

const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center md:items-center py-5 mt-5 md:mt-14 gap-3">
     <div className="mb-2 md:hidden">
      <span className="text-white border-b-2 border-[#2D83EE] pb-2 ms-5 font-500 font-jost text-sm ">Case Studies</span>
     </div> 

        <div className="md:px-4 flex justify-center items-center ">

          <div className="hero-banner relative px-7 py-2 rounded-md h-[15rem] md:h-[22rem] md:w-[22rem] flex flex-col justify-center md:justify-end items-start pb-5">
            <div className="h-24 mx-auto">
              <img
                src={CdPensionWhite}
                alt="Cd-pension-logo"
                className="h-full w-full"
              />
            </div>
            <p className="text-white mt-5 text-xs lg:w-[85%] font-poppins font-400 hidden md:block">
              Carpe Diem Pension, a blockchain-based retirement fund, offers
              permanent payouts through CDP deposits, with a 4.32% annual
              inflation claimable by depositors.
            </p>

            <div className="absolute bg-white p-2 h-12 -bottom-6 right-5 md:top-5 md:-right-14 rounded-md">
              <img
                src={CdPensionBlack}
                alt="Cd-pension-logo"
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
        <div className="md:w-[45%] mt-10 md:mt-16 px-8 md:px-0">
          <h2 className="text-white text-2xl md:text-3xl font-jost font-500 tracking-wider px-2 md:px-0">
            Securing Trust : Boosting Security and Strengthening Trust at Carpe
            Diem Pension
          </h2>
          <p className="font-poppins text-white mt-5 text-sm font-400 lg:w-[75%]">
            QuillAudits enhances Carpe Diem Pension by addressing 33
            vulnerabilities on the Pulse blockchain, boosting security and user
            trust in digital pensions.
          </p>
        </div>
      </div>
      <p className="text-[#3b4250] font-jost font-500 md:flex items-center gap-1 ms-10 lg:ms-28 mt-5 pb-5 hidden">
        QuilAudits <IoMdArrowForward /> Resources <IoMdArrowForward />{" "}
        <span className="text-white">Case Studies</span>
      </p>
    </>
  );
};

export default HeroSection;
