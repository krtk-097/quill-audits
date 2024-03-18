import React from "react";
import "./carpeDiemSection.css";
import futureImage from "../../../Assets/image 17.svg";
import fundsImage from "../../../Assets/Screenshot 2024-02-16 at 7.43 1.svg";

const CarpeDiemSection = () => {
  return (
    <div className="space-y-7 px-5 lg:px-0">
      <h2 className="font-jost text-2xl md:text-3xl font-700  lg:w-[50%]">
        CarpeDiem Pension's Flexible, Blockchain-Enabled Future
      </h2>
      <p className="font-poppins font-400 lg:w-[60%]">
        CarpeDiem Pension redefines retirement planning with a unique approach
        that deviates from traditional pension funds. With no minimum age for
        retirement, it offers flexibility and freedom, ensuring all genders
        receive equal treatment. CarpeDiem Pension ensures blockchain
        transparency, anonymity, and global accessibility, safeguarding pensions
        during international relocation. Easily transfer pensions to loved ones;
        share wallet access. Re-deposit payouts for increased future benefits.
        Importantly, CarpeDiem Pension prioritizes deposit security by avoiding
        utilizing client funds for internal investments. To become a part of
        this forward-thinking pension scheme, one simply needs to install and
        configure a blockchain wallet.
      </p>
      <div className="md:w-[73%] ">
        <img src={futureImage} alt="Future Image" className="h-full w-full" />
      </div>

      <p className="font-jost text-2xl md:text-3xl font-700  lg:w-[65%]">
        CarpeDiem Pension's Challenges: Enhancing Security Against Reentrancy,
        Front-Running, and Infinite Minting
      </p>
      <p className="font-poppins font-400 lg:w-[60%]">
        CarpeDiem Pension confronts critical security challenges, including the
        risks of reentrancy and front-running exploits.Malicious actors may
        exploit contract vulnerabilities, withdrawing excess funds or
        manipulating transaction timing for unfair advantages. System faces
        infinite minting threats, risking economic stability with endless
        creation of CDP tokens or pension shares. Addressing these challenges is
        paramount to safeguarding the integrity and security of CarpeDiem
        Pension.
      </p>
      <div className="md:w-[62%] ">
        <img src={fundsImage} alt="Future Image" className="h-full w-full" />
      </div>
      <p className="font-jost text-2xl md:text-3xl font-700 w-[80%] lg:w-[60%]">
        CarpeDiem Pension's Journey Through our Audit Process
      </p>
      <ol style={{ listStyleType: "Number" }} className="ms-5 space-y-5">
        <li className="font-poppins font-600 ">
          Information Gathering:
          <ul
            style={{ listStyleType: "disc" }}
            className="font-400 text-sm md:text-base mt-5 ms-1 md:ms-3 space-y-5 lg:w-[50%]"
          >
            <li>
              Collected and reviewed all relevant documentation, including
              whitepaper, technical specifications, and design documents.
            </li>
            <li>
              Obtained a clear understanding of the CDP platform's
              functionality, economic model, and intended user interactions.
            </li>
            <li>
              Discussed client concerns and specific areas of focus for the
              audit.
            </li>
          </ul>
        </li>
        <li className="font-poppins font-600 ">
          Manual Code Review:
          <ul
            style={{ listStyleType: "disc" }}
            className="font-400 text-sm md:text-base mt-5 ms-1 md:ms-3 space-y-5 lg:w-[50%]"
          >
            <li>
              Conducted a line-by-line review of the smart contract code,
              focusing on:
              <ul
                style={{ listStyleType: "circle" }}
                className="font-400 font-poppins ms-3 md:ms-12 mt-5 space-y-3"
              >
                <li>
                  <i className="font-600">Vulnerability identification:</i>{" "}
                  Searching for known vulnerabilities like reentrancy,
                  front-running, integer overflows, and access control issues
                  etc.
                </li>
                <li>
                  <i className="font-600">Logic flaws:</i> Identifying
                  inconsistencies or unintended behaviors in the code logic.
                </li>
                <li>
                  <i className="font-600">Tokenomics correctness:</i> Verifying
                  if the code accurately implements the intended economic model
                  and token distribution mechanisms.
                </li>
                <li>
                  <i className="font-600">Solidity best practices:</i>{" "}
                  Compliance with secure coding standards and adherence to
                  established guidelines.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="font-poppins font-600 ">
          Functional Testing:
          <ul
            style={{ listStyleType: "disc" }}
            className="font-400 text-sm md:text-base mt-5 ms-1 md:ms-3 space-y-5 lg:w-[50%]"
          >
            <li>
              Developed and executed a comprehensive set of test cases covering
              various user interactions and edge cases.
            </li>
            <li>
              Simulated different deposit, claim, and referral scenarios to
              assess functionality and uncover potential exploits.
            </li>
            <li>
              Focused on scenarios identified during the manual review and
              client concerns (e.g., infinite minting, reward calculation
              errors).
            </li>
            <li>
              Leveraged tools like Hardhat and Ganache to deploy and test the
              smart contract locally.
            </li>
          </ul>
        </li>
        <li className="font-poppins font-600 ">
          Automated Testing:
          <ul
            style={{ listStyleType: "disc" }}
            className="font-400 text-sm md:text-base mt-5 ms-1 md:ms-3 space-y-5 lg:w-[50%]"
          >
            <li>
              Employed static analysis tools like Slither to identify
              vulnerabilities through automated code scanning.
            </li>
            <li>
              Utilized symbolic execution tools like Mythril to explore various
              code execution paths and uncover potential attack vectors.
            </li>
            <li>
              Integrated unit tests are written by the CDP team to verify
              specific contract functions and their behaviour.
            </li>
          </ul>
        </li>
        <li className="font-poppins font-600 ">
          Reporting & Remediation:
          <ul
            style={{ listStyleType: "disc" }}
            className="font-400 text-sm  md:text-base mt-5 ms-1 md:ms-3 space-y-5 lg:w-[50%]"
          >
            <li>
              Prepared a detailed report outlining all identified
              vulnerabilities, categorized by severity and potential impact.
            </li>
            <li>
              Provided clear recommendations for fixing each vulnerability,
              including code snippets and best practices.
            </li>
            <li>
              Collaborated with the CDP team to prioritize and address the
              identified issues.
            </li>
            <li>
              Conducted additional verification testing after vulnerability
              fixes were implemented.
            </li>
          </ul>
        </li>
      </ol>
    </div>
  );
};

export default CarpeDiemSection;
