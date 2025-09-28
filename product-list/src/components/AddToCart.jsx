function AddToCart({ className, quantity, onAdd, onRemove }) {
  return quantity === 0 ? (
    <button
      className={`flex cursor-pointer items-center gap-2 rounded-full border-1 border-[var(--Rose-400)] bg-[var(--Rose-50)] px-5 py-3 font-medium ${className}`}
      onClick={onAdd}
    >
      <img alt="" src="./../assets/images/icon-add-to-cart.svg"></img>
      <span>Add to Cart</span>
    </button>
  ) : (
    <div
      className={`flex min-w-[160px] items-center justify-between rounded-full bg-[var(--Red)] px-4 py-3 text-white ${className}`}
    >
      <button
        onClick={onRemove}
        className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border-2 border-[var(--Rose-50)] bg-[var(--Red)] p-0"
        aria-label="Decrease item"
      >
        <img
          src="./../../assets/images/icon-decrement-quantity.svg"
          alt=""
        ></img>
      </button>
      <span className="font-medium">{quantity}</span>
      <button
        onClick={onAdd}
        className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border-2 border-[var(--Rose-50)] bg-[var(--Red)] p-0"
        aria-label="Add item"
      >
        <img
          src="./../../assets/images/icon-increment-quantity.svg"
          alt=""
        ></img>
      </button>
    </div>
  );
}

export default AddToCart;
