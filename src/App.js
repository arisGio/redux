import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { addTopping } from "./pizzaSlice";

function App() {
  const pizza = useSelector((state) => state.pizza);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Pizza</h1>
      {pizza.toppings.map((topping) => (
        <div key={topping}>{topping}</div>
      ))}

      <button onClick={() => dispatch(addTopping("pepperoni"))}>
        Add Pepperoni
      </button>
    </>
  );
}

export default App;
