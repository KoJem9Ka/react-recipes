import { API_URL } from './config'
import { TCategoriesFetch, TMealsByCategoryFetch, TMealByIdFetch, TMealsByNameFetch } from './Types'

const getCache = (key: string) => {
  const lastTime = localStorage.getItem( key + '_time' )
  const modern = lastTime && (+new Date() - +lastTime) / 1000 < 10 * 60
  const data = modern && localStorage.getItem( key )
  return data && JSON.parse( data )
}

const putCache = (key: string, data: any): void => {
  localStorage.setItem( key + '_time', String( +new Date() ) )
  localStorage.setItem( key, JSON.stringify( data ) )
}

// Lookup full meal details by id
export const mealDetailsById = async (mealId: string | number): Promise<TMealByIdFetch['meals'][0]> => {
  const cache = getCache( 'mealDetailsById' + mealId ) as TMealByIdFetch['meals'][0]
  if (cache) return cache
  const response = await fetch( `${API_URL}lookup.php?i=${mealId}` )
  const meals = await response.json() as TMealByIdFetch
  putCache( 'mealDetailsById' + mealId, meals.meals[0] )
  return meals.meals[0]
}

//List all meal categories
export const listAllMealCategories = async (): Promise<TCategoriesFetch['categories']> => {
  const cache = getCache( 'listAllMealCategories' ) as TCategoriesFetch['categories']
  if (cache) return cache
  const response = await fetch( `${API_URL}categories.php` )
  const categories = await response.json() as TCategoriesFetch
  putCache( 'listAllMealCategories', categories.categories )
  return categories.categories
}

//Filter by Category
export const filterByCategory = async (categoryName: string): Promise<TMealsByCategoryFetch['meals']> => {
  const cache = getCache( 'filterByCategory' + categoryName ) as TMealsByCategoryFetch['meals']
  if (cache) return cache
  const response = await fetch( `${API_URL}filter.php?c=${categoryName}` )
  const meals = await response.json() as TMealsByCategoryFetch
  putCache( 'filterByCategory' + categoryName, meals.meals )
  return meals.meals
}

//Search meal by name
//www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
export const searchMealByName = async (search: string): Promise<TMealsByNameFetch['meals']> => {
  const cache = getCache( 'searchMealByName' + search ) as TMealsByNameFetch['meals']
  if (cache) return cache
  const response = await fetch( `${API_URL}search.php?s=${search}` )
  const meals = await response.json() as TMealsByNameFetch
  putCache( 'searchMealByName' + search, meals.meals )
  return meals.meals
}
