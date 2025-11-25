import React from "react";

const EmptyState = ({ setFiltros }) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl border-2 border-dashed border-slate-300">
      <div className="text-6xl mb-4 opacity-50">🗺️</div>
      <h3 className="text-lg font-bold text-slate-700 mb-1">
        Nenhum país encontrado
      </h3>
      <p className="text-slate-500 mb-6 max-w-xs text-center">
        Tente ajustar seus filtros de continente, moeda ou inicial.
      </p>

      <div className="transform hover:scale-105 transition-transform">
        <BtCleanFIlter setFiltros={setFiltros} />
      </div>
    </div>
  );
};

export default EmptyState;
