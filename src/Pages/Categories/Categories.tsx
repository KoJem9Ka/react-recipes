import React, { useEffect, useState } from 'react'
import { listAllMealCategories } from '../../API/API'
import useStore from '../../Hooks/Store'
import Preloader from '../../Components/Preloader/Preloader'
import styles from './Categories.module.scss'
import GoodCard from '../../Components/GoodCard/GoodCard'

const Categories: React.FC = () => {
  const { categories, setCategories } = useStore()
  const [ loading, setLoading ] = useState( true )

  useEffect( () => {
    setLoading( true )
    listAllMealCategories()
      .then( data => {
        setCategories!( data )
        setLoading( false )
      } )
  }, [] )

  return (
    <>
      {loading ? <Preloader/> :
        <div className={styles.Categories}>
          {categories.map( category => (
            <GoodCard
              key={category.idCategory}
              description={category.strCategoryDescription}
              img={category.strCategoryThumb}
              link={`/category/${category.strCategory}`}
              title={category.strCategory}
            />
          ) )}
        </div>
      }
    </>
  )
}

export default Categories
