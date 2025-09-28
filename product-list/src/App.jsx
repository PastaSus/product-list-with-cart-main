import { useState } from "react";

import MainHeading from "./components/MainHeading";
import DessertList from "./components/DessertList";
import Cart from "./components/Cart";

import desserts from "./assets/data.json";

function App() {
  const [cart, setCart] = useState([]);

  function handleAdd(dessertIndex) {
    const dessert = desserts[dessertIndex];

    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.index === dessertIndex);

      if (existing) {
        return prevCart.map((item) => {
          item.index === dessertIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
      } else {
        return [...prevCart, { ...dessert, index: dessertIndex, quantity: 1 }];
      }
    });
  }

  function handleRemove(dessertIndex) {
    setCart((prevCart) => {
      prevCart
        .map((item) =>
          item.index === dessertIndex
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0);
    });
  }

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0); // ← Fixed reduce
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0,
  ); // ← Fixed reduce

  return (
    <main className="mx-auto mb-6 max-w-xs">
      <MainHeading></MainHeading>
      <DessertList
        desserts={desserts}
        cart={cart}
        onAdd={handleAdd}
        onRemove={handleRemove}
      ></DessertList>
      <Cart
        items={cart}
        totalItems={totalItems}
        totalPrice={totalPrice}
        onRemove={handleRemove}
      ></Cart>
    </main>
  );
}

export default App;
