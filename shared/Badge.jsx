import React from "react";

const Badge = ({ children, classes = "" }) => {
  return (
    <span className={`rounded-lg py-1 px-3 text-sm ${classes}`}>
      {children}
    </span>
  );
};

export default Badge;
