import HandleChange from "../HandleChange/HandleChange";

const ALFABETO = [
  { id: 1, letra: "A" },
  { id: 2, letra: "B" },
  { id: 3, letra: "C" },
  { id: 4, letra: "D" },
  { id: 5, letra: "E" },
  { id: 6, letra: "F" },
  { id: 7, letra: "G" },
  { id: 8, letra: "H" },
  { id: 9, letra: "I" },
  { id: 10, letra: "J" },
  { id: 11, letra: "K" },
  { id: 12, letra: "L" },
  { id: 13, letra: "M" },
  { id: 14, letra: "N" },
  { id: 15, letra: "O" },
  { id: 16, letra: "P" },
  { id: 17, letra: "Q" },
  { id: 18, letra: "R" },
  { id: 19, letra: "S" },
  { id: 20, letra: "T" },
  { id: 21, letra: "U" },
  { id: 22, letra: "V" },
  { id: 23, letra: "W" },
  { id: 24, letra: "X" },
  { id: 25, letra: "Y" },
  { id: 26, letra: "Z" },
];

const FilterLetter = ({ filtros, setFiltros }) => {
  const valorAtual = filtros.name?.regex || "";

  return (
    <fieldset>
      <legend className="font-bold text-blue-100 uppercase mb-1">
        Inicial do Nome
      </legend>
      <div>
        <select
          name="name"
          id="name"
          onChange={(e) => HandleChange(e, setFiltros, "regex")}
          value={valorAtual}
          className="p-3 border border-gray-300 rounded bg-white w-[200px]"
        >
          <option value="">Todas as letras</option>
          {ALFABETO.map((l) => (
            <option key={l.id} value={`^${l.letra}`}>
              {l.letra}
            </option>
          ))}
        </select>
      </div>
    </fieldset>
  );
};

export default FilterLetter;
