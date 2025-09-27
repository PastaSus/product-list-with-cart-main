import AddToCart from "./AddToCart";

function DessertCard({ dessert }) {
  return (
    <article className="desert-card">
      <div className="relative">
        <img src={dessert.image.mobile} alt={dessert.name} />
        <AddToCart className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"></AddToCart>
      </div>
      <div>
        <h3>{dessert.category}</h3>
        <p>{dessert.name}</p>
        <p>${dessert.price}</p>
      </div>
    </article>
  );
}

export default DessertCard;
