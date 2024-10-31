import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase-config'; // Importa la configuración de Firebase
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    // Manejo de cambios en los campos del formulario
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Manejo del inicio de sesión de usuario
    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            // Iniciar sesión en Firebase Authentication
            const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
            const user = userCredential.user;

            // Obtener el rol del usuario desde Firestore
            const userDoc = await getDoc(doc(db, 'users', user.uid));
            if (userDoc.exists()) {
                const userData = userDoc.data();
                console.log('Inicio de sesión exitoso, rol:', userData.role);

                // Redireccionar según el rol
                if (userData.role === 'admin') {
                    console.log('Bienvenido, Admin');
                    navigate('/dashboard/admin'); // Redirigir a la página de administración
                } else {
                    console.log('Bienvenido, Usuario');
                    navigate('/'); // Redirigir a la página principal para usuarios
                }
            } else {
                setErrorMessage('No se encontraron datos de usuario en Firestore.');
            }
        } catch (error) {
            console.error('Error en el inicio de sesión:', error);
            setErrorMessage('Error al iniciar sesión. Verifica tus credenciales.');
        }
    };

    return (
        <>
            <Navbar />
            <div className="title-animation">
                <center>
                    <span>INICIAR SESIÓN</span>
                    <span>INICIAR SESIÓN</span>
                    <span>INICIAR SESIÓN</span>
                    <span>INICIAR SESIÓN</span>
                    <span>INICIAR SESIÓN</span>
                </center>
            </div>
            <div className="login-form">
                <div className="login-contain">
                    <form onSubmit={handleLogin}>
                        <center><h1 className="title-form">Login</h1></center>

                        <input 
                            className="input-form" 
                            type="text" 
                            name="email"
                            placeholder="Correo"
                            value={formData.email}
                            onChange={handleChange}
                        />

                        <input 
                            className="input-form" 
                            type="password" 
                            name="password"
                            placeholder="Contraseña"
                            value={formData.password}
                            onChange={handleChange}
                        />

                        {errorMessage && <p className='error-msg'>{errorMessage}</p>}

                        <center>
                            <button className="btn-enviar" type="submit">Iniciar sesión</button> 
                            
                        </center>
                        
                        <div className="option-route-register">
                            <h4 className='title-route'>No tienes una cuenta? <span className='route-gnral'><a className='text-route' href="/register">Registrate</a></span></h4>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Login;
