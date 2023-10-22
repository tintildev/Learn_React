import React from "react";
import "../sass/component/footer.scss";
import FooterNav from "./FooterNav";

const Footer = (props) => {
  const footerData = [
    { id: "l1", name: "Github", link: "https://github.com/mklestil" },
    {
      id: "l2",
      name: "Linkedin",
      link: "https://www.linkedin.com/in/martin-klestil/",
    },
    { id: "l3", name: "Dev.to", link: "https://dev.to/mklestil" },
    {
      id: "l4",
      name: "Xing",
      link: "https://www.xing.com/profile/Martin_Klestil2",
    },
  ];

  return (
    <footer className="footer">
      <img className="footer__logo" alt="Logo Footer" src="/img/mk-large.png" />
      <hr />
      <FooterNav items={footerData}></FooterNav>
      <hr />

      <p className="footer__copyright">
        &copy; Copyright 2023 by Martin Klestil.
      </p>
    </footer>
  );
};

export default Footer;
