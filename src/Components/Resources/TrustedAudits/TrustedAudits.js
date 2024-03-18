import React from "react";
import "./trustedAudits.css";

const TrustedAudits = () => {
  return (
    <div className="lg:w-[50%] mt-10 md:mt-0 mx-auto flex flex-col justify-center items-center gap-5">
      <h2 className="font-jost font-600 text-3xl text-[#0E3088] text-center px-5 lg:px-0">
        See how QuillAudits is a trusted partner in 1000+ Audit stories
      </h2>
      <div>
        <button className="px-5 py-2 text-md font-500  text-white rounded-md ">
          Request An Audit
        </button>
      </div>
    </div>
  );
};

export default TrustedAudits;
