import React, { useEffect, useState } from 'react'
import styles from './Meal.module.scss'
import { TMealFull } from '../../API/Types'
import Preloader from '../../Components/Preloader/Preloader'
import { useParams } from 'react-router-dom'
import { mealDetailsById } from '../../API/API'
import useStore from '../../Hooks/Store'


const Meal: React.FC = () => {
  const [ meal, setMeal ] = useState<TMealFull>()
  const [ loading, setLoading ] = useState( true )
  const [ error, setError ] = useState( false )
  const { setOpenedMeal } = useStore()
  const { id } = useParams()

  useEffect( () => {
    mealDetailsById( id! )
      .then( data => {
        if (data) {
          setLoading( false )
          setMeal( data )
          setOpenedMeal!( { mealName: data.strMeal, categoryName: data.strCategory } )
        }
        else setError( true )
      } )
  }, [ id ] )

  const ingredients = []
  if (meal) {
    let i = 1
    while (meal[`strIngredient${i}`] !== '')
      ingredients.push( meal[`strIngredient${++i}`] + (meal[`strMeasure${i - 1}`] ? ` (${meal[`strMeasure${i - 1}`]})` : '') )
  }

  if (error) return <h2>loading error...</h2>
  if (loading) return <Preloader/>
  return (
    <div className={styles.Meal}>
      <img
        alt=''
        height={700}
        src={meal?.strMealThumb}
        width={700}
      />
      <p>Название</p>
      <p>{meal?.strMeal}</p>
      <p>Категория</p>
      <p>{meal?.strCategory}</p>
      <p>Страна</p>
      <p>{meal?.strArea}</p>
      <p>Инструкции</p>
      <p>{meal?.strInstructions}</p>
      <p>Тэги</p>
      <p>{meal?.strTags}</p>
      <p>YouTube</p>
      <a href={meal?.strYoutube} rel='noreferrer' target='_blank'>YouTube link</a>
      <p>Ингридиенты</p>
      <p>{ingredients.join( ', ' )}</p>
    </div>
  )
}

export default Meal
