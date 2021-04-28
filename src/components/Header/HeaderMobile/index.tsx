import React from "react";
import s from "./styles.module.scss";

interface IMobileHeader {
  isOpen: boolean;
  toggle(): void;
}

export function Sidebar({ isOpen = true, toggle }: IMobileHeader) {
  return (
    <aside onClick={toggle} className={isOpen ? s.container : s.containerClosed}>
      <div onClick={toggle} className={s.header}>       
        <h1>Logo</h1>
      </div>

      <div className={s.wrapper}>
        <ul onClick={toggle} className={s.wrapperMenu}>
          <li>
            <a href="/">Início</a>
          </li>
          <li>
            <a href="#about-us">Sobre nós</a>
          </li>
          <li>
            <a href="#product">Nosso produto</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;