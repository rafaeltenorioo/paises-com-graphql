import React from "react";
import BtCleanFIlter from "../BtCleanFilter/BtCleanFIlter";

const EmptyState = ({ setFiltros }) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 bg-white/30 rounded-2xl border border-slate-300">
      <div className="text-6xl mb-4">🗺️</div>
      <h3 className="text-[20px] font-bold text-black mb-1">
        Nenhum país encontrado
      </h3>
      <p className="text-gray-900 font-medium mb-6 max-w-xs text-center">
        Tente ajustar seus filtros de continente, moeda ou inicial.
      </p>

      <div className="transform hover:scale-105 transition-transform">
        <BtCleanFIlter setFiltros={setFiltros} />
      </div>
    </div>
  );
};

export default EmptyState;
