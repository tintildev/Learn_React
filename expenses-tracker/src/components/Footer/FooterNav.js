import React from "react";
import "../sass/component/footer.scss";
import FooterNavItem from "./FooterNavItem";

const FooterNav = (props) => {

  return (
    <ul className="nav footer__nav">
      {props.items.map((item) => (
        <FooterNavItem
          name={item.name}
          link={item.link}
        />
      ))}
    </ul>
  )
}

export default FooterNav;