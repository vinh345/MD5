import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Product from './pages/Product'
import Detail from './pages/Detail'
import ProductBox from './pages/ProductBox'
import Error404 from './pages/Error404'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/product' element={<ProductBox></ProductBox>}>
          <Route index element={<Product></Product>}></Route>
          <Route path='detail/:id' element={<Detail></Detail>}></Route>
        </Route>
        <Route path='*' element={<Error404></Error404>}></Route>
      </Routes>
    </>
  )
}

export default App
