import BtCleanFIlter from "../BtCleanFilter/BtCleanFIlter";
import FilterContinent from "../FilterContinent/FilterContinent";
import FilterCurrency from "../FilterCurrency/FilterCurrency";
import FilterLetter from "../FIlterLetter/FilterLetter";
import NumberCountries from "../NumberCountries/NumberCountries";

const BarraFiltros = ({ filtros, setFiltros }) => {
  return (
    <form className="pt-10 md:pt-16 md:flex md:justify-between sm:gap-5">
      <div className="gap-2 flex flex-col justify-center items-center sm:flex-row sm:justify-items-start">
        {/* Filtro Continente */}
        <FilterContinent filtros={filtros} setFiltros={setFiltros} />

        {/* Filtro Moeda */}
        <FilterCurrency filtros={filtros} setFiltros={setFiltros} />

        {/* Filtro Letra */}
        <FilterLetter filtros={filtros} setFiltros={setFiltros} />

        <div className="justify-items-start sm:hidden">
          <BtCleanFIlter setFiltros={setFiltros} />
        </div>
      </div>

      <div className="hidden items-end mt-2 sm:flex sm:justify-items-start md:justify-end sm:flex-wrap">
        <BtCleanFIlter setFiltros={setFiltros} />
      </div>
    </form>
  );
};

export default BarraFiltros;
