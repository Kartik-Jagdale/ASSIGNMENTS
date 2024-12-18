import { useState } from "react";
import Items from "./items";

const Fooditems = ({ items }) => {

  let [activeItems, setActiveItems] = useState([]);
  
  let onBuyButton = (item, event) =>{
      let newItem = [...activeItems, item];
      setActiveItems(newItem);
  }

  return (
    <ul className="list-group">
      {items.map((item) => (
        <Items key={item} food={item}
                bought = {activeItems.includes(item) }
                handleBuyButton = {(event) => onBuyButton(item, event)}
          >
        </Items>
      ))}
    </ul>
  );
};

export default Fooditems;
