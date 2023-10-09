import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {


  return (
    <>

<Routes>
          <Route path='/' element={<Portfolio/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
    </Routes>


      <NavBar/>
    </>
  )
}



export default App
