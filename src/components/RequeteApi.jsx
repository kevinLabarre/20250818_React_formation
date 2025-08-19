import axios from "axios";
import { useEffect, useState } from "react";
import TableProduct from "./ExerciceFruits/TableProduct";
import { FormProduct } from "./FormProduct";

export const RequeteApi = () => {
  const endpoint = "http://localhost:3001/products";

  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = () => {
    axios
      .get(endpoint)
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((e) => console.log(e))
      .finally(() => console.log("requete terminé"));
  };

  return (
    <>
      <h1>Requete API</h1>
      <a href={endpoint}>endpoint: {endpoint}</a>

      <TableProduct products={products} />
      <FormProduct setProducts={setProducts} />
    </>
  );
};
