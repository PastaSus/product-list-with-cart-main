function AddToCart({ className }) {
  return (
    <button
      className={`flex cursor-pointer items-center gap-2 rounded-full border-1 border-[var(--Rose-400)] bg-[var(--Rose-50)] px-5 py-3 font-medium ${className}`}
    >
      <img alt="" src="./../assets/images/icon-add-to-cart.svg"></img>
      <span>Add to Cart</span>
    </button>
  );
}

export default AddToCart;
