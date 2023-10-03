//Hooks
import HookuseEffect from "../../components/HookuseEffect";
import HookuseReducer from "../../components/HookuseReducer";
import HookuseState from "../../components/HookuseState";
import HookuseRef from "../../components/HookuseRef";

//useContext
import { SomeContext } from "../../components/HookuseContext";
import { useContext } from "react";
import { HookuseCallBack } from "../../components/HookuseCallBack";
import HookuseMemo from "../../components/HookuseMemo";

const Home = () => {
  const { contextValue } = useContext(SomeContext);

  return (
    <div>
      <HookuseState />
      <HookuseReducer />
      <HookuseEffect />
      <h2>useContext</h2>
      <p>Valor do context: {contextValue}</p>
      <span className="separator"></span>
      <HookuseRef />
      <HookuseCallBack />
      <HookuseMemo />
      <br />
    </div>
  );
};

export default Home;
