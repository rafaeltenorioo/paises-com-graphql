import React from "react";

const Native = ({ pais }) => {
  return (
    <div className="flex justify-between border-t border-slate-100 pt-2">
      <span className="font-semibold text-slate-400 text-xs uppercase tracking-wider">
        Nome Nativo
      </span>
      <span className="font-medium text-slate-700 text-right">
        {pais.native || "N/A"}
      </span>
    </div>
  );
};

export default Native;
