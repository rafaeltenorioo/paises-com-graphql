import React from "react";

const NumberCountries = ({ data }) => {
  return (
    <div className="flex justify-center items-center w-[200px] bg-blue-100 rounded-full border border-blue-200 px-3 py-2 shadow-sm">
      <span className="text-[14px] font-semibold  text-blue-700 text-center">
        {data?.countries.length}{" "}
        {data?.countries.length === 1
          ? "país encontrado"
          : "países encontrados"}
      </span>
    </div>
  );
};

export default NumberCountries;
