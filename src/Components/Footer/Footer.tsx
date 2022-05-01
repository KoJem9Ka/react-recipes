import React from 'react'
import styles from './Footer.module.scss'
import Container from '../../HOC/Container/Container'

const Footer: React.FC = () => (
  <Container gap='1rem' innerClasses={styles.footerInner} outerTag='footer'>
    <p>KoJem9Ka Recipes on React</p>
    <p>April 2022</p>
  </Container>
)

export default Footer
