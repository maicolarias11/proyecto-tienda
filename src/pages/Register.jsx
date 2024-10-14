import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { auth, provider, signInWithPopup, db } from "../firebase-config";
import { collection, addDoc, getDocs } from "firebase/firestore";

function Register() {
    const [formData, setFormData] = useState({
        name_complete: '',
        phone: '',
        email: '',
        password: ''
    });

    // Verifica si ya hay un admin registrado
    const checkRolAdminExists = async () => {
        const querySnapshot = await getDocs(collection(db, "users"));
        return !querySnapshot.empty;
    };

    // Manejo para el registro con Google
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
        .then(async (result) => {
            console.log('Usuario registrado correctamente', result.user);

            const isAdminExists = await checkRolAdminExists();

            await addDoc(collection(db, "users"), {
                name_complete: result.user.displayName,
                phone: result.user.phoneNumber || '',
                email: result.user.email,
                method_register: "Google",
                rol: isAdminExists ? "user" : "admin"
            });
            
            window.location.href = '/';
        })
        .catch((error) => {
            console.log('Error al registrarse con Google', error);
        });
    };

    // Maneja cambios en el formulario
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Maneja el registro manual
    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const isAdminExists = await checkRolAdminExists();

            await addDoc(collection(db, "users"), {
                name_complete: formData.name_complete,
                phone: formData.phone,
                email: formData.email,
                password: formData.password,
                method_register: "Manual",
                rol: isAdminExists ? "user" : "admin"
            });

            console.log('Usuario registrado correctamente');
            window.location.href = "/";
        } catch (error) {
            console.log('Error al registrar usuario', error);
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
                <a href="/login" className="icon-xmark"><i className="fa-solid fa-xmark"></i></a>
                <div className="register-contain">
                    <form>
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
                            name="phone" 
                            placeholder="Telefono"
                            value={formData.phone} 
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

                        <center>
                            <button className="btn-enviar" type="submit" onSubmit={handleRegister}>Registrarse</button>
                        </center>

                        <div className="option-register">
                            <center>
                                <i className="fa-brands fa-google" onClick={handleGoogleSignIn}>
                                    <a href="#">Registrate con tu cuenta de Google</a>
                                </i>
                            </center>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Register;
