import "bootstrap/dist/css/bootstrap.min.css";
import ErrorMessage from "./components/ErrorMessage";
import Fooditems from "./components/FoodItems";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  

  const [data, setData] = useState("Food Item entered by user");
  const [fooditems, setFoodItems] = useState([]);

  const handleKeyDown = (event) => {
    if(event.key === "Enter"){
      let newFoodItem = event.target.value;
      let newItem = [...fooditems, newFoodItem];
      setFoodItems(newItem);
    }
  };

  return (
    <Container>
      <h1 className="food-heading">Healty Food</h1>
      <FoodInput handleKeyDown={handleKeyDown}></FoodInput>
      <ErrorMessage itemes={fooditems}></ErrorMessage>
      <Fooditems items={fooditems}></Fooditems>
    </Container>
  );
}

export default App;
