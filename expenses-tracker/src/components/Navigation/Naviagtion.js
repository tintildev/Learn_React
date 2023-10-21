import React from "react";
import "../sass/component/navigation.scss";
import NavItem from "./NavItem";


const Navigation = () => {
  return(
    <div className="navigation">
      <NavItem name={""} icon={"img/LogoNav.png"} link={"#"} />
      <NavItem name={"Home"} icon={"img/Home.png"} link={"test"} />
      <NavItem name={"Budgets"} icon={"img/Budgets.png"} link={"test"} />
      <NavItem name={"Expense"} icon={"img/Rechnung.png"} link={"test"} />
      <NavItem name={"Statistik"} icon={"img/Statistik.png"} link={"test"} />
    </div>
  )

}

export default Navigation;