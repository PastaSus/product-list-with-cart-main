function Cart({ Items }) {
  return (
    <div className="mt-6 rounded-xl px-6 py-8 text-center shadow-md">
      <h2 className="m-0 text-start text-[var(--Red)]">Your Cart ({0})</h2>
      <div className="mt-10 grid justify-items-center">
        <img
          src="./../../assets/images/illustration-empty-cart.svg"
          alt="A Cake and one slice of it"
        />
        <p className="text-sm font-medium text-[var(--Rose-500)]">
          Your added items will appear here
        </p>
      </div>
    </div>
  );
}

export default Cart;
