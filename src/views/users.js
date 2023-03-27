import React from 'react';
import "../styles/users.scss";
import React, { useEffect, useState } from "react";
import React, { NavLink } from "react-router-dom";

const Users = () => {

  let init = [];
  var tre = localStorage.getItem("newtab");
  if (tre) {
    init = JSON.parse(tre);
    console.log("dededede");
  }
  const [users, setUsers] = useState(init);

  const New = () => {
    setUsers([]);
  }

  useEffect(()=> {
    if (!users.length)
    {
      fetch("https://randomuser.me/api/?results=10")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);
        setUsers(data.results);
        localStorage.setItem("users", JSON.stringify(data.results));
        // Création du nouveau tableau newtab pour la gestion
        let newTab = [];
        data.results.forEach(e => {
          console.log("Selem les gens")
          let miniTab = {};
          var lastname = e.name.last;
          var firstname = e.name.first;
          var phone = e.phone;
          var country = e.location.country;
          var city = e.location.city;
          var postcode = e.location.postcode;
          var username = e.login.username;
          var password = e.login.password;
          var picturelarge = e.picture.large;
          var picturethumbnail = e.picture.thumbnail;
          var nat = e.nat;
          var email = e.email;

          miniTab["lastname"] = lastname;
          miniTab["firstname"] = firstname;
          miniTab["phone"] = phone;
          miniTab["country"] = country;
          miniTab["city"] = city;
          miniTab["postcode"] = postcode;
          miniTab["username"] = username;
          miniTab["password"] = password;
          miniTab["picturelarge"] = picturelarge;
          miniTab["picturethumbnail"] = picturethumbnail;
          miniTab["nat"] = nat;
          miniTab["email"] = email;

          //console.log(miniTab);
          newTab.push(miniTab);
        });
        console.log(newTab);
        localStorage.setItem("newtab", JSON.stringify(newTab));
        setUsers(newTab);
      })
    } else {
      setUsers(JSON.parse(localStorage.getItem("newtab")))
    }
  }, [users]);

  return (
    <nav className="users">
      <h1>Liste des utilisateurs</h1>
      <input
        type="submit"
        name="new"
        id="new"
        value="Nouvelle liste"
        onClick={New} />
      <div className="grid">
      { users.map((e, i) => (
        <div className="user" id={i} key={i}>
          <img src={e.picturethumbnail} /> <br />
          <span>{e.name} {e.firstname} {e.lastname}</span> <br />
          <span>Nationalité : {e.nat}</span> <br />
          <NavLink to={e.email}>{e.email}</NavLink> <br />
          <NavLink to={"/utilisateurs/"+i} >Detail</NavLink> <br />
          <NavLink to={"/utilisateurs/editer/"+i} >Gestion</NavLink>
        </div>
      )) }
      </div>
    </nav>
  )
}

export default Users;