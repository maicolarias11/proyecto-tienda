import { signOut } from 'firebase/auth';


function SideMenu() {

    const handleSideMenuLogout  = () => {
        signOut()
        .then(() => {
            console.log('Sesión cerrada');
            window.location.href = "/";
        })
        .cath((error) => {
            console.log('Error al cerrar la sesión', error);
        })
    }

    return(
        <>
            <div className="sidemenu">
                <div className="sidemenu-contain">
                    <ul className="side-options">
                        
                        <li className='side_nav_item'>
                            <i className="side-icons fa-solid fa-chart-line"></i><a href="/dashboard/admin">Dashboard</a>
                        </li>
                        <li className='side_nav_item'>
                            <i className="side-icons fa-solid fa-truck-fast"></i><a href="/inventario">Inventario</a>
                        </li>
                        <li className='side_nav_item'>
                            <i className="side-icons fa-solid fa-cart-plus"></i><a href="/pedidos">Pedidos</a>
                        </li>
                        <li className='side_nav_item'>
                            <i className="side-icons fa-solid fa-user"></i><a href="/usuarios">Usuarios</a>
                        </li>
                        
                        <button className="btn-logout-side" onClick={handleSideMenuLogout}><i className="side-icon-logout fa-solid fa-right-from-bracket"></i>CERRAR SESIÓN</button>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SideMenu;