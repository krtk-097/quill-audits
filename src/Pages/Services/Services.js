import React from "react";
import "./services.css";
import CarpeDiemSection from "../../Components/Resources/CarpeDiemSection/CarpeDiemSection";
import AuditAndDiscoveries from "../../Components/Resources/AuditAndDiscoveries/AuditAndDiscoveries";
import ReviewCard from "../../Components/Resources/ReviewCard/ReviewCard";

const Services = () => {
  return (
    <div className="space-y-10 lg:px-48">
      <div className="relative mt-14 flex flex-col-reverse gap-10 md:gap-0 px-5 md:px-0 md:flex-row justify-between bg-[#FFFFFF01]">
        <p className="font-poppins font-400 text-sm md:text-base md:w-[60%]">
          Carpe Diem Pension, on Pulse blockchain, redefines retirement with a
          self-managed, inclusive, globally portable fund. Unique for its token
          burn mechanism, it ensures a sustainable 4.32% inflation payout. With
          $143.11k and 41.06% of CDP already burned, it serves 35 users
          globally.
        </p>
        <div className="location-block lg:absolute right-0 -bottom-16 font-inter rounded-md pe-32 ps-5 py-2 space-y-3">
          <div>
            <p className="font-400 text-[#808080]">HeadQuarter</p>
            <p className="font-500">SwitzerLand</p>
          </div>
          <div>
            <p className="font-400 text-[#808080]">Chain</p>
            <p className="font-500">Pulse Blockchain</p>
          </div>
        </div>
      </div>
      <div>
        <CarpeDiemSection />
      </div>
      <div className="space-y-7 px-5 lg:px-0">
        <h2 className="font-700 font-jost text-2xl md:text-3xl lg:w-[65%]">
          QuillAudits' Strategic Approach to CDP Security Audits
        </h2>
        <p className="font-poppins font-400 text-sm md:text-base lg:w-[55%]">
          We prioritize threat modeling based on platform-specific risks.
          Security-first, we identify and mitigate vulnerabilities beyond
          functionality testing. Using white-box and black-box tests, we conduct
          thorough vulnerability assessments. Maintaining transparency, we
          communicate openly with the CDP team. Emphasizing clarity, we present
          actionable insights for efficient issue resolution.
        </p>
      </div>
      <div>
        <AuditAndDiscoveries/>
      </div>
      <div>
        <ReviewCard/>
      </div>
      
    </div>
  );
};

export default Services;
