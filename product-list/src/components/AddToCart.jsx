function AddToCart({ className }) {
  return (
    <button
      className={`flex items-center gap-2 rounded-full border-1 px-4 py-3 ${className}`}
    >
      <img alt="" src="./../assets/images/icon-add-to-cart.svg"></img>
      <span>Add to Cart</span>
    </button>
  );
}

export default AddToCart;
