import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md'
import s from "./styles.module.scss";

export function FirstSection() {
  return (
    <section className={s.firstSectionContainer}>
      <main>
        <img src="/images/logo.svg" alt="DU PARÁ" />  

        <div onClick={() => window.location.href = "#about-us"}>
          <p>Conheça nosso produto</p>
          <MdKeyboardArrowDown />
        </div>
      </main>
    </section>
  )
}