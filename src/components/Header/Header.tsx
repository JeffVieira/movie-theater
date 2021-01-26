import React from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.scss";

import Logo from "components/Logo";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <nav className={style.nav}>
          <Link to="/">
            <Logo />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
