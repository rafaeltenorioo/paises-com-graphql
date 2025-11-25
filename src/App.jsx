import { DisplayCountries } from "./components/DisplayCoutries/DisplayCoutries";

function App() {
  return (
    <>
      {/* <details className="group border border-gray-200 rounded-lg open:ring-2 open:ring-blue-100">
        <summary className="flex justify-between items-center p-4 font-medium cursor-pointer list-none text-gray-700 hover:bg-gray-50 rounded-lg">
          Clique para ver a resposta
        </summary>
        <p>Aqui está o conteúdo oculto! Tudo por conta do navegador</p>
      </details> */}

      <DisplayCountries />
    </>
  );
}

export default App;
