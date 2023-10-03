import React, { useCallback, useState } from "react";
import { List } from "./List";

export function HookuseCallBack() {
  const [counter, setCounter] = useState(0);

  //Com useCallback a função nao é re-executada ao atualizar o componenet
  const getItemFromDatabase = useCallback(() => {
    return ["a", "b", "c"];
  }, []);

  return (
    <>
      <hr></hr>
      {/* A atulização do botao nao interfere na renderização de lista com useCallback */}
      <List getItems={getItemFromDatabase} />
      <h2>Use Call back</h2>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Alterar
      </button>
      <p>{counter}</p>
    </>
  );
}
