import React from 'react';
import s from "./styles.module.scss";

export function Footer() {
  return (
    <footer className={s.footerContainer}>
      <main>
        <img src="/images/logo_dark.svg" alt="DU PARÁ" />  

        <p className={s.footerInfo}>
          DU PARA - Industria de Alimento LTDA 
          <br/>
          <br/>
          Av. Presidente Getulio Vargas, 3625 QUAD. B GALP 5 
          <br/>
          Ianetama - 68745-5000 Castanhal/Pa
        </p>
      </main>
      <div className={s.footer}>
        <p>
          Todos os direitos reservados à DU PARÁ <span>-</span> Industria de Alimento LTDA
        </p>
      </div>
    </footer>
  )
}