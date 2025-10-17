function AddToCart({ className, quantity, onAdd, onRemove, ariaLabel }) {
  return quantity === 0 ? (
    <button
      className={`flex cursor-pointer items-center gap-2 rounded-full border-1 border-[var(--Rose-400)] bg-[var(--Rose-50)] px-5 py-3 font-medium hover:border-[var(--Red)] hover:text-[var(--Red)] focus:border-[var(--Red)] focus:text-[var(--Red)] md:min-w-[160px] ${className}`}
      onClick={onAdd}
      aria-label={`Add ${ariaLabel} to cart`}
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
        className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border-2 border-[var(--Rose-50)] bg-[var(--Red)] p-0 hover:bg-[var(--Rose-50)] focus:bg-[var(--Rose-50)] hover:[&>svg>path]:fill-[var(--Red)] focus:[&>svg>path]:fill-[var(--Red)]"
        aria-label={`Decrease quantity of ${ariaLabel}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="2"
          fill="none"
          viewBox="0 0 10 2"
          aria-hidden="true"
          focusable="false"
        >
          <path fill="hsl(20, 50%, 98%)" d="M0 .375h10v1.25H0V.375Z" />
        </svg>
      </button>
      <span className="font-medium">{quantity}</span>
      <button
        onClick={onAdd}
        className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border-2 border-[var(--Rose-50)] bg-[var(--Red)] p-0 hover:bg-[var(--Rose-50)] focus:bg-[var(--Rose-50)] hover:[&>svg>path]:fill-[var(--Red)] focus:[&>svg>path]:fill-[var(--Red)]"
        aria-label={`Increase quantity of ${ariaLabel}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          fill="none"
          viewBox="0 0 10 10"
          aria-hidden="true"
          focusable="false"
        >
          <path
            fill="hsl(20, 50%, 98%)"
            d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
          />
        </svg>
      </button>
    </div>
  );
}

export default AddToCart;
