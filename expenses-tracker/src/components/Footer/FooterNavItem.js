import React from "react";
import "../sass/component/footer.scss";

const FooterNavItem = (props) => {
  return (
    <li className="footer__nav--item">
          <a
            href={props.link}
            className="footer__nav--link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="footer__icon footer__icon--github">{props.name}</p>
          </a>
        </li>
  )
}

export default FooterNavItem;