import styles from "./Item.module.css";
const Items = ({ food, bought, handle}) => {
  
  return (
    <li className={`${styles["kg-item"]} list-group-item ${bought && 'active'}`}>
      <span className={styles["kg-span"]}>{food}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={(event) => handleBuyButton(event)}
      >
        Buy
      </button>
    </li>
  );
};

export default Items;
