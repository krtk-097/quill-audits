import React from "react";
import "./newsLetter.css";
import MailImage from "../../../Assets/OBJECTS.svg";

const NewsLetter = () => {
  return (
    <div className="newsLetter-container flex flex-col md:flex-row items-center gap-10 mt-10 md:px-10 xl:px-48 py-10">
      <div className="font-inter space-y-5 inline-block flex-1">
        <p className="font-700 text-[#407AFF] text-xl  hidden md:block">
          NEWSLETTER
        </p>
        <h2 className="text-sm font-400 md:font-600 font-jost  md:text-[#14316C] md:text-4xl xl:w-[80%] leading-normal">
          Security First <span className="md:hidden border-b-2 border-[#2D83EE]">NewsLetter</span> <span className="hidden md:block">News Letter</span> by QuillAudits
        </h2>
        <p className="font-400 text-sm lg:w-[75%] hidden md:block">
          Subscribe for the most Exclusive Weekly security based newsletter and
          covering all the recent hacks up to date.
        </p>
      </div>
      <div className="flex-1 space-y-5 md:space-y-0">
        <div className="w-52 md:w-64 mx-auto xl:w-full">
          <img src={MailImage} alt="NewsLetter" className="h-full w-full" />
        </div>
        <div>
          <p className="font-jost font-600 text-xs w-56 px-1 mx-auto text-center md:hidden">
          DeFi & NFT Hacks, CTFs, and Blockchain Security Insights straight to your Inbox. Explore our weekly newsletter: <span className="text-[#2D83EE]">HashingBits</span>. Stay updated on everything we’re publishing. Stand a step ahead.
          </p>
        </div>
        <div className="xl:bg-white gap-6 xl:gap-0 flex flex-col xl:flex-row items-center justify-center md:justify-between px-3 py-2 rounded-md md:mx-7">
          <input type="text" placeholder="vitalik@ethereum.org" className="focus:outline-none w-60 px-3 py-2 text-sm xl:px-0 xl:py-0 rounded-md"/>
          <button className="px-5 py-1 text-md font-500  text-white rounded-md ">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
