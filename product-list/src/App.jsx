import MainHeading from "./components/MainHeading";
import DessertList from "./components/DessertList";
import Cart from "./components/Cart";

import desserts from "./assets/data.json";

function App() {
  return (
    <main>
      <MainHeading></MainHeading>
      <DessertList desserts={desserts}></DessertList>
      <Cart></Cart>
    </main>
  );
}

export default App;
