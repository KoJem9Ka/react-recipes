import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Categories from './Pages/Categories/Categories'
import './STYLES/App.scss'
import BasicHeaderFooter from './Layout/BasicHeaderFooter'
import NotFoundPage from './Pages/NotFoundPage'
import AboutPage from './Pages/AboutPage'
import Category from './Pages/Category/Category'
import Meal from './Pages/Meal/Meal'
import SearchPage from './Pages/SearchPage/SearchPage'

//TODO: Поиск на главной

function App() {
  return (
    <>
      <Routes>
        <Route element={<BasicHeaderFooter/>} path='/'>
          <Route element={<Categories/>} index/>
          <Route element={<Category/>} path='category/:name'/>
          <Route element={<Meal/>} path='meal/:id'/>
          <Route element={<SearchPage/>} path='search'/>
          <Route element={<AboutPage/>} path='about'/>
          <Route element={<NotFoundPage/>} path='*'/>
        </Route>
      </Routes>
    </>
  )
}

export default App
