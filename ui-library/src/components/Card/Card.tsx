import { type ReactNode } from 'react'

import styles from './Card.module.css'

export interface CardProps {
  title?: string
  children: ReactNode
}

export const Card = ({ title, children }: CardProps) => {
  return (
    <section className={styles.card}>
      {title && <h3 className={styles.title}>{title}</h3>}
      <div className={styles.content}>{children}</div>
    </section>
  )
}