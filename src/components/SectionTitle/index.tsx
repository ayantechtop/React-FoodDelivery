import React from 'react';

import s from "./styles.module.scss";

interface SectionTitleProps {
  title: string;
  subtitle: string;
  center?: boolean;
}

export function SectionTitle({ title, subtitle, center = false }: SectionTitleProps) {
  return (
    <div className={center ? s.titleCenter : s.title}>
      <h2 data-content={subtitle}>{title}</h2>
    </div>
  )
}