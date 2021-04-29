import Head  from "next/head";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { AboutUs } from "../components/Home/AboutUs";
import { Contact } from "../components/Home/Contact";
import { FirstSection } from "../components/Home/FirstSection";
import { Product } from "../components/Home/Product";

import s from "../styles/home.module.scss";

export default function Home() {
  return (
    <div className={s.container}>
      <Head>
        <title>Gordura de Palma Du Pará</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <FirstSection />
      <AboutUs />
      <Product />   
      <Contact />   
      <Footer />
    </div>
  );
}
