import React from "react";
import "../sass/component/navigation.scss";
import NavItem from "./NavItem";


const Navigation = (props) => {
  const changeViewHandler = (event) => {
    props.changeView(event);
  }

  return(
    <div className="navigation">
      <NavItem name={""} icon={"img/LogoNav.png"} link={0} nameOfClass={"LogoNav"} clickHanlder={changeViewHandler}/>
      <NavItem name={"Home"} icon={"img/Home.png"} link={0} clickHanlder={changeViewHandler}/>
      <NavItem name={"Budgets"} icon={"img/Budgets.png"} link={1} clickHanlder={changeViewHandler}/>
      <NavItem name={"Expense"} icon={"img/Rechnung.png"} link={2} clickHanlder={changeViewHandler}/>
      <NavItem name={"Statistik"} icon={"img/Statistik.png"} link={3} clickHanlder={changeViewHandler}/>
    </div>
  )

}

export default Navigation;