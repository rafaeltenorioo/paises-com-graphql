import React from "react";

const Currency = ({ pais }) => {
  return (
    <div className="flex justify-between items-center pt-1">
      <span className="font-semibold text-slate-800 text-xs uppercase tracking-wider">
        {pais.currencies.length > 1 ? "Moedas" : "Moeda"}
      </span>
      <span className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded text-xs font-bold border border-emerald-100">
        {pais.currencies.join(", ") || "?"}
      </span>
    </div>
  );
};

export default Currency;
