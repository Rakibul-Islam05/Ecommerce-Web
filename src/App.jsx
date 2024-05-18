import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Products from './Components/Products/Products'
import AOS from "aos";
import "aos/dist/aos.css"
import TopProduct from './Components/TopProducts/TopProduct'
import Banner from './Components/Banner/Banner'


function App() {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    })
    AOS.refresh();
  },[])

  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Products></Products>
      <TopProduct></TopProduct>
      <Banner></Banner>
    </div>
  )
}

export default App
