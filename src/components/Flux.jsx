import { useState } from "react";

export const Flux = () => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <h1>Flux de données</h1>

      <h2>De parent à enfant</h2>
      <p>
        Pour faire passer des données d'un composant parent vers le composant
        enfant, nous devons utiliser les 'props'. Exemple:
      </p>

      <ComposantEnfant data="Donnee passée par le parent" />

      <h2>De enfant vers parent</h2>
      <p>
        Il est cournat d'utiliser des fonctions de rappel (callback functions)
        passées en tant que props du parent vers l'enfant. Ces fonctions sont
        ensuite appelées dans le composant enfant pour transmettre des données
        au parent
      </p>
      {checked ? <p>Case cochée</p> : <p>Case non cochée</p>}

      <CheckBoxEnfant checked={checked} onCheck={setChecked} />
    </>
  );
};

function ComposantEnfant({ data }) {
  return <p>{data}</p>;
}

const CheckBoxEnfant = ({ checked, onCheck }) => {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={(e) => onCheck(e.target.checked)}
    />
  );
};
