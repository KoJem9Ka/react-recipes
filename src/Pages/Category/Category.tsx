import React, { useEffect, useState } from 'react'
import styles from './Category.module.scss'
import { useParams } from 'react-router-dom'
import { filterByCategory } from '../../API/API'
import { TMealsByCategoryFetch } from '../../API/Types'
import Preloader from '../../Components/Preloader/Preloader'
import GoodCard from '../../Components/GoodCard/GoodCard'
import useStore from '../../Hooks/Store'

const Category: React.FC = () => {
  const { name: namee } = useParams()
  const [ meals, setMeals ] = useState<TMealsByCategoryFetch['meals']>( [] )
  const [ loading, setLoading ] = useState( true )
  const { setOpenedMeal } = useStore()

  useEffect( () => {
    setOpenedMeal!( { mealName: '', categoryName: '' } )
    filterByCategory( namee! )
      .then( data => {
        setLoading( false )
        setMeals( data )
      } )
  }, [ namee ] )

  return (
    <>
      {loading ? <Preloader/> :
        <div className={styles.Category}>
          {meals.map( meal => (
            <GoodCard
              key={meal.idMeal}
              img={meal.strMealThumb}
              link={`/meal/${meal.idMeal}`}
              title={meal.strMeal}
            />
          ) )}
        </div>
      }
    </>
  )
}

export default Category
