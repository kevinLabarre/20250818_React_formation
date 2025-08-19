import { useEffect, useState } from "react";

export const HookUseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("UseEffect 1 déclenché");
    document.title = `Count: ${count}`;
  }, [count]);

  useEffect(() => {
    console.log("Composant chargé");

    return () => console.log("return du useEffect ici");
  }, []);

  return (
    <div>
      <h1>Le hook use-effect</h1>

      <ul>
        Le hook use-effect est utilisé :
        <li>Pour gérer des effets secondaires dans un composant </li>
        <li>
          Pour effectuer des opérations après le rendu initial du composant(
          <strong>Comme des appels à des apis</strong>, la manipulation du dom,
          la gestion d'abonnement ...)
        </li>
        <p>
          <strong>useEffect()</strong>est très souvent utilisé en conjonction
          avec useState
        </p>
        {count}
        <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      </ul>
    </div>
  );
};
