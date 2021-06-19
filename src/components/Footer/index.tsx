import React from 'react';
import s from "./styles.module.scss";

export function Footer() {
  return (
    <footer className={s.footerContainer}>
      <main>
        <img src="/images/logo_footer.svg" alt="DU PARÁ" />  

        <div className={s.footerInfo}>
          DU PARA - Industria de Alimento LTDA 
          <br/>
          <br/>
          Av. Presidente Getulio Vargas, 3625 QUAD. B GALP 5 
          <br/>
          Ianetama - 68745-5000 Castanhal/Pa
          <br/>
          <br/>
          Du Pará escritório: <span></span><a href="tel:+55 91 3353-7050">91-3353-7050</a> / <a href="tel:+55 91 98423-5190">91-98423-5190</a>
          <br/>
          Comercial: <span></span><a href="tel:+55 81 99837-7050">81-99837-7050</a>  / <a href="tel:+55 71 99705-8423">71-99705-8423</a>
        </div>
      </main>
      <div className={s.footer}>
        <p>
          Todos os direitos reservados à DU PARÁ <span>-</span> Industria de Alimento LTDA
        </p>
      </div>
    </footer>
  )
}