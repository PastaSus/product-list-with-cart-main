import DessertCard from "./DessertCard";

function DessertList({ desserts, cart, onAdd, onRemove }) {
  return (
    <ul className="mt-8 mb-0 grid list-none gap-6 p-0 md:grid-cols-2 xl:grid-cols-3">
      {desserts.map((dessert, index) => (
        <li key={index}>
          <DessertCard
            dessert={dessert}
            quantity={cart.find((item) => item.index === index)?.quantity || 0}
            onAdd={() => {
              onAdd(index);
            }}
            onRemove={() => {
              onRemove(index);
            }}
          />
        </li>
      ))}
    </ul>
  );
}

export default DessertList;
