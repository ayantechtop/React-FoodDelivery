import React from 'react';
import { SectionTitle } from '../../SectionTitle';

import s from "./styles.module.scss";

export function AboutUs() {
  return (
    <section className={s.aboutUsContainer} id="about-us">
      <main>
        <SectionTitle title="Sobre nós" subtitle="Sobre nós" />

        <div className={s.textContainer}>
          <p>
          A Indústria de Alimento DU PARÁ iniciou suas atividades de
          envasamento da gordura de palma em abril de 2013 na 
          cidade de Paulista-PE. Entre suas prioridades sempre se 
          destacaram a qualidade do seu produto e o atendimento aos 
          seus clientes. Foi assim que a DU PARÁ cresceu, se deslocou 
          para o estado do Pará e, hoje, atende as indústrias de 
          alimentos de pequeno, médio e grande porte em quase todo 
          território nacional.
          <br/><br/>
          
          Com o compromisso de oferecer sempre o melhor produto para 
          seus clientes, a DU PARÁ está investindo em um refino de 
          óleo de palma mais moderno, que utilizará a melhor tecnologia 
          para essa finalidade. Ao mesmo tempo, a DU PARÁ se compromete 
          com o meio ambiente, uma vez que possui fazendas próprias que 
          seguem rigorosamente os critérios sociais e ambientais exigidos 
          pela legislação brasileira e pelos modernos critérios internacionais 
          de sustentabilidade.
          </p>      
          <div>
            <img src="/images/about-us1.png" alt="Palma DU PARÁ" />
            <img src="/images/about-us2.png" alt="Palma DU PARÁ" />
          </div>
        </div>
      </main>   
    </section>
  )
}