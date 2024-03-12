import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartContext from "./components/CartShowContext";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const toggleCartHandler = () => {
    setCartIsShown((prevCartIsShown) => !prevCartIsShown);
  };

  return (
    <CartContext.Provider
      value={{
        toggleCart: toggleCartHandler
      }}
    >
      {cartIsShown && <Cart />}
      <Header />
      <main>
        <Meals />
      </main>
    </CartContext.Provider>
  );
}

export default App;
