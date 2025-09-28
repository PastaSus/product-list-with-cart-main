import AddToCart from "./AddToCart";

function DessertCard({ dessert, quantity, onAdd, onRemove }) {
  return (
    <article className="desert-card">
      <div className="relative">
        <picture
          className={`${quantity > 0 ? "border-2 border-[var(--Red)]" : ""}`}
        >
          <source srcSet={dessert.image.desktop} media="(min-width: 1024px)" />
          <source srcSet={dessert.image.tablet} media="(min-width: 768px)" />
          <img
            src={dessert.image.mobile}
            alt={dessert.name}
            className="rounded-xl"
          />
        </picture>
        <AddToCart
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
          quantity={quantity}
          onAdd={onAdd}
          onRemove={onRemove}
        ></AddToCart>
      </div>
      <div className="mt-5 grid gap-1">
        <h3 className="text-base font-light text-[var(--Rose-500)]">
          {dessert.category}
        </h3>
        <p className="mt-0 font-medium">{dessert.name}</p>
        <p className="mt-0 font-medium text-[var(--Red)]">
          ${dessert.price.toFixed(2)}
        </p>
      </div>
    </article>
  );
}

export default DessertCard;
