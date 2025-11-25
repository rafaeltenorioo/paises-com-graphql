import React from "react";

const Continents = ({ pais }) => {
  return (
    <div className="flex justify-between border-b border-slate-100 pb-2">
      <span className="font-semibold text-slate-400 text-xs uppercase tracking-wider">
        Continente
      </span>
      <span className="font-medium text-slate-700">{pais.continent.name}</span>
    </div>
  );
};

export default Continents;
