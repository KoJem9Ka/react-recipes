import React from 'react'
import styles from './Preloader.module.scss'

const Preloader: React.FC = () => (
  <div className={styles.wrapper}>
    <div className={styles['lds-roller']}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
)

export default Preloader
