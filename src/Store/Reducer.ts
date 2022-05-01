import { TAction, TReducerAction, TReducerState } from './Types'
import { TCategory, TMealBase, TMealFull } from '../API/Types'

const AppReducer = (state: TReducerState, action: TReducerAction): TReducerState => {
  switch ( action.type ) {
  case TAction.setCategories:
    return { ...state, categories: action.payload as TCategory[] }
  case TAction.setOpenedMeal:
    return {
      ...state, openedMeal: action.payload as TReducerState['openedMeal'],
    }
  default:
    return state
  }
}

export default AppReducer
