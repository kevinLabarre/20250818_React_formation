function JsxTheorie() {
  const title = "<strong>Bienvenue sur notre application React !</strong>";
  const number = 1;

  const imgSrc = "/vite.svg";

  const myStyle = { color: "red", fontSize: "2rem" };

  const user = {
    firstName: "John",
    lastName: "Doe",
  };

  // const user = undefined;

  const handleClick = () => {
    alert("Cliquez !. Nombre passé en paramètre: ");
  };

  const handleClickWithParam = (number) => {
    alert("Cliquez !. Nombre passé en paramètre: " + number);
  };

  return (
    <>
      <h1 style={{ color: "red", fontSize: "2rem" }}>{title}</h1>
      <p className="myClass" style={myStyle}>
        Nombre : {number}
      </p>
      <p>Nombre : {number + 1}</p>

      <img src={imgSrc} alt="Vite logo" />

      <p dangerouslySetInnerHTML={{ __html: title }}></p>

      {/* Affichage conditionnel */}

      {user && (
        <p>
          Prénom: {user.firstName}, nom: {user.lastName}
        </p>
      )}

      {user ? (
        <p>
          Prénom: {user.firstName}, nom: {user.lastName}
        </p>
      ) : (
        <p>Utilisateur non trouvé</p>
      )}

      <button onClick={handleClick}>Cliquez !</button>
      <button onClick={() => handleClickWithParam(number)}>Cliquez !</button>

      <button onClick={() => alert("cliquez !")}>Cliquez !</button>

      {/* Composants enfants */}

      <ComposantEnfant
        data="Donné passé par le composant parent !"
        color="blue"
        id="myId"
        className="myClass"
      >
        Propriété children se passe ICI
      </ComposantEnfant>
    </>
  );
}

export default JsxTheorie;

const ComposantEnfant = ({
  data = "Donné par défaut",
  children,
  color,
  ...props
}) => {
  return (
    <>
      <h1 style={{ color: color }} {...props}>
        Composant enfant :
      </h1>

      <p>{data}</p>
      <p>propriété children: {children}</p>
    </>
  );
};
