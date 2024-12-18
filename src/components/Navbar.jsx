// import { Link } from 'react-router-dom';
import Logo from '../images/Logo.png';
import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth, db } from '../firebase-config';
import { getDoc, doc } from 'firebase/firestore';

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
    const [userRole, setUserRole] = useState(null);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if(user) {
                setIsAuthenticated(true);
                const userDoc = await getDoc(doc(db, 'users', user.uid));
                if (userDoc.exists()) {
                    setUserRole(userDoc.data().role);
                }
            }
            else {
                setIsAuthenticated(false);
                setUserRole(null);
            }
        });

        return () => unsubscribe();
    }, []);

    const handleLogout  = () => {
        signOut(auth)
        .then(() => {
            console.log('Sesión cerrada');
            window.location.href = "/";
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
                <li className='nav_item'>
                    <a href="/carrito">
                        <i className='icon-shop fa-solid fa-shop'></i>
                    </a>
                </li>
                {isAuthenticated ? (
                    <li className='nav_item' >
                        {userRole === 'admin' && (
                            <li className='nav_item'><a href="/dashboard/admin">Dashboard</a></li>
                        )}
                        
                        {/* <i className="icon-lg-re fa-regular fa-user"></i> */}
                        <i className="icon-lg-re fa-solid fa-right-from-bracket" onClick={handleLogout}></i>
                    </li>
                ) : (
                    <>
                        <li className='nav_item'><a href="/login"><i className="icon-lg-re fa-regular fa-user"></i></a></li>
                        {/* <li className='nav_item'><a href="/login">LogIn</a></li>
                        <li className='nav_item'><a href="/register">Register</a></li> */}
                    </>
                )}
                 {/* <li className='nav_item' >
                    <i className="icon-lg-re fa-regular fa-user"></i>
                    <i className="icon-lg-re fa-solid fa-right-from-bracket"></i>
                </li> */}
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
