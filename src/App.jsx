import './App.css'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Home from './pages/Home';
import Catalogo from './pages/Catalogo';
import Contacto from '/src/pages/Contacto'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/catalogo' element={<Catalogo />} />
          <Route path='/contacto' element={<Contacto/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
