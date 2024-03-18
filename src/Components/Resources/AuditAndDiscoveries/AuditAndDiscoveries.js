import React from "react";
import AuditIssue from "../AuditIssue/AuditIssue";
import { issues } from "../../../data";

const AuditAndDiscoveries = () => {
  return (
    <div className="space-y-7 px-5 lg:px-0">
      <h2 className="font-700 font-jost text-2xl md:text-3xl lg:w-[65%]">
        Comprehensive Audit Discoveries and Remediation Strategies
      </h2>
      <p className="font-poppins font-400 text-sm md:text-base lg:w-[55%]">
        Throughout the audit process, we unearthed a total of 33 issues,
        spanning from minor concerns to critical vulnerabilities. Among these,
        some of the critical issues identified were: Here's how we remediated
        them :
      </p>
      <ol
        style={{ listStyleType: "Number" }}
        className="font-poppins font-600 px-1.5 text-sm md:text-base lg:px-0 md:ms-5 space-y-7"
      >
        {issues.map((issue, index) => (
          <AuditIssue
            key={index}
            title={issue.title}
            description={issue.description}
          />
        ))}
      </ol>

      <p className="font-700 font-jost text-2xl md:text-3xl lg:w-[65%]">
        Remediation & Impact:
      </p>
      <p className="font-poppins font-400 text-sm md:text-base lg:w-[60%]">
        All identified vulnerabilities were addressed by the CDP team,
        significantly enhancing the smart contract's security posture. Key
        improvements include
      </p>
      <ul
        style={{ listStyleType: "disc" }}
        className="font-poppins font-400 ms-2 text-sm md:text-base md:ms-6 space-y-5 lg:w-[58%]"
      >
        <li className="ps-2">
          Implementation of reentrancy protection mechanisms.
        </li>
        <li className="ps-2">
          Accurate handling of decimal values using established libraries or
          best practices.
        </li>
        <li className="ps-2">
          Revised calculations with proper scaling factors
        </li>
        <li className="ps-2">
          Fixing logic errors to ensure deposits and waiting periods are
          enforced.
        </li>
        <li className="ps-2">
          Addressing referral system vulnerabilities to prevent abuse.
        </li>
      </ul>
      <p className="md:w-[60%]">
        <b>Embed this tweet :-</b>{" "}
        <a
          href="https://x.com/CarpeDiemCDP/status/1742906560794296402?s=20"
          className="text-blue-700"
        >
          https://x.com/CarpeDiemCDP/
          <br />
          status/1742906560794296402?s=20
        </a>
      </p>
      <p className="font-poppins font-400 text-sm md:text-base lg:w-[61%]">
        CDP smart contract audit revealed and fixed critical vulnerabilities,
        safeguarding funds and ensuring platform stability. This underscores the
        need for proactive security in blockchain projects, crucial for
        financial asset management. Through audits and issue resolution, CDP
        reinforces platform security, bolstering user trust.
      </p>
    </div>
  );
};

export default AuditAndDiscoveries;
