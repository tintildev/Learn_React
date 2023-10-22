import React from "react";
import "../sass/component/navigation.scss";

const NavLink = (props) => {
  const theClickHanlder = (event) => {
    event.preventDefault();
    props.clickHanlder(props.link);
  }

  return (
    <div className="nav--item">
      <a href="#" className="nav--link" onClick={theClickHanlder}>
        
        <img src={props.icon} alt={props.name} className={'nav--img ' + props.nameOfClass}/>
        <p className="nav--name">{props.name}</p>
      </a>
    </div>
  );
};
export default NavLink;
