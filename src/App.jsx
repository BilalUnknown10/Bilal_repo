import { useState } from 'react'
import './App.css'
import HomePage from './Pages/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductPage from './Pages/ProductPage'
import BlogsAndArticle from './Pages/BlogsAndArticle'
import ContactUs from './Pages/ContactUs'

function App() {
 

  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/product' element={<ProductPage/>}/>
      <Route path='/blogs' element={<BlogsAndArticle/>}/>
      <Route path = '/contact' element={<ContactUs/>}/>
    </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
