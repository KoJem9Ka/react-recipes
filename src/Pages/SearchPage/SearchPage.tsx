import React, { useEffect, useState } from 'react'
import styles from './SearchPage.module.scss'
import { useSearchParams } from 'react-router-dom'
import { searchMealByName } from '../../API/API'
import { TMealFull } from '../../API/Types'
import Preloader from '../../Components/Preloader/Preloader'
import GoodCard from '../../Components/GoodCard/GoodCard'

const SearchPage: React.FC = () => {
  const [ searchParams, setSearchParams ] = useSearchParams()
  const [ results, setResults ] = useState<TMealFull[]>( [] )
  const [ loading, setLoading ] = useState( true )
  const search = searchParams.get( 's' ) || '*'

  useEffect( () => {
    setLoading( true )
    searchMealByName( search )
      .then( data => {
        setLoading( false )
        setResults( data )
      } )
  }, [ search ] )

  return (
    <div className={styles.SearchPage}>
      {loading ? <Preloader/> :
        <>
          <h2>Результаты поиска:</h2>
          {results === null ? <h3>Ничего не найдено ...</h3> :
            <div className={styles.resultsGrid}>
              {results.map( meal => (
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
      }
    </div>
  )
}

export default SearchPage
