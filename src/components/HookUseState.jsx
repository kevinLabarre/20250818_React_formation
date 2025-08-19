import { useState } from "react";

function HookUseState() {
  const [cpt, setCpt] = useState(0);

  const [cpt2, setCpt2] = useState(0);

  console.log("cpt", cpt);

  const increment = () => {
    setCpt((prevValue) => {
      console.log(prevValue);
      return prevValue + 1;
    });
  };

  const decrement = () => {
    setCpt((prevValue) => prevValue - 1);
  };

  const reset = () => {
    setCpt(0);
  };

  return (
    <>
      <h1>Le hook use state </h1>
      <p>{cpt}</p>
      <p>{cpt2}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default HookUseState;

// Lorsque l'état change via le setter de useState, React déclenche un re-rendu du composant
// React crée un Virtual DOM (une représentation légère du DOM réel)
// React compare ce nouveau Virtual DOM avec le précédent (diffing)
// React identifie uniquement les nœuds qui ont changé
// React met à jour seulement ces nœuds spécifiques dans le DOM réel, plutôt que de rafraîchir toute la page
