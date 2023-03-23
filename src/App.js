import "./App.css";
import { useState, useEffect } from "react";
import { fetchData } from "./service";

function App() {
  const [products, setProducts] = useState([]);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    async function connectToCosmos() {
      // You can await here
      setProducts(await fetchData());
    }
    connectToCosmos();
  }, []);

  return (
    <div>
      {products &&
        products.length > 0 &&
        products.map((product) => (
          <div key={product.id}>
            <h2>{product.ProductName}</h2>
            <p>{product.description}</p>
            {/* add more fields as needed */}
          </div>
        ))}
    </div>
  );
}

export default App;
