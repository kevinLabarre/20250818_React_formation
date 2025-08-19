function TableProduct({ products, afficherHorsStock = true, search = "" }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nom</th>
            <th>Prix</th>
            <th>Categorie</th>
            <th>Quantité</th>
          </tr>
        </thead>
        <tbody>
          {products
            .filter(
              (product) =>
                (afficherHorsStock ? true : product.number > 0) &&
                product.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((p, idx) => (
              <tr key={p.id ? p.id : idx}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.price}</td>
                <td>{p.category}</td>
                <td>{p.number}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default TableProduct;
