const NameFlag = ({ pais }) => {
  return (
    <div className="flex items-center gap-10 p-4">
      {/* Usamos o FlagCDN.
         O código do país vem em maiúsculo (ex: "BR"), mas a URL precisa ser minúscula (.toLowerCase()).
         Usamos w40 para pegar uma imagem leve de 40px de largura.
      */}
      <img
        src={`https://flagcdn.com/80x60/${pais.code.toLowerCase()}.png`}
        srcSet={`https://flagcdn.com/160x120/${pais.code.toLowerCase()}.png 2x, https://flagcdn.com/240x180/${pais.code.toLowerCase()}.png 3x`}
        width="80"
        height="60"
        alt={`Bandeira de ${pais.name}`}
      />

      <h2 className="font-bold text-2xl text-black">{pais.name}</h2>
    </div>
  );
};

export default NameFlag;
