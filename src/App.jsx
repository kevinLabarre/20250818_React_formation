import "./App.css";

function App() {
  const title = "<strong>Bienvenue sur notre application React !</strong>";
  const number = 1;

  const imgSrc = "/vite.svg";

  return (
    <>
      <h1>{title}</h1>
      <p>Nombre : {number}</p>
      <p>Nombre : {number + 1}</p>

      <img src={imgSrc} alt="Vite logo" />

      <p dangerouslySetInnerHTML={{ __html: title }}></p>
    </>
  );
}

export default App;
