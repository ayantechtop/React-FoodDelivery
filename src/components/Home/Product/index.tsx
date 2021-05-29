import React, { useState } from 'react';
import { ProductCard } from "../../ProductCard";
import { SectionTitle } from '../../SectionTitle';
import s from "./styles.module.scss";

export function Product() {
  const [columns] = useState([
    {
      imgUrl: "https://images.unsplash.com/photo-1592014876916-be97544df50c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      title: 'Lorem ipsum',
      smallDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      url: '#home',
      Description: (
        <p>
          <strong>
          Lorem ipsum dolor sit amet
          </strong>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Fusce dapibus augue tortor, vel commodo massa luctus feugiat.
        </p>
      ),
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1592014876894-139779163b5a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      title: 'Lorem ipsum dolor',
      smallDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      url: '#home',
      Description: (
        <p>
          <strong>
          Lorem ipsum dolor sit amet
          </strong>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Fusce dapibus augue tortor, vel commodo massa luctus feugiat.
        </p>
      ),
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1565459330362-508d6268a805?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      title: 'Lorem ipsum amet',
      smallDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      url: '#home',
      Description: (
        <p>
          <strong>Lorem ipsum dolor sit amet</strong>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Fusce dapibus augue tortor, vel commodo massa luctus feugiat.
        </p>
      ),
    },
  ]);
  return (
    <section className={s.productContainer} id="product">
      <main>
        <div className={s.title}>
          <SectionTitle title="Nosso produto" subtitle="Nosso produto" />
        </div>
        <div className={s.cardsContainer}>
          {columns.map(({ imgUrl, title, smallDescription, Description, url }) => (
            <ProductCard
              key={title}
              imgUrl={imgUrl}
              title={title}
              smallDescription={smallDescription}
              Description={Description}
              url={url}
            />
          ))}
        </div>

        <div className={s.moreInfo}>
          <h3>Lorem ipsum Dollum</h3>
          <p>
          A gordura de palma DU PARÁ é um produto natural, saudável 
          livre de substâncias químicas e um alimento ZERO TRANS, uma 
          vez que não passa pelo processo de hidrogenação artificial. 
          Além disso, é importante ressaltar que a gordura de palma 
          DU PARÁ contém os antioxidantes que estão presentes no fruto 
          da palmeira oleaginosa Elaeis Guineensis.
          </p>
        </div>
      </main>
    </section>
  )
}