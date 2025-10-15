import { useState } from "react";

import DessertList from "./components/DessertList";
import Cart from "./components/Cart";
import ConfirmOrder from "./components/ConfirmOrder";

import desserts from "./assets/data.json";

function App() {
  const [cart, setCart] = useState([]);
  const [confirmOpen, setConfirmOpen] = useState(false);

  function handleAdd(dessertIndex) {
    const dessert = desserts[dessertIndex];
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.index === dessertIndex);
      if (existing) {
        return prevCart.map((item) =>
          item.index === dessertIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        return [...prevCart, { ...dessert, index: dessertIndex, quantity: 1 }];
      }
    });
  }

  function handleRemove(dessertIndex) {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.index === dessertIndex
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  function handleConfirmOrder() {
    setConfirmOpen(true);
  }

  function handleResetOrder() {
    setCart([]); // clear cart
    setConfirmOpen(false); // close modal
  }

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0); // ← Fixed reduce
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0,
  ); // ← Fixed reduce

  return (
    <div>
      <main className="mx-auto grid max-w-82 pb-6 md:max-w-150 xl:my-14 xl:max-w-7xl xl:grid-cols-[auto_auto] xl:gap-8 xl:px-8">
        <div>
          <h1 className="text-[2.5rem] text-[var(--Rose-900)]">Desserts</h1>
          <DessertList
            desserts={desserts}
            cart={cart}
            onAdd={handleAdd}
            onRemove={handleRemove}
          ></DessertList>
        </div>
        <Cart
          items={cart}
          totalItems={totalItems}
          totalPrice={totalPrice}
          onRemove={handleRemove}
          onConfirm={handleConfirmOrder}
        ></Cart>
      </main>

      {/* Overlay + ConfirmOrder modal  
      fixme:confirm order should be above overlay its below it*/}
      {confirmOpen && (
        <>
          {/* Full-screen overlay, just below the modal */}
          <div
            className="fixed inset-0 z-40 bg-black/60"
            aria-hidden="true"
          ></div>

          {/* ConfirmOrder modal */}
          <ConfirmOrder
            items={cart}
            totalPrice={totalPrice}
            onReset={handleResetOrder}
          />
        </>
      )}
    </div>
  );
}

export default App;
