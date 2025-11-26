import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import { useState } from "react";
import BarraFiltros from "../BarraFiltros";
import EmptyState from "../EmptyState/EmptyState";
import NameFlag from "../Card/NameFlag/Name&Flag";
import Capital from "../Card/Capital/Capital";
import Continents from "../Card/Continents/Continents";
import Currency from "../Card/Currency/Currency";
import Languages from "../Card/Languages/Languages";
import Native from "../Card/Native/Native";
import NumberCountries from "../NumberCountries/NumberCountries";
import CardCompleted from "../Card/CardCompleted/CardCompleted";
import SkeletonCard from "../Card/SkeletonCard";

const GET_COUNTRIES = gql`
  query Countries($filter: CountryFilterInput) {
    countries(filter: $filter) {
      code
      name
      capital
      currencies

      continent {
        name
      }
      languages {
        name
      }
      native
    }
  }
`;

export const DisplayCountries = () => {
  const [filtros, setFiltros] = useState({});

  // Toda vez que filtros mudar, o Apollo refaz a busca
  const { data, loading, error } = useQuery(GET_COUNTRIES, {
    variables: { filter: filtros },
  });

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div
          className="bg-red-50 border-l-4 border-red-500 text-red-900 p-6 rounded-r shadow-md max-w-lg w-full mx-4"
          role="alert"
        >
          <div className="flex items-center">
            <div className="py-1">
              {/* Ícone de alerta SVG */}
              <svg
                className="fill-current h-6 w-6 text-red-500 mr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-lg">Ops! Algo deu errado.</p>
              <p className="text-sm mt-1 text-red-700">{error.message}</p>
              <p className="text-xs mt-2 text-red-500 uppercase tracking-wide">
                Verifique sua conexão ou tente recarregar.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const skeletons = Array(10).fill(0);

  return (
    <section className="flex flex-col gap-3  min-h-screen py-5 px-4 md:px-8">
      {/* Cabeçalho de Resultados */}
      <div className="flex flex-col border-b border-slate-200 pb-4">
        <div className="flex flex-col gap-5 justify-between">
          <div className="flex justify-center">
            <h1 className="text-4xl font-bold text-blue-100 items-center ">
              Explore as nações com base nos seus filtros
            </h1>
          </div>

          <BarraFiltros filtros={filtros} setFiltros={setFiltros} />
        </div>
      </div>

      <NumberCountries data={data} />

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  max-h-screen overflow-y-auto">
        {loading ? (
          // Se carregando... mapeio o array falso
          skeletons.map((_, index) => <SkeletonCard key={index} />)
        ) : // Se está carregado...
        data?.countries.length > 0 ? (
          // E os dados estão prontos... mapeamos na API
          data.countries.map((pais) => (
            <CardCompleted pais={pais} key={pais.code} />
          ))
        ) : (
          // Se ñ está carregando e ñ há dados... busca vazia
          <div className="col-span-full">
            <EmptyState setFiltros={setFiltros} />
          </div>
        )}
      </div>
    </section>
  );
};
