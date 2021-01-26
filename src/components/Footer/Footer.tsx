import React from "react";

import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.links}>
          <span className={style.link}>About</span>
          <span className={style.link}>Jobs</span>
          <span className={style.link}>News</span>
        </div>

        <p>2021 - My movie theater by JeffVieira</p>
      </div>
    </footer>
  );
};

export default Footer;
