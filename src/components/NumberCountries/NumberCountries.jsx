import React from "react";

const NumberCountries = ({ data }) => {
  return (
    <div className="flex justify-between">
      <span className="text-xs font-semibold text-blue-700 bg-blue-100 px-4 py-2 rounded-full border border-blue-200 shadow-sm w-[170px] flex justify-center">
        {data.countries.length}{" "}
        {data.countries.length === 1 ? "país encontrado" : "países encontrados"}
      </span>
    </div>
  );
};

export default NumberCountries;
