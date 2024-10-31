import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase-config'; // Importa la configuración de Firebase
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, getDocs, collection } from 'firebase/firestore';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Register() {
    const [formData, setFormData] = useState({
        name_complete: '',
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

    // Manejo del registro de usuario
    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            // Crear usuario en Firebase Authentication
            const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
            const user = userCredential.user;

            // Comprobar si ya existe un administrador
            const usersSnapshot = await getDocs(collection(db, 'users'));
            const isAdminExists = usersSnapshot.docs.some(doc => doc.data().role === 'admin');
            
            // Asignar rol al usuario
            const role = isAdminExists ? 'user' : 'admin';

            // Guardar información en Firestore
            await setDoc(doc(db, 'users', user.uid), {
                uid: user.uid,
                name_complete: formData.name_complete,
                email: formData.email,
                role: role
            });

            console.log('Usuario registrado y rol asignado:', role);

            navigate(role === 'admin' ? '/dashboard/admin' : '/')
        } catch (error) {
            console.error('Error al registrar usuario:', error);
            setErrorMessage('Faltan campos por ingresar.')

        }
    };

    return (
        <>
            <Navbar />
            <div className="title-animation">
                <center>
                    <span>REGISTRATE</span>
                    <span>REGISTRATE</span>
                    <span>REGISTRATE</span>
                    <span>REGISTRATE</span>
                    <span>REGISTRATE</span>
                </center>
            </div>
            <div className="register-form">
                <a href="/" className="icon-xmark"><i className="fa-solid fa-xmark"></i></a>
                <div className="register-contain">
                    <form onSubmit={handleRegister}>
                        <div className="body-form">
                            <center>
                                <h1 className="title-form">Registrate</h1>
                            </center>
                        </div>
                        
                        <input 
                            className="input-form" 
                            type="text" 
                            name="name_complete" 
                            placeholder="Nombre completo"
                            value={formData.name_complete}
                            onChange={handleChange}
                        />
                        
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
                            <button className="btn-enviar" type="submit">Registrarse</button>
                        </center>

                        <center>
                            <div className="option-route-login">
                                <h4 className='title-route'>Ya tienes una cuenta? <span className='route-gnral'><a className='text-route' href="/login">Iniciar Sesión</a></span></h4>
                            </div>
                        </center>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Register;
