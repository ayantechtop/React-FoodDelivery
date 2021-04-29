import React from 'react';
import s from "./styles.module.scss";

export function Footer() {
  return (
    <footer className={s.footerContainer}>
      <main>
        <div className={s.title}>
          <span></span>
          <div>
            <p>Gordura de Palma</p>
            <h3>DU PARÁ</h3>
          </div>
        </div>
        <p className={s.footerInfo}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Fusce dapibus augue tortor, vel commodo massa luctus feugiat.
        </p>
      </main>
      <div className={s.footer}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Fusce dapibus augue tortor, vel commodo massa luctus feugiat.
      </div>
    </footer>
  )
}