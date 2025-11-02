import './App.css'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Home from './pages/Home';
import Catalogo from './pages/Catalogo';
// import Contacto from '/src/pages/Contacto'
import Camisetas from './pages/Camisetas';
import Buzos from './pages/Buzos';
import Gorras from './pages/Gorras';
import Login from './pages/Login';
import DashboardAdmin from './pages/Dashboard';
import Inventario from './pages/Inventario';
import Pedidos from './pages/Pedidos';
import Usuarios from './pages/Usuarios';
import ViewProduct from './pages/Viewproduct';
import CartShopping from './pages/CartShopping';
import Productos from './pages/Productos';
import DetailProduct from './components/DetailProduct';
import DetailRole from './components/DetailRole';
import AdminRoutes from './routes/AdminRoutes';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/catalogo' element={<Catalogo />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/camisetas' element={<Camisetas />} />
          <Route path='/buzos' element={<Buzos />} />
          <Route path='/gorras' element={<Gorras />} />
          <Route path='/vista/producto' element={<ViewProduct />} />
          <Route path='/vista/producto/:id_product' element={<ViewProduct />} />
          <Route path='/carrito' element={<CartShopping />} />
          {/* <Route path='/dashboard/admin' element={<AdminRoutes><DashboardAdmin /></AdminRoutes>} /> */}
          <Route 
            path="/dashboard/admin" 
            element={
                <AdminRoutes>
                    <DashboardAdmin />
                </AdminRoutes>
            } 
        />
          <Route path='/inventario' element={<AdminRoutes><Inventario /></AdminRoutes>} />
          <Route path='/inventario/:id_product' element={<AdminRoutes><Inventario /></AdminRoutes>} />
          <Route path='/inventario/productos' element={<AdminRoutes><Productos /></AdminRoutes>} />
          <Route path='/pedidos' element={<AdminRoutes><Pedidos /></AdminRoutes>} />
          <Route path='/usuarios' element={<AdminRoutes><Usuarios /></AdminRoutes>} />
          <Route path='/detalle/producto' element={<AdminRoutes><DetailProduct /></AdminRoutes>} />
          <Route path='/detalle/producto/:id_product' element={<AdminRoutes><DetailProduct /></AdminRoutes>} />
          <Route path='/detalle/usuarios' element={<AdminRoutes><DetailRole /></AdminRoutes>} />
          <Route path='/detalle/usuarios/:id' element={<AdminRoutes><DetailRole /></AdminRoutes>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
