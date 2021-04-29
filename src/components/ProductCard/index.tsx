import React from 'react';
import s from "./styles.module.scss";

interface ColumnProps {
  imgUrl: string;
  title: string;
  Description: JSX.Element;
  smallDescription: string;
  url: string;
}

export function ProductCard({
  imgUrl,
  title,
  Description,
  smallDescription,
  url,
}: ColumnProps) {
  return (
    <div className={s.productCardContainer}>
      <img src={imgUrl} alt={title} />
      <div>
        <div className={s.hideOnHover}>
          <h2>{title}</h2>
          <p>{smallDescription}</p>
        </div>
        <div className={s.showOnHover}>
          {Description}
          {/* <a href={url}>Saiba mais</a> */}
        </div>
      </div>
    </div>
  );
};