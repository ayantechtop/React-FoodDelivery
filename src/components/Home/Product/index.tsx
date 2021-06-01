import React, { useState } from 'react';
import { ProductCard } from "../../ProductCard";
import { SectionTitle } from '../../SectionTitle';
import s from "./styles.module.scss";

export function Product() {
  const [columns] = useState([
    {
      imgUrl: "/images/product1.png",
      title: '',
      smallDescription: '',
      url: '#home',
      Description: (
        <p>
          {/* <strong>
          Lorem ipsum dolor sit amet
          </strong>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Fusce dapibus augue tortor, vel commodo massa luctus feugiat. */}
        </p>
      ),
    },
    {
      imgUrl: "/images/product2.png",
      title: '',
      smallDescription: '',
      url: '#home',
      Description: (
        <p>
          {/* <strong>
          Lorem ipsum dolor sit amet
          </strong>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Fusce dapibus augue tortor, vel commodo massa luctus feugiat. */}
        </p>
      ),
    },
    {
      imgUrl: "/images/product3.png",
      title: '',
      smallDescription: '',
      url: '#home',
      Description: (
        <p>
          {/* <strong>Lorem ipsum dolor sit amet</strong>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Fusce dapibus augue tortor, vel commodo massa luctus feugiat. */}
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
      </main>
    </section>
  )
}