import axios from "axios";

export const FormProduct = ({ setProducts }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    console.log(formData);

    const newProduct = {
      name: formData.get("name"),
      price: formData.get("price"),
      number: formData.get("number"),
      category: formData.get("category"),
    };

    axios
      .post("http://localhost:3001/products", newProduct)
      .then((resp) => {
        console.log(resp);
        setProducts((prev) => [...prev, resp.data]);
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="nom" name="name" />
        <input type="number" placeholder="prix" name="price" />
        <input type="text" placeholder="quantité" name="number" />
        <input type="text" placeholder="catégorie" name="category" />

        <button type="submit">Soumettre</button>
      </form>
    </>
  );
};
