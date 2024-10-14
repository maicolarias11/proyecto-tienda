// import { Link } from 'react-router-dom';
import Logo from '../images/Logo.png';
import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase-config';

function Navbar() {
    const [active, setActive] = useState("nav_menu");
    const [toggleIcon, setToggleIcon] = useState("nav_toggler");
    const navToggle = () => {
        active === 'nav_menu' 
        ? setActive("nav_menu nav_active") 
        : setActive("nav_menu");

        ///TogglerIcon

        toggleIcon === "nav_toggler"
        ? setToggleIcon("nav_toggler toggle")
        : setToggleIcon("nav_toggler");
    }

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user) {
                setIsAuthenticated(true);
            }
            else {
                setIsAuthenticated(false);
            }
        });

        return () => unsubscribe
    }, []);

    const handleLogout  = () => {
        signOut(auth)
        .then(() => {
            console.log('Sesión cerrada');
            window.location.href = "/login";
        })
        .cath((error) => {
            console.log('Error al cerrar la sesión', error);
        })
    }
    
  return (
    <>
        <nav className="nav">
            <a href="#" className='#'><img className='logoimg' src={Logo} width="50000000%" alt="" /></a>
            {/* <ul>
                <li></li>
            </ul> */}
            <ul className={active}>
                <li className='nav_item'><a href="/">Home</a></li>
                <li className='nav_item'><a href="/catalogo">Catalogo</a></li>
                {isAuthenticated ? (
                    <li className='nav_item' >
                        <i className="icon-lg-re fa-regular fa-user"></i>
                        <i className="icon-lg-re fa-solid fa-right-from-bracket" onClick={handleLogout}></i>
                    </li>
                ) : (
                    <>
                        <li className='nav_item'><a href="/login">LogIn</a></li>
                        <li className='nav_item'><a href="/register">Register</a></li>
                    </>
                )}
                 {/* <li className='nav_item' >
                    <i className="icon-lg-re fa-regular fa-user"></i>
                    <i className="icon-lg-re fa-solid fa-right-from-bracket"></i>
                </li> */}
                
                <li className='nav_item'>
                    <i className='icon-shop fa-solid fa-shop'></i>
                </li>

            </ul>
            <div onClick={navToggle} className={toggleIcon}>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div>
        </nav>
    </>
  )
}

export default Navbar
