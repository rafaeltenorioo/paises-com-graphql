import React from "react";

const Languages = ({ pais }) => {
  return (
    <div className="flex justify-between border-t border-slate-100 pt-2">
      <span className="font-semibold text-slate-400 text-xs uppercase tracking-wider">
        {pais.languages?.map((l) => l.name).length > 1 ? "Idiomas" : "Idioma"}
      </span>

      <span className="font-medium text-slate-700 text-right">
        {pais.languages?.map((l) => l.name).join(", ") || "N/A"}
      </span>
    </div>
  );
};

export default Languages;
