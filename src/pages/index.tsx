import { useState } from "react";
import { api } from "../services/api";

export default function Home() {
  const [subject, setSubject] = useState('');
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
        subject
      });
    } catch (error) {
      console.log(error);
    }    
  }

  return (
   <form action="" onSubmit={handleContactSubmit}>
     <input type="text" name="subject" placeholder="subject" onChange={e => setSubject(e.target.value)} />
     <input type="text" name="name" placeholder="name" onChange={e => setName(e.target.value)} />
     <input type="text" name="email" placeholder="email" onChange={e => setEmail(e.target.value)} />
     <input type="text" name="message" placeholder="message" onChange={e => setMessage(e.target.value)} />

    <button type="submit">Submit</button>

   </form>
  )
}
