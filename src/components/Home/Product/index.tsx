import React, { useState } from 'react';
import { ProductCard } from "../../ProductCard";
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
          <h2 data-content="Nosso produto">Nosso produto</h2>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Fusce dapibus augue tortor, vel commodo massa luctus feugiat. 
            Pellentesque sed orci nulla. Nulla facilisi. Cras viverra 
            mauris orci, nec porttitor dolor finibus lobortis. Nulla facilisi. 
            Phasellus ut enim sit amet nulla posuere tincidunt. Aenean eget 
            velit justo. Pellentesque vitae scelerisque neque. Curabitur ut 
            ipsum a neque malesuada accumsan
          </p>
        </div>
      </main>
    </section>
  )
}