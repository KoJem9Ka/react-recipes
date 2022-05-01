import React from 'react'
import styles from './GoodCard.module.scss'
import { useNavigate } from 'react-router-dom'

type TProps = {
  img: string
  title: string
  description?: string
  link?: string
}

const GoodCard: React.FC<TProps> = ({ img, title, description, link }) => {
  const navigate = useNavigate()

  const clickHandler = () => navigate( link! )

  return (
    <div className={styles.GoodCard} onClick={link && clickHandler || undefined}>
      <img
        alt=''
        height={200}
        src={img}
        width={320}
      />
      <h3>{title}</h3>
      {description ?
        <p>
          {description.slice( 0, description.indexOf( ' ', 60 ) )}
          ...
        </p> : null}
    </div>
  )
}

export default GoodCard
