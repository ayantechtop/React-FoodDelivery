import { ContactForm } from "../components/ContactForm";
import { Header } from "../components/Header";

import s from "../styles/home.module.scss";

export default function Home() {
  return (
    <div className={s.container}>
      <Header />
      <ContactForm />
    </div>
  );
}
