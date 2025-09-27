import DessertCard from "./DessertCard";

function DessertList({ desserts }) {
  return (
    <ul className="mt-8 mb-0 grid list-none gap-6 p-0">
      {desserts.map((dessert, index) => (
        <li key={index}>
          <DessertCard dessert={dessert} />
        </li>
      ))}
    </ul>
  );
}

export default DessertList;
