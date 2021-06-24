import React from 'react';
import s from "./styles.module.scss";

export function MoreInfo() {
  return (
    <section className={s.moreInfoContainer}>
        <h2>Por que usar a Gordura de Palma DU PARÁ?</h2>
        <div className={s.textContainer}>
          <p>
            As características da gordura de palma DU PARÁ tornarão 
            o seu produto mais saudável para o consumidor final. 
            <br/><br/>

            <b>Por que usar a gordura de palma DU PARÁ no sorvete?</b><br/> 
            Diferente da gordura vegetal hidrogenada, a gordura de 
            palma DU PARÁ possui um ponto de fusão que gera uma maior 
            resistência ao derretimento do sorvete sem perder em cremosidade. 
            <br/><br/>

            <b>Por que é excelente para frituras?</b><br/> 
            As propriedades da gordura de palma DU PARÁ são mantidas 
            em altas temperaturas, apresenta textura macia, não tem 
            odores que possam interferir no sabor dos alimentos, contém 
            conservantes naturais que aumentam a vida útil do produto, 
            tem maior rendimento que os demais óleos, não possui organismos 
            geneticamente modificados, garante maior crocância e menor absorção. 
            <br/><br/>

            <b>Por que usar a gordura de palma DU PARÁ nas massas?</b><br/>
            É mais saudável, não altera o sabor dos alimentos, favorece 
            o volume, a maciez dos pães e bolos, garantindo a crocância 
            e a estabilidade nos biscoitos, e melhorando a durabilidade 
            o produto.
          </p>      
          <div>
            <img src="/images/fries.png" alt="Fritas DU PARÁ" />
            <img src="/images/ice_cream.png" alt="Sorvete DU PARÁ" />
            <img src="/images/cookies.png" alt="Biscoitos DU PARÁ" />
          </div>
        </div>
    </section>
  )
}