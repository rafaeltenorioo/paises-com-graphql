import React from "react";
import HandleChange from "../HandleChange/HandleChange";

const MOEDAS = [
  { value: "", name: "Todas as moedas" },
  { value: "BRL", name: "Real (BRL)" },
  { value: "USD", name: "Dólar (USD)" },
  { value: "EUR", name: "Euro (EUR)" },
  { value: "GBP", name: "Libra Esterlina (GBP)" },
  { value: "JPY", name: "Iene (JPY)" },
  { value: "ARS", name: "Peso Argentino (ARS)" },
];

const FilterCurrency = ({ filtros, setFiltros }) => {
  const valorAtual = filtros.currency?.regex || "";
  return (
    <fieldset>
      <legend className="font-bold text-blue-100 uppercase mb-1">Moeda</legend>
      <select
        name="currency"
        id="currency"
        onChange={(e) => HandleChange(e, setFiltros, "regex")}
        value={valorAtual}
        className="p-3 border border-gray-300 rounded bg-white w-[200px]"
      >
        {MOEDAS.map((m) => (
          <option value={m.value} key={m.value}>
            {m.name}
          </option>
        ))}
      </select>
    </fieldset>
  );
};

export default FilterCurrency;
