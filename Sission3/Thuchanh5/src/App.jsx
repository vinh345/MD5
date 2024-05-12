import {   useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Children } from 'react'
import Parents from './components/increage/Parents'
import Parent from './components/onInputChange/Parent'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Parents/> */}
    <Parent />
    </>
  )
}

export default App
