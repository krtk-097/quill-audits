import React from "react";

const AuditIssue = ({ title, description }) => {
  return (
    <div className="">
      <li>
        {title}:
        <ol
          style={{ listStyleType: "lower-alpha" }}
          className="md:ms-10 mt-3 lg:w-[60%]"
        >
          <li className="font-400 ps-2">{description}</li>
        </ol>
      </li>
    </div>
  );
};

export default AuditIssue;
