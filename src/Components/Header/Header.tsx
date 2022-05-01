import React from 'react'
import { Link, useLocation, useMatch } from 'react-router-dom'
import Container from '../../HOC/Container/Container'
import styles from './Header.module.scss'
import MyNavLink from '../CustomNavLink/MyNavLink'
import useStore from '../../Hooks/Store'
import SearchMeal from '../SearchMeal/SearchMeal'

const Header: React.FC = () => {
  const llocation = useLocation()
  const categoryName = useMatch( '/category/:name' )?.params.name
  const mealId = useMatch( '/meal/:id' )?.params.id
  const { openedMeal } = useStore()

  const category = categoryName || mealId && openedMeal?.categoryName
  const meal = mealId && openedMeal?.mealName


  return (
    <Container gap='1rem' innerClasses={styles.headerInner} outerTag='header'>
      <Link className={styles.logo} to='/'>React Recipes</Link>
      <nav>
        <MyNavLink to='/'>Категории</MyNavLink>
        {category ?
          <MyNavLink to={`/category/${category}`}>{category}</MyNavLink> : null}
        {meal ?
          <MyNavLink to={`/meal/${mealId}`}>{meal}</MyNavLink> : null}
        <MyNavLink to='/about'>О нас</MyNavLink>
      </nav>
      <SearchMeal/>
    </Container>
  )
}

export default Header
