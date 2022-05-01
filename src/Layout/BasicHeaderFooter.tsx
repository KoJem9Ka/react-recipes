import React from 'react'
import Container from '../HOC/Container/Container'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const BasicHeaderFooter: React.FC = () => (
  <>
    <Header/>
    <Container gap='2vmax' outerTag='main'>
      <Outlet/>
    </Container>
    <Footer/>
  </>
)

export default BasicHeaderFooter
