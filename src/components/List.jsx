import React, { useEffect, useState } from "react";

export const List = ({ getItems }) => {
  const [myItems, setMyItems] = useState([]);

  useEffect(() => {
    console.log("buscando itens do Banco de Dados...");
    setMyItems(getItems);
  }, [getItems]);

  return (
    <div>
      {myItems?.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
};
