import DessertCard from "./DessertCard";

function DessertList({ desserts }) {
  return (
    <ul className="m-0 list-none p-0">
      {desserts.map((dessert, index) => (
        <li key={index}>
          <DessertCard dessert={dessert} />
        </li>
      ))}
    </ul>
  );
}

export default DessertList;
