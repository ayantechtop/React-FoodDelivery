import { ContactForm } from "../components/ContactForm";
import { FirstSection } from "../components/Home/FirstSection";

import s from "../styles/home.module.scss";

export default function Home() {
  return (
    <div className={s.container}>
      <FirstSection />
      <ContactForm />
    </div>
  );
}
