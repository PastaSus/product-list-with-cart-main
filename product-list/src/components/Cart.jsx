function Cart({ items, totalItems, totalPrice, onRemove, onConfirm }) {
  const removeCartItem = (item) => {
    for (let i = 0; i < item.quantity; i++) {
      onRemove(item.index);
    }
  };

  return (
    <section
      aria-labelledby="cart-heading"
      className="mt-6 rounded-xl px-6 py-8 text-center shadow-md xl:min-w-95 xl:self-start"
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
          <p className="text-sm font-medium text-[var(--Rose-500)] xl:font-semibold">
            Your added items will appear here
          </p>
        </div>
      ) : (
        <div>
          <ul className="p-0">
            {items.map((item) => (
              <li
                key={item.index}
                className="flex items-center justify-between border-b border-[var(--Rose-100)] py-4"
              >
                <div className="grid gap-1">
                  <h3 className="mt-0 text-start text-base font-medium text-[var(--Rose-900)]">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-[var(--Red)]">
                      {item.quantity}x
                    </span>
                    <span className="flex gap-2">
                      <span className="text-[var(--Rose-400)]">
                        @<span className="ml-1">${item.price.toFixed(2)}</span>
                      </span>
                      <span className="font-medium text-[var(--Rose-500)]">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </span>
                  </div>
                </div>
                <div>
                  <button
                    className="flex h-4 w-4 cursor-pointer items-center justify-center rounded-full border border-[var(--Rose-500)] bg-transparent p-0"
                    aria-label={`Remove ${item.name} from cart`}
                    onClick={() => {
                      removeCartItem(item);
                    }}
                  >
                    <img
                      src="./../../assets/images/icon-remove-item.svg"
                      alt=""
                    />
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 pt-4">
            <div className="flex items-center justify-between">
              <span className="">Order Total</span>
              <output className="text-2xl font-bold text-[var(--Rose-900)]">
                ${totalPrice.toFixed(2)}
              </output>
            </div>
            <div className="mt-6 flex items-center gap-2 rounded-lg bg-[var(--Rose-50)] px-5 py-4">
              <img
                alt=""
                src="./../../assets/images/icon-carbon-neutral.svg"
              ></img>
              <span className="text-sm">
                This is a{" "}
                <span className="font-semibold text-[var(--Rose-900)]">
                  carbon-neutral{" "}
                </span>
                delivery
              </span>
            </div>
            <button
              className="mt-6 w-full cursor-pointer rounded-full border-none bg-[var(--Red)] py-4 text-[var(--Rose-50)]"
              onClick={onConfirm}
            >
              Confirm Order
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Cart;
