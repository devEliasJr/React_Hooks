import React from "react";
import { HookuseContext } from "../../components/HookuseContext";

//useContext
import { SomeContext } from "../../components/HookuseContext";
import { useContext } from "react";

const About = () => {
  const { contextValue } = useContext(SomeContext);

  return (
    <div>
      <HookuseContext>About</HookuseContext>
      <p>Valor do context: {contextValue}</p>
    </div>
  );
};

export default About;
