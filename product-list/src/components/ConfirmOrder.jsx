function ConfirmOrder({}) {
  return (
    <div
      className="bg-opacity-50 absolute inset-0 z-50 flex items-center justify-center bg-black/60"
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-confirmed-heading"
    >
      <article className="absolute top-1/7 bottom-0 h-[100vh] w-full overflow-y-auto rounded-t-xl bg-white p-7">
        <header className="mb-6">
          <img
            src="./../../assets/images/icon-order-confirmed.svg"
            alt=""
          ></img>
          <h2
            className="mt-6 max-w-75 text-5xl text-[var(--Rose-900)]"
            id="order-confirmed-heading"
          >
            Order Confirmed
          </h2>
          <p className="mt-2 text-lg text-[var(--Rose-500)]">
            We hope you enjoy your food!
          </p>
        </header>

        <div className="mb-6 rounded-lg bg-[var(--Rose-50)] p-4">
          <ul
            className="m-0 list-none space-y-4 p-0"
            aria-label="Order items"
          ></ul>

          <div className="mt-6 flex items-center justify-between border-t pt-4">
            <span>Order Total</span>
            <output className="text-2xl font-bold"></output>
          </div>
        </div>

        <button
          className="mt-6 w-full cursor-pointer rounded-full border-none bg-[var(--Red)] py-4 text-[var(--Rose-50)]"
          // onClick={""}
        >
          Start New Order
        </button>
      </article>
    </div>
  );
}

export default ConfirmOrder;
