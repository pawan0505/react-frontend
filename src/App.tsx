// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'
import { Navbar } from './Components/Navbar'
import { Hero } from './Components/Hero'
import { NewCourses } from './Components/NewCourses'
import { ExistingCourses } from './Components/ExistingCourses'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <NewCourses />
        <ExistingCourses />
      </div>
    </>
  )
}

export default App
