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
          <p>Produtos saudáveis, de qualidade DU PARÁ.</p>
          <h2>Perfeitos para você e para o seu cliente!</h2>
        </div>

        <button onClick={() => window.location.href = "#about-us"}>
          Saiba mais
        </button>
      </main>
    </section>
  )
}