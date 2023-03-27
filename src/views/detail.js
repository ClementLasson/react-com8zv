import React from 'react';
import { useParams } from 'react-router-dom';
import React, { NavLink } from "react-router-dom";
import "../styles/detail.scss";


const Detail = () => {
  const user_id = useParams().user_id;
  let users = localStorage.getItem('users');
  if (users) users = JSON.parse(users);
  console.log(users)
  let userd = users[user_id]
  console.log(userd)

  return (
    <nav className="detail">
      <h1>Détail d'un utilisateur</h1>
      <img src={userd.picture.large} /> <br />
      <span>{userd.name.title} {userd.name.first} {userd.name.last}</span> <br />
      <span>Genre : {userd.gender}</span> <br />
      <span>Téléphone : {userd.phone}</span> <br />
      <span>Pays : {userd.location.country}</span> <br />
      <span>Ville : {userd.location.city}</span> <br />
      <span>Code postal : {userd.location.postcode}</span> <br />
      <span>Nom d'utilisateur : {userd.login.username}</span> <br />
      <span>Mot de passe : {userd.login.password}</span> <br />
      <span>Nationalité : {userd.nat}</span> <br />
      <NavLink to={userd.email}>{userd.email}</NavLink> <br />
      <NavLink to={"/utilisateurs/editer/"+user_id} >Modifier l'utilisateur</NavLink>
    </nav>
  )
}

export default Detail;