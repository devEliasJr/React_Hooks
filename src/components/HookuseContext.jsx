import { createContext } from "react";

export const SomeContext = createContext();

export const HookuseContext = ({ children }) => {
  const contextValue = "testing context";

  return (
    <SomeContext.Provider value={{ contextValue }}>
      {children}
    </SomeContext.Provider>
  );
};
