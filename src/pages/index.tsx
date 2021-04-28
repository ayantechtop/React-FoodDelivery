import { AboutUs } from "../components/Home/AboutUs";
import { Contact } from "../components/Home/Contact";
import { FirstSection } from "../components/Home/FirstSection";

import s from "../styles/home.module.scss";

export default function Home() {
  return (
    <div className={s.container}>
      <FirstSection />
      <AboutUs />
      <Contact />      
    </div>
  );
}
