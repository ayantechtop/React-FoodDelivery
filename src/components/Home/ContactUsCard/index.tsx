import react from 'react';
import s from "./styles.module.scss";

export function ContactUsCard() {
  return (
    <section className={s.contactUsCardContainer}>
      <main>
        <div>
          <img src="/images/leaf_icon.svg" alt="Entre em contato" />
          <p>
            Produto natural, saudável, livre de substâncias químicas 
            e zero gordura trans!
          </p>
        </div>
        <button onClick={() => window.location.href = "#contact"}>
          Entre em contato
        </button>
      </main>
    </section>
  )
}