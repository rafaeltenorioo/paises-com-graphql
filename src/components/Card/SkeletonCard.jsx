import React from "react";

const SkeletonCard = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-0 overflow-hidden shadow-sm animate-pulse h-full min-h-[350px]">
      {/* Simulacão do topo */}
      <div className="h-16 bg-slate-200 w-full border-b border-slate-100"></div>

      {/* Simulacão do Corpo */}
      <div className="p-5 space-y-4">
        {/* Linhas simulando texto */}
        <div className="h-4 bg-slate-200 rounded w-3/4"></div>
        <div className="h-4 bg-slate-200 rounded w-1/2"></div>
        <div className="h-4 bg-slate-200 rounded w-5/6"></div>
        <div className="h-4 bg-slate-200 rounded w-full"></div>
        <div className="h-4 bg-slate-200 rounded w-2/3"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
