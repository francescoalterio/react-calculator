import React from "react";

const PreviewOp = ({ value }) => {
  return (
    <input
      type="text"
      value={value}
      className="h-1/3 text-gray-400 text-xl font-medium bg-slate-900 border-none text-right"
    />
  );
};

export default PreviewOp;
