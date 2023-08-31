import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const pizza = useSelector((state) => state.pizza);
  return (
    <>
      <h1>Pizza</h1>
      {pizza.toppings.map((topping) => (
        <div key={topping}>{topping}</div>
      ))}
    </>
  );
}

export default App;
