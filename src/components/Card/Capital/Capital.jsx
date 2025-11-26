import React from "react";

const Capital = ({ pais }) => {
  return (
    <div className="flex justify-between border-b border-slate-100 pb-2">
      <span className="font-semibold text-slate-800 text-xs uppercase tracking-wider">
        Capital
      </span>
      <span className="font-medium text-slate-700 text-right">
        {pais.capital || "N/A"}
      </span>
    </div>
  );
};

export default Capital;
