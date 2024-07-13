import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/header'
import { Hero } from './components/hero'
import { Section } from './components/section'
import { Section2 } from './components/section2'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-[100%] h-auto'>
    <Header/>
    <Hero/>
    <Section/>
    <Section2/>

    </div> 
    
  )
}

export default App
