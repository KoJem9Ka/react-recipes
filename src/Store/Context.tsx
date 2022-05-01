import React, { createContext, useReducer } from 'react'
import { TAction, TAppContext, TReducerState } from './Types'
import AppReducer from './Reducer'

const AppReducerInit: TReducerState = {
  categories: [],
  openedMeal: { mealName: '', categoryName: '' },
}

const AppContext = createContext<TAppContext>( {
  ...AppReducerInit,
  dispatch: null,
  setCategories: null,
  setOpenedMeal: null,
} )

export const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [ state, dispatch ] = useReducer( AppReducer, AppReducerInit )

  const value: TAppContext = {
    ...state,
    dispatch,
    setCategories: categories => dispatch( {
      type: TAction.setCategories,
      payload: categories,
    } ),
    setOpenedMeal: payload => dispatch( {
      type: TAction.setOpenedMeal,
      payload,
    } ),
  }

  return (
    <AppContext.Provider value={value}>
      <>
        {children}
      </>
    </AppContext.Provider>
  )
}

export default AppContext
