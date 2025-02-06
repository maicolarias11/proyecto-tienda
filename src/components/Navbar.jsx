import { Link, useNavigate } from 'react-router-dom';
import Logo from '../images/Logo.png';
import { useEffect, useState } from 'react';
import { 
    Avatar,  
    Stack, 
} from '@mui/material';

function stringToColor(string) {
    let hash;
    for (let i = 0; i < string.length; i++) {
        hash = string.charCodeAt(1) + ((hash << 5) - hash);
    }
    let color = '#'
    for (let i = 0; i < 3; i++) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    return color
}

function stringAvatar(email) {
    return{
        sx: {
            bgColor: stringToColor(email),
        },
        children: email.charAt(0).toUpperCase()
    }
}

function Navbar() {
    const [active, setActive] = useState("nav_menu");
    const [toggleIcon, setToggleIcon] = useState("nav_toggler");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userEmail, setUserEmail] = useState("")
    const navigate = useNavigate();

    const navToggle = () => {
        setActive(active === 'nav_menu' ? "nav_menu nav_active" : "nav_menu");
        setToggleIcon(toggleIcon === "nav_toggler" ? "nav_toggler toggle" : "nav_toggler");
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        const email = localStorage.getItem("userEmail")
        if (token && email) {
            setIsLoggedIn(true);
            setUserEmail(email);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userEmail")
        setIsLoggedIn(false);
        setUserEmail("")
        navigate("/login");
    };

    return (
        <>
            <nav className="nav">
                <a href="#" className='#'><img className='logoimg' src={Logo} width="50000000%" alt="Logo" /></a>
                
                <ul className={active}>
                    <a href="/">
                        <li className='nav_item'>
                            Home
                        </li>
                    </a>
                    <a href="/catalogo">
                        <li className='nav_item'>
                            Catálogo
                        </li>
                    </a>
                    <a href="/carrito">
                        <li className='nav_item'>
                            <i className='icon-shop fa-solid fa-shop'></i>
                        </li>
                    </a>
                    {isLoggedIn ? (
                        <>
                            <li className='nav_item'>
                                <Stack direction="row" spacing={2}>
                                    <Avatar {...stringAvatar(userEmail)} />
                                </Stack>
                            </li>
                            <li className='nav_item' onClick={handleLogout}>
                                <i className="icon-lg-re fa-solid fa-right-from-bracket"></i>
                            </li>
                        </>
                    ) : (
                        <li className='nav_item'>
                            <a href="/login">
                                <i className="icon-lg-re fa-regular fa-user"></i>
                            </a>
                        </li>
                    )}
                </ul>

                <div onClick={navToggle} className={toggleIcon}>
                    <div className='line1'></div>
                    <div className='line2'></div>
                    <div className='line3'></div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
