import "./App.css";
import logo from "./imagenes/logo.png";
import Boton from "./components/Boton";
import Counter from "./components/Contador";
import { useState } from "react";

function App() {
  const [clikcNumber, setClickNumber] = useState(0);

  const clickController = () => {
    setClickNumber(clikcNumber + 1);
  };

  const resetController = () => {
    setClickNumber(0);
  };

  return (
    <div className="App">
      <div className="logo-container">
        <img
          className="logo"
          src={logo}
          alt="logo"
        />
      </div>

      <div className="counter-container">
        <Counter clikcNumber={clikcNumber} />

        <div className="button-container">
        <Boton
          name="Click"
          isBotonClick={true}
          clickController={clickController}
        />

        <Boton
          name="reset"
          isBotonClick={false}
          clickController={resetController}
        />
        </div>
      </div>
    </div>
  );
}

export default App;
