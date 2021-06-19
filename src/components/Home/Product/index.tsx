import React, { useState } from 'react';
import { SectionTitle } from '../../SectionTitle';
import s from "./styles.module.scss";

export function Product() {
  return (
    <section className={s.productContainer} id="product">
      <main>
        <SectionTitle title="Nosso produto" subtitle="Nosso produto" />
        <div className={s.textContainer}>
          <p>
            A gordura de palma DU PARÁ é um produto natural, saudável, 
            livre de substâncias químicas, sem alteração na composição 
            original e zero gordura trans, uma vez que não passa pelo 
            processo de hidrogenação artificial. Contém vitamina E e 
            outras substâncias antioxidantes presentes no fruto da 
            palmeira oleaginosa Elaeis Guineensis. 
            <br/><br/>
            
            O seu ponto de fusão, importante diferencial da <br/> gordura de 
            palma DU PARÁ com relação às demais gorduras existentes no 
            mercado, permite atender o amplo mercado da indústria de 
            alimentos. Assim, pode ser utilizada na fabricação de sorvetes, 
            biscoitos, bolos, bolachas, massa de pastel, pães, balas 
            mastigáveis e frituras. 
            <br/><br/>

            A gordura de palma DU PARÁ é comercializada em baldes de 3kg 
            e 14kg, e caixa com 20kg respeitando todas as normas legais 
            de produção, envasamento, estoque, armazenamento e transporte.
          </p>      
          <div>
            <img src="/images/nutritional_table.png" alt="Tabela nutricional DU PARÁ" />
            <img src="/images/products.png" alt="Produtos DU PARÁ" />
          </div>
        </div>
      </main>
    </section>
  )
}