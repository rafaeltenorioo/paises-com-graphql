import HandleChange from "../HandleChange/HandleChange";

const CONTINENTS = [
  { value: "", name: "Todos os continentes" },
  { value: "SA", name: "América do Sul" },
  { value: "NA", name: "América do Norte" },
  { value: "EU", name: "Europa" },
  { value: "AF", name: "África" },
  { value: "AS", name: "Ásia" },
  { value: "OC", name: "Oceania" },
];
const FilterContinent = ({ filtros, setFiltros }) => {
  const getValor = (campo) => {
    return filtros[campo]?.eq || "";
  };
  return (
    <fieldset>
      <legend className="font-bold text-blue-100 uppercase mb-1">
        Continente
      </legend>
      <select
        name="continent"
        id="continent"
        onChange={(e) => HandleChange(e, setFiltros, "eq")}
        value={getValor("continent")}
        className="p-3  border border-gray-300 rounded bg-white w-[200px]"
      >
        {CONTINENTS.map((c) => (
          <option value={c.value} key={c.value}>
            {c.name}
          </option>
        ))}
      </select>
    </fieldset>
  );
};

export default FilterContinent;
