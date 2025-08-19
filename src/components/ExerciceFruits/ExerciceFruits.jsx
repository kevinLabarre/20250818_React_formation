import { useState } from "react";
import Consigne from "./Consigne";
import TableProduct from "./TableProduct";

function ExerciceFruits() {
  const products = [
    { category: "Fruits", price: "$1", number: 0, name: "Banana" },
    { category: "Fruits", price: "$1", number: 2, name: "Mango" },
    { category: "Fruits", price: "$2", number: 0, name: "Pineapple" },
    { category: "Vegetables", price: "$2", number: 4, name: "Broccoli" },
    { category: "Vegetables", price: "$4", number: 0, name: "Carrot" },
    { category: "Vegetables", price: "$1", number: 6, name: "Zucchini" },
  ];

  const fruits = products.filter((p) => p.category === "Fruits");
  const legumes = products.filter((p) => p.category === "Vegetables");

  const [afficherHorsStock, setAfficherHorsStock] = useState(false);
  const [recherche, setRecherche] = useState("");

  const handleSearch = (e) => {
    setRecherche(e.target.value);
  };

  return (
    <>
      <Consigne />
      <br />
      <span>Afficher hors stock</span>
      <input
        type="checkbox"
        onChange={(e) => setAfficherHorsStock(e.target.checked)}
        checked={afficherHorsStock}
      />
      <br />
      <input type="text" onChange={handleSearch} value={recherche} />
      <h2>Liste de des fruits: </h2>
      <TableProduct
        products={fruits}
        afficherHorsStock={afficherHorsStock}
        search={recherche}
      />
      <h2>Liste de des legumes: </h2>
      <TableProduct
        products={legumes}
        afficherHorsStock={afficherHorsStock}
        search={recherche}
      />
    </>
  );
}

export default ExerciceFruits;
