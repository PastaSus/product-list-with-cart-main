function Cart({ items, totalItems, totalPrice, onRemove }) {
  const removeCartItem = (item) => {
    for (let i = 0; i < item.quantity; i++) {
      onRemove(item.index);
    }
  };

  return (
    <section
      aria-labelledby="cart-heading"
      className="mt-6 rounded-xl px-6 py-8 text-center shadow-md"
    >
      <h2 id="cart-heading" className="m-0 text-start text-[var(--Red)]">
        Your Cart ({totalItems})
      </h2>

      {items.length === 0 ? (
        <div className="mt-10 grid justify-items-center">
          <img
            src="./../../assets/images/illustration-empty-cart.svg"
            alt="A Cake and one slice of it"
          />
          <p className="text-sm font-medium text-[var(--Rose-500)]">
            Your added items will appear here
          </p>
        </div>
      ) : (
        <div>
          <ul>
            {items.map((item) => {
              <li
                key={item.index}
                className="flex items-center justify-between border-b py-2"
              >
                <div className="">
                  <h3 className="font-medium">{item.name}</h3>
                  <div className="flex">
                    <span className="text-[var(--Red-900)]">
                      {item.quantity}x
                    </span>
                    <span className=""> @${item.price}</span>
                    <span className="">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
                <div>
                  <button
                    className=""
                    aria-label={`Remove ${item.name} from cart`}
                    onClick={() => {
                      removeCartItem(item);
                    }}
                  >
                    <img src="" alt="" />
                  </button>
                </div>
              </li>;
            })}
          </ul>
          <div className="mt-6 pt-4">
            <div className="flex items-center justify-between">
              <span className="">Order Total</span>
              <strong className="text-2xl">${totalPrice.toFixed(2)}</strong>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Cart;
