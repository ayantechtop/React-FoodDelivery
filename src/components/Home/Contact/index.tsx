import React, { useState } from 'react';
import { api } from '../../../services/api';
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';

import s from "./styles.module.scss";
import { SectionTitle } from '../../SectionTitle';

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  async function handleContactSubmit(data) {
    data.preventDefault();

    if (name && email && message) {
      try {
        setErrorMessage('');
        setLoading(true);
        await api.post('/sendmail', {
          userName: name,
          userEmail: email,
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
      {/* <div className={s.title}>
        <h2 data-content="Entre em contato">Contato</h2>
      </div> */}

      <SectionTitle title="Contato" subtitle="Entre em contato" center />

      <p className={s.contactInfo}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus augue tortor,
        vel commodo massa luctus feugiat. Pellentesque sed orci nulla. Nulla facilisi. Cras
        viverra mauris orci, nec porttitor dolor finibus lobortis. Nulla facilisi. Phasellus
        ut enim sit amet nulla posuere tincidunt. Aenean eget velit justo. Pellentesque vitae.
      </p>

      <form onSubmit={handleContactSubmit} className={s.formContainer}>
        <input type="text" name="name" placeholder="Nome" onChange={e => setName(e.target.value)} />
        <input type="email" name="email" value={email} placeholder="E-mail" onChange={e => setEmail(e.target.value)} />
        <textarea name="message" placeholder="Mensagem" onChange={e => setMessage(e.target.value)} />

        {errorMessage && <span>{errorMessage}</span>}

        <button type="submit" disabled={loading}>
          {loading ? <div className={s.loader}></div> : "Enviar"}
        </button>
      </form>

      <div className={s.socialSection}>
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

      </div>
    </section>
  )
}