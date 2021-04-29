import React from 'react';

import s from "./styles.module.scss";

export function FirstSection() {
  return (
    <section className={s.firstSectionContainer}>
      <main>
        <div className={s.title}>
          <span></span>
          <div>
            <p>Gordura de Palma</p>
            <h3>DU PARÁ</h3>
          </div>
        </div>

        <div className={s.description}>
          <p>Lorem ipsum collum</p>
          <h2>dollum ipsum collum</h2>
        </div>

        <button>
          Saiba mais
        </button>
      </main>
    </section>
  )
}