import './App.css'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Home from './pages/Home';
import Catalogo from './pages/Catalogo';
// import Contacto from '/src/pages/Contacto'
import Camisetas from './pages/Camisetas';
import Buzos from './pages/Buzos';
import Gorras from './pages/Gorras';
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardAdmin from './pages/Dashboard';
import Inventario from './pages/Inventario';
import Pedidos from './pages/Pedidos';
import Usuarios from './pages/Usuarios';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/catalogo' element={<Catalogo />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/camisetas' element={<Camisetas />} />
          <Route path='/buzos' element={<Buzos />} />
          <Route path='/gorras' element={<Gorras />} />
          <Route path='/dashboard/admin' element={<DashboardAdmin />} />
          <Route path='/inventario' element={<Inventario />} />
          <Route path='/pedidos' element={<Pedidos />} />
          <Route path='/usuarios' element={<Usuarios />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
