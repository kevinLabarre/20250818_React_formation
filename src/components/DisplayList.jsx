function DisplayList() {
  const users = [
    { id: 1, name: "John", age: 30, city: "New York" },
    { id: 2, name: "Jane", age: 25, city: "Los Angeles" },
    { id: 3, name: "Bob", age: 40, city: "Chicago" },
  ];

  const legumes = ["carottes", "oignons", "poivrons"];

  return (
    <>
      <h1>Les listes</h1>

      {users.map((user) => (
        <ul key={user.id}>
          <li>Nom: {user.name}</li>
          <li>Age: {user.age}</li>
          <li>Ville: {user.city}</li>
        </ul>
      ))}

      <h2>Liste de légumes :</h2>
      <ul>
        {legumes.map((legume, index) => (
          <li key={index}>{legume}</li>
        ))}
      </ul>
    </>
  );
}

export default DisplayList;
