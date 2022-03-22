import React from "react";

const CurrentOp = ({ operation }) => {
  return (
    <input
      className="h-2/5 text-white text-3xl font-medium bg-slate-900 border-none text-right"
      type="text"
      value={operation}
    />
  );
};

export default CurrentOp;
