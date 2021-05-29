import React from 'react';
import { SectionTitle } from '../../SectionTitle';

import s from "./styles.module.scss";

export function AboutUs() {
  return (
    <section className={s.aboutUsContainer} id="about-us">
      <main>
        <SectionTitle title="Sobre nós" subtitle="Sobre nós" />

        <p>
        A Indústria de Alimento DU PARÁ iniciou suas atividades 
        de envasamento da gordura de palma em abril de 2013 na 
        cidade de Paulista-PE. Entre suas prioridades sempre se 
        destacaram a qualidade do seu produto e o atendimento 
        aos seus clientes. Foi assim que a DU PARÁ cresceu e, 
        para atender as indústrias de alimentos de pequeno, médio 
        e grande porte em quase todo território nacional, atualmente 
        está localizada no Pará, estado brasileiro que produz quase 
        toda produção de óleo de palma do país. 
        <br/><br/>
        
        O compromisso da DU PARÁ é oferecer sempre o melhor produto 
        para o seu cliente. Por esse motivo, estamos investindo em 
        um refino de óleo de palma mais moderno, que utilizará a melhor 
        tecnologia para essa finalidade. Dessa forma, o ponto de fusão 
        da nossa gordura de palma DU PARÁ será diferenciado das demais 
        gorduras existentes no mercado.
        </p>      
      </main>   
    </section>
  )
}