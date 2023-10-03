import React, { useState } from "react";

const HookuseState = () => {
  let userName = "Junior";

  const [name, setName] = useState("Elias");
  const [age, setAge] = useState("0");

  const changeNames = () => {
    userName = "Jr";
    setName("E.J.");
    console.log(userName);
    console.log(name);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(age)
  }

  return (
    <>
      {/* 1 - useState */}
      <h2>useState</h2>
      <p>Variavel: {userName}</p>
      <p>useState: {name}</p>
      <button onClick={changeNames}>Mudar Nomes</button>
      <span className="separator"></span>
      
      {/* 2 - useState e input */}
      <form onSubmit={handleSubmit}>
        <label>
          <span>Idade</span>
          <input
            type="number"
            min={0}
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </label>
        <input type="submit" value="enviar" />
      </form>
      <p>Você tem: {age} anos</p>
      <span className="separator"></span>
    </>
  );
};

export default HookuseState;
