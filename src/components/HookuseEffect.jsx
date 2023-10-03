import { useEffect, useState } from "react";

const HookuseEffect = () => {
  // 1 - useEffect sem dependencias
  //   -> Executa SEMPRE que o componente pai for re-renderizado
  useEffect(() => {
    console.log("Serei executado ao ser renderizado");
  });

  const [number, setNumber] = useState(1);

  const changeSomething = () => {
    setNumber(number + 1);
  };

  // 2 - useEffect com array de dependencias vazios
  //   -> A ideia é utiliza-lo para utilizar a função uma unica vez
  //   -> Independente se há re-renderização do elemento pai
  useEffect(() => {
    console.log("Serei executado apenas uma vez!");
  }, []);

  // 3 - useEffect com array de depências
  //   - sempre que uma dependência for alterada a função re-executa
  const [anumber, setAnumber] = useState(0);

  useEffect(() => {
    if (anumber > 0) {
      console.log("Serei executado caso alguma dependência for atualizada!");
    }
  }, [anumber]);

  // 4 - Cleanup do useEffect
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Hello World");
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [anumber]);

  return (
    <div>
      <h2>HookuseEffect</h2>
      <p>Olhar os Logs!</p>
      <p>Hook s/ depencias - Number: {number}</p>
      <button onClick={changeSomething}>Executar!</button>
      <p>Hook c/ dependencias - Another number: {anumber}</p>
      <button onClick={() => setAnumber(anumber + 1)}>
        Atualizar Dependência
      </button>
      <span className="separator"></span>
    </div>
  );
};

export default HookuseEffect;
