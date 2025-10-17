function ConfirmOrder({ items, totalPrice, onReset }) {
  return (
    // absolute top-1/7 bottom-0 z-3 min-h-0 w-full overflow-y-scroll rounded-t-xl bg-white px-6 py-8
    <div
      className="absolute top-[17%] left-1/2 z-50 w-[90%] max-w-md -translate-x-1/2 rounded-xl bg-white px-6 py-8 shadow-lg"
      id="confirm-order-modal"
      tabIndex="-1"
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-confirmed-heading"
    >
      <header className="mb-6">
        <img src="./../../assets/images/icon-order-confirmed.svg" alt=""></img>
        <h2
          className="mt-6 max-w-75 text-5xl text-[var(--Rose-900)]"
          id="order-confirmed-heading"
        >
          Order Confirmed
        </h2>
        <p className="mt-3 text-lg text-[var(--Rose-500)]">
          We hope you enjoy your food!
        </p>
      </header>

      <div className="mt-8 rounded-xl bg-[var(--Rose-50)] px-6 pt-3 pb-6">
        <ul className="m-0 list-none p-0" aria-label="Order items">
          {items.map((item) => (
            <li
              key={item.index}
              className="flex items-center justify-between border-b border-[var(--Rose-100)] py-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image.thumbnail} // assuming JSON has thumbnail
                  alt={item.name}
                  className="h-12 w-12 rounded-sm"
                />
                <div className="grid gap-2">
                  <h3 className="mt-0 text-base font-medium text-[var(--Rose-900)]">
                    {item.name.length > 20
                      ? item.name.slice(0, 20) + "..."
                      : item.name}
                  </h3>
                  <span className="flex items-center gap-3 text-sm text-[var(--Rose-500)]">
                    <span className="font-semibold text-[var(--Red)]">
                      {item.quantity}x
                    </span>{" "}
                    <span className="">@ ${item.price.toFixed(2)}</span>
                  </span>
                </div>
              </div>
              <span className="font-semibold text-[var(--Rose-900)]">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center justify-between pt-4">
          <span className="text-[var(--Rose-900)]">Order Total</span>
          <output className="text-2xl font-bold text-[var(--Rose-900)]">
            ${totalPrice.toFixed(2)}
          </output>
        </div>
      </div>

      <button
        className="mt-8 w-full cursor-pointer rounded-full border-none bg-[var(--Red)] py-4 text-[var(--Rose-50)]"
        onClick={onReset}
      >
        Start New Order
      </button>
    </div>
    // </div>
  );
}

export default ConfirmOrder;
