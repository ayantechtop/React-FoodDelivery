import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import s from "./styles.module.scss";

export function Footer() {
  return (
    <footer className={s.footerContainer}>
      <main>
        <img src="/images/logo_footer.svg" alt="DU PARÁ" />  
        <section>
          <div className={s.socialSection}>
            <a
              href="//www.instagram.com"
              target="_blank"
              aria-label="Instagram"
            >
              <div className={s.socialIcon}>
                <FaInstagram />
              </div>
            </a>
            <a
              href="//www.facebook.com"
              target="_blank"
              aria-label="Facebook"
            >
              <div className={s.socialIcon}>
                <FaWhatsapp />
              </div>
            </a>            
          </div>
        
          <div className={s.footerInfo}>
            <div>
              DU PARA - Industria de Alimento LTDA 
              <br/>
              <br/>
              Av. Presidente Getulio Vargas, 3625 QUAD. B GALP 5 
              <br/>
              Ianetama - 68745-5000 Castanhal/Pa
              <br/>
            </div>
            <div className={s.bar}></div>
            <div>          
              E-mail: <a href="mailto:setorcomercial-dupara@hotmail.com">setorcomercial-dupara@hotmail.com</a>
              <br/>
              <a href="mailto:dupara@outlook.com">dupara@outlook.com</a>
              <br />
              <br />
              Du Pará escritório: <span></span><a href="tel:91 3353-7050">91-3353-7050</a> / <a href="tel:91 98423-5190">91-98423-5190</a>
              <br/>
              Comercial: <span></span><a href="tel:81 99837-7050">81-99837-7050</a>  / <a href="tel:71 99705-8423">71-99705-8423</a>
            </div>
          </div>
        </section>
      </main>
      <div className={s.footer}>
        <p>
          Todos os direitos reservados à DU PARÁ <span>-</span> Industria de Alimento LTDA
        </p>
      </div>
    </footer>
  )
}
