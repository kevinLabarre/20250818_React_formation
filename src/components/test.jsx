function ComposantParent() {
  return (
    <>
      <ComposantEnfant />
      <ComposantEnfantAvecParam donnée="Donnee passée par le parent" />
    </>
  );
}

function ComposantEnfant() {
  return (
    <>
      <p>Je suis le composant enfant !</p>
    </>
  );
}

function ComposantEnfantAvecParam({ donnée }) {
  return (
    <>
      <p>En dessous la donnée passée par le parent: </p>
      <p>{donnée}</p>
    </>
  );
}
