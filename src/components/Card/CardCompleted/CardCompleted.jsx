import React from "react";
import NameFlag from "../NameFlag/Name&Flag";
import Capital from "../Capital/Capital";
import Continents from "../Continents/Continents";
import Currency from "../Currency/Currency";
import Languages from "../Languages/Languages";
import Native from "../Native/Native";
import SkeletonCard from "../SkeletonCard";

const CardCompleted = ({ pais }) => {
  return (
    <div className="group relative bg-white/20 border border-slate-200 rounded-xl shadow-sm hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden mr-3 mb-3">
      {/* Topo do Card: Bandeira e Nome */}
      <NameFlag pais={pais} />

      {/* Corpo do Card: Detalhes */}
      <div className="p-5 text-sm text-slate-600 space-y-3 grow bg-white">
        <Capital pais={pais} />

        <Continents pais={pais} />

        <Currency pais={pais} />

        <Languages pais={pais} />

        <Native pais={pais} />
      </div>
    </div>
  );
};

export default CardCompleted;
