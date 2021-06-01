import React from 'react';

import s from "./styles.module.scss";

export function FirstSection() {
  return (
    <section className={s.firstSectionContainer}>
      <main>
        <img src="/images/logo.svg" alt="DU PARÁ" />  

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