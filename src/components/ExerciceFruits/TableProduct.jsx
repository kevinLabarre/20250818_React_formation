function TableProduct({ products, afficherHorsStock, search }) {
  return (
    <>
      {products
        .filter(
          (product) =>
            (afficherHorsStock ? true : product.number > 0) &&
            product.name.toLowerCase().includes(search.toLowerCase())
        )
        .map((p) => (
          <ul>
            <li>{p.name}</li>
            <li>{p.number}</li>
            <li>{p.price}</li>
            <li>{p.category}</li>
          </ul>
        ))}
    </>
  );
}

export default TableProduct;
