const FoodInput = ({ handleKeyDown }) => {
  return (
    <input
      style={{ width: "auto" }}
      type="text"
      placeholder="Enter food name here.."
      onKeyDown={handleKeyDown}
    />
  );
};

export default FoodInput;
