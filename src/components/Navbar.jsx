import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <section>
      <nav>
        <Link to="">Accueil </Link>
        <Link to="/use-state">Hook use-state </Link>
        <Link to="/formulaire">Formulaire </Link>
        <Link to="/liste">Les listes </Link>
        <Link to="/exercice-fruits">Exercice-fruits </Link>
        <Link to="/flux-de-donnees">flux </Link>
      </nav>
    </section>
  );
};
