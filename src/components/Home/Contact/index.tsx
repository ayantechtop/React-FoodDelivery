import React, { useState } from 'react';
import { api } from '../../../services/api';

import s from "./styles.module.scss";

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  async function handleContactSubmit(data) {
    data.preventDefault();

    try {
      await api.post('/sendmail', {
        userName: name,
        userEmail: email,
        text: message,
      });
    } catch (error) {
      console.log(error);
    }    
  }

  return (
    <section className={s.contactContainer} id="contact">
      <div className={s.title}>
        <h2 data-content="Entre em contato">Contato</h2>
      </div>

      <p className={s.contactInfo}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus augue tortor, 
        vel commodo massa luctus feugiat. Pellentesque sed orci nulla. Nulla facilisi. Cras 
        viverra mauris orci, nec porttitor dolor finibus lobortis. Nulla facilisi. Phasellus 
        ut enim sit amet nulla posuere tincidunt. Aenean eget velit justo. Pellentesque vitae.
      </p>

      <form onSubmit={handleContactSubmit} className={s.formContainer}>
        {/* <input type="text" name="subject" placeholder="subject" onChange={e => setSubject(e.target.value)} /> */}
        <input type="text" name="name" placeholder="Nome" onChange={e => setName(e.target.value)} />
        <input type="text" name="email" placeholder="E-mail" onChange={e => setEmail(e.target.value)} />
        <textarea name="message" placeholder="Mensagem" onChange={e => setMessage(e.target.value)} />

        <button type="submit">Enviar</button>
      </form>
    </section>
  )
}