import React from "react";
import "../sass/component/navigation.scss";

const NavLink = (props) => {
  return (
    <div className="nav--item">
      <a href={props.link} className="nav--link">
        
        <img src={props.icon} alt={props.name} className="nav--img"/>
        <p className="nav--name">{props.name}</p>
      </a>
    </div>
  );
};
export default NavLink;
