import React, { createContext, useState } from "react";

export const TemaContexto = createContext({} as Valor);

type Childre = {
  children: React.ReactNode;
}

type Valor = {
  tema: string;
  mudarTema: () => string
}

export const TemaProvider = ({ children }: Childre) => {
  const [tema, setTema] = useState('light');

  const mudarTema = () => {
    const novoTema = tema === "light" ? "dark" : "light";
    setTema(novoTema);
    return novoTema;
  }

  const valor: Valor = {
    tema,
    mudarTema
  }

  return (
    <TemaContexto.Provider value={valor}>
      {children}
    </TemaContexto.Provider>
  );
}
