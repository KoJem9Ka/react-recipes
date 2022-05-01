//Meal

export type TMealBase = {
  strMeal: string
  strMealThumb: string
  idMeal: string
}

export type TMealFull = TMealBase & {
  strCategory: string
  strArea: string
  strInstructions: string
  strTags: string
  strYoutube: string
  [key: `strIngredient${number}`]: string
  [key: `strMeasure${number}`]: string
}

//Category
export type TCategory = {
  idCategory: string
  strCategory: string
  strCategoryThumb: string
  strCategoryDescription: string
}

//Fetches
export type TMealByIdFetch = {
  meals: [ TMealFull ]
}

export type TMealsByCategoryFetch = {
  meals: TMealBase[]
}

export type TMealsByNameFetch = {
  meals: TMealFull[]
}

export type TCategoriesFetch = {
  categories: TCategory[]
}
