import React, { useState } from 'react';
import { api } from '../../../services/api';
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';

import s from "./styles.module.scss";
import { SectionTitle } from '../../SectionTitle';

export function Contact() {
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  async function handleContactSubmit(data) {
    data.preventDefault();

    if (subject && email && message) {
      try {
        setErrorMessage('');
        setLoading(true);
        await api.post('/sendmail', {
          userEmail: email,
          subject: subject,
          text: message,
        });

        alert("E-mail enviado com sucesso!");
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
        setErrorMessage("Algum erro ocorreu. Tente novamente.");
      }
    } else {
      setLoading(false);
      setErrorMessage('Todos os campos devem ser preenchidos!');
    }
  }

  return (
    <section className={s.contactContainer} id="contact">
      <main>
        <div>
          <SectionTitle title="Contato" subtitle="" center />
          <p className={s.contactInfo}>
            Entre em contato conosco via email, responderemos em até 48 horas
          </p>
          <form onSubmit={handleContactSubmit} className={s.formContainer}>
            <input type="email" name="email" value={email} placeholder="E-mail" onChange={e => setEmail(e.target.value)} />
            <input type="text" name="subject" placeholder="Assunto" onChange={e => setSubject(e.target.value)} />
            <textarea name="message" placeholder="Descrição" onChange={e => setMessage(e.target.value)} />

            {errorMessage && <span>{errorMessage}</span>}

            <button type="submit" disabled={loading}>
              {loading ? <div className={s.loader}></div> : "Enviar"}
            </button>
          </form>
        </div>
        <img src="/images/brazil_map.svg" alt="Mapa DU PARÁ" />
      </main>



      {/* <div className={s.socialSection}>
        <a
          href="//www.instagram.com"
          target="_blank"
          aria-label="Instagram"
        >
          <div>
            <FaInstagram />
          </div>
        </a>
        <a
          href="//www.facebook.com"
          target="_blank"
          aria-label="Facebook"
        >
          <div>
            <FaFacebook />
          </div>
        </a>
        <a
          href="//www.youtube.com"
          target="_blank"
          aria-label="Youtube"
        >
          <div>
            <FaYoutube />
          </div>
        </a>

      </div> */}
    </section>
  )
}