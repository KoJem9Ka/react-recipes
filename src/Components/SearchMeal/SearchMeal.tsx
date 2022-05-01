import React, { useRef, useState } from 'react'
import styles from './SearchMeal.module.scss'
import { useMatch, useNavigate, useSearchParams } from 'react-router-dom'

const SearchMeal: React.FC = () => {
  // const [ searchParams, setSearchParams ] = useSearchParams()
  const [ value, setValue ] = useState( useSearchParams()[0].get( 's' ) || '' )
  const navigate = useNavigate()
  const match = useMatch( '/search' )
  const timerRef = useRef<any>()

  const doSearch = (val: string) => navigate( `/search?s=${val}`, { replace: !!match } )
  const inputHandler: React.ChangeEventHandler<HTMLInputElement> = evt => {
    const newValue = evt.currentTarget.value
    setValue( newValue )
    clearTimeout( timerRef.current )
    timerRef.current = setTimeout( () => {
      doSearch( newValue )
      clearTimeout( timerRef.current )
    }, 1000 )
  }
  const enterPressHandler: React.KeyboardEventHandler<HTMLInputElement> = e => (e.key === 'Enter' && doSearch( value ))
  const backFromSearch = () => {
    navigate( -1 )
    setValue( '' )
  }

  return (
    <div className={styles.SearchMeal}>
      {match ? <button onClick={backFromSearch}>&times;</button> : null}
      <input
        placeholder='Поиск блюда'
        type='search'
        value={value}
        onChange={inputHandler}
        onKeyDown={enterPressHandler}
      />
      <button onClick={() => doSearch( value )}>&#128269;</button>
    </div>
  )
}

export default SearchMeal
