import { use, useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonContainer";
import Display from "./components/Display";

function App() {
  const [calVal, setCalVal] = useState("0");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <center>
      <div className={styles.calculator} style={{ marginTop: "15%" }}>
        <Display calVal={calVal}></Display>
        <ButtonsContainer onButtonClick={onButtonClick} />
      </div>
    </center>
  );
}

export default App;
