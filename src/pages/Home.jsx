import { useEffect, useState } from "react";
import axios from "axios";
import Product from "../components/Product"; 

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios("https://dummyjson.com/products")
      .then(({ data }) => setProducts(data.products))
      .catch((error) => console.error(error.message));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">All Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((prod) => (
          <Product key={prod.id} prod={prod} />
        ))}
      </div>
    </div>
  );
}

export default Home;
