import React from 'react';
import s from "./styles.module.scss";

export function MoreInfo() {
  return (
    <section className={s.moreInfoContainer}>
      <div className={s.moreInfo}>
        <h3>Lorem ipsum Dollum</h3>
        <p>
          A gordura de palma DU PARÁ é um produto natural, saudável
          livre de substâncias químicas e um alimento ZERO TRANS, uma
          vez que não passa pelo processo de hidrogenação artificial.
          Além disso, é importante ressaltar que a gordura de palma
          DU PARÁ contém os antioxidantes que estão<br/> presentes no fruto
          da palmeira oleaginosa Elaeis Guineensis.
        </p>
      </div>
    </section>
  )
}