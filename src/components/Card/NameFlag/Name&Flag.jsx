const NameFlag = ({ pais }) => {
  return (
    <div className="p-5 border-b border-slate-50 bg-linear-to-b from-white to-slate-50/50">
      <div className="text-5xl mb-3 drop-shadow-sm transition-transform group-hover:scale-110 duration-300 origin-left">
        {pais.emoji}
      </div>
      <h3 className="text-xl font-bold text-slate-800 leading-tight group-hover:text-blue-600 transition-colors">
        {pais.name}
      </h3>
    </div>
  );
};

export default NameFlag;
