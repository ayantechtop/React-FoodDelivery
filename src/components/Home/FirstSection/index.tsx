import React from 'react';
import { Header } from '../../Header';

import s from "./styles.module.scss";

export function FirstSection() {
  return (
    <section className={s.firstSectionContainer}>
      <Header />
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
          <h1>dollum ipsum collum</h1>
        </div>

        <button>
          
        </button>
      </main>
    </section>
  )
}