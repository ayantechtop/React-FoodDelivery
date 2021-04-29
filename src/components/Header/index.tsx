import React, { useEffect, useState } from 'react';
import Sidebar from './HeaderMobile';
import s from "./styles.module.scss";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <header className={s.headerContainer}>
      <Sidebar isOpen={isOpen} toggle={toggle} />

      <div className={s.mobileIconContainer}>
        <div className={isOpen ? s.mobileIconOpened : s.mobileIcon} onClick={toggle}>
          <input type="checkbox" checked={isOpen} readOnly />
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <ul className={s.menuItems}>
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
    </header>
  )
}