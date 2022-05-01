import React from 'react'
import { TCategory, TMealBase, TMealFull } from '../API/Types'

// ! Context //
export type TAppContext = TReducerState & {
  dispatch: (React.Dispatch<TReducerAction>) | null
  setCategories: ((categories: TCategory[]) => void) | null
  setOpenedMeal: ((payload: TReducerState['openedMeal']) => void) | null
}

// ! Reducer //
export type TReducerState = {
  categories: TCategory[]
  openedMeal: {
    mealName: TMealFull['strMeal']
    categoryName: TMealFull['strCategory']
  }
}

// eslint-disable-next-line no-shadow
export enum TAction {
  setCategories,
  setOpenedMeal
}

export type TReducerAction = {
  type: TAction
  payload: any
}
