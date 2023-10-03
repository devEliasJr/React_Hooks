import { useRef, useState, useEffect } from "react";

const HookuseRef = () => {
  // 1 - useRef
  const numberRef = useRef(0);
  const [counter, setCounter] = useState(0);
  const [counterB, setCounterB] = useState(0);

  useEffect(() => {
    numberRef.current = numberRef.current + 1;
  });

  // 2 - useRef pegando elementos do DOM
  const inputRef = useRef();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setText("")

    inputRef.current.focus()
  };

  return (
    <div>
      {/* 1 - useRef */}
      <h2>HookuseRef</h2>
      <p>O componente renderizou: {numberRef.current} vezes</p>
      <p>Counter 1: {counter}</p>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Contador
      </button>
      <p>Counter 2: {counterB}</p>
      <button
        onClick={() => {
          setCounterB(counterB + 1);
        }}
      >
        Contador B
      </button>
      {/* useRef DOM */}
      <h2>Use Ref manipulando o DOM</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={inputRef}
          value={text}
          onChange={(e) => 
            setText(e.target.value)
          }
        />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default HookuseRef;
