import React from "react";

const HandleChange = (e, setFiltros, parametro) => {
  e.preventDefault();
  const { name, value } = e.target;

  if (value === "") {
    setFiltros((prev) => {
      const novoFiltro = { ...prev };
      delete novoFiltro[name];

      return novoFiltro;
    });
  } else {
    setFiltros((prev) => ({
      ...prev,
      [name]: { [parametro]: value },
    }));
  }
};

export default HandleChange;
