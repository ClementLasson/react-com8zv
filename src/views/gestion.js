import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "../styles/gestion.scss";

const Gestion = () => {
  const user_id = useParams().user_id;
  let users = localStorage.getItem('newtab');
  if (users) users = JSON.parse(users);
  let userd = users[user_id];
  let navigate = useNavigate();

  const Enregistrer = (e) => {
    e.preventDefault();
    // Sélection de tous les éléments du tableau
    var form = document.querySelector("form");
    var elements = form.elements;
    var tab = Array.from(elements);
    // Suppression du dernier élément
    tab.pop();
    tab.forEach((e, i) => {
      var name = e.getAttribute("name");
      // Enregistrement des nouvelles valeurs
      userd[name] = e.value;

    })
    // Enregistrement des nouvelles valeurs dans le tableau
    localStorage.setItem("newtab", JSON.stringify(users));
    // Redirection vers la liste des utilisateurs
    navigate("/")
  }


  return (
    <nav className="gestion">
      <h1>Gestion des utilisateurs</h1>
      <form id="mustafakinus" name="mustafakinus">
        <input
          name="lastname"
          id="lastname"
          placeholder="Nom de famille"
          defaultValue={userd.lastname}
          required /> <br/>
        <input
          name="firstname"
          id="firstname"
          placeholder="Prénom"
          defaultValue={userd.firstname}
          required /> <br />
        <input
          type="tel"
          name="tel"
          id="tel"
          placeholder="Numéro de téléphone"
          defaultValue={userd.phone}
          required /> <br />
        <input
          name="country"
          id="country"
          placeholder="Pays"
          defaultValue={userd.country}
          required /> <br />
        <input
          name="city"
          id="city"
          placeholder="Ville"
          defaultValue={userd.city}
          required /> <br />
        <input
          name="postcode"
          id="postcode"
          placeholder="Code postal"
          defaultValue={userd.postcode}
          required /> <br />
        <input
          name="username"
          id="username"
          placeholder="Nom d'utilisateur"
          defaultValue={userd.username}
          required /> <br />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Mot de passe"
          defaultValue={userd.password}
          required /> <br />
        <input
          name="nat"
          id="nat"
          placeholder="Nationalité"
          defaultValue={userd.nat}
          required /> <br />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
          defaultValue={userd.email}
          required /> <br />
        <input
          type="submit"
          name="envoyer"
          id="envoyer"
          value="Envoyer"
          onClick={Enregistrer} /> <br />
      </form>
    </nav>
  )
}

export default Gestion;