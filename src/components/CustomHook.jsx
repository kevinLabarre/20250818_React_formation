import { useIncrement } from "../hook/useIncrement";
import { useToggle } from "../hook/useToggle";

export const CustomHook = () => {
  const [checked, toggle] = useToggle(true);

  const { count, increment, decrement } = useIncrement({ min: 0 });

  return (
    <>
      <h1>Les hooks personnalisés</h1>
      <a href="https://usehooks.com/" className="underline">
        Plein de hooks personnalisé ici !!
      </a>

      <h2>Cas de figure n°1</h2>
      <p>
        Dans un app react, on peut souvent avoir besoin de faire varier une
        valeur entre vrai et faux (par exemple pour afficher / masquer un
        élément). Pour faire cela, on peut utiliser un hook personnalisé
      </p>
      {/* Exemple ci-dessous:  */}
      <input type="checkbox" checked={checked} onChange={toggle} />

      {checked && <div>Div affichée / masquée</div>}
      {/* _________________________ */}

      <h2>Cas de figure n°2</h2>
      <p>
        Je veux utiliser un hook personnalisé pour incrémenter / décrémenter une
        valeur
      </p>
      {/* Exemple ci-dessous:  */}
      <p>Compteur: {count} </p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
};
