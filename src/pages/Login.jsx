// import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { auth, provider, signInWithPopup, db } from "../firebase-config";
import { doc, getDoc } from "firebase/firestore";

function Login() {
    const handleGoogleLogIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            console.log('Usuario autenticado correctamente', result.user)

            const userEmail = result.user.email;

            const userDoc = await getDoc(doc(db, "users", userEmail));
            if(userDoc.exits) {
                const userData = userDoc.data();
                console.log('Datos del usuario', userData)
            } else {
                console.log('No se encontraron los datos del usuario')
            }

            window.location.href = '';

        } catch (error) {
            console.log('Error al autenticarse con Google')
        }
    };

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // // const [errorMessage, setErrorMessage] = useState('');

    // const handeLogin = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const userCredential = await signInWithEmailAndPassword(auth, email, password);
    //         const user = userCredential.user;

    //         const userDoc = await getDoc(doc(db, "users", user.email));
    //         if (userDoc.exists()) {
    //             const userData = userDoc.data();
    //             console.log('Datos del usuario', userData)
    //             window.location.href = "/";
    //         } else {
    //             console.log('No se encontraron los datos del usuario')
    //         }
            
    //     } catch (error) {
    //         // setErrorMessage('Error al iniciar sesión. Verifica tus credenciales.');
    //         console.log('Error al iniciar sesión', error);
    //     }
    // };

    return(
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
                    <form>
                        <center><h1 className="title-form">Login</h1></center>
                        <input 
                        className="input-form" 
                        type="text" 
                        placeholder="Correo" 
                        />

                        <input 
                        className="input-form" 
                        type="password" 
                        placeholder="Contraseña"
                        />

                        {/* {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} */}

                        <center>
                            <button className="btn-enviar" type="submit">Iniciar sesión</button>
                        </center>

                        <div className="option-login">
                            <center>
                                <i className="fa-brands fa-google">
                                    <a href="#" onClick={handleGoogleLogIn}>Ingresa con tu cuenta de Google</a>
                                    </i>
                            </center>
                        </div>
                    </form>
                </div>
            </div>
            <br />
            <Footer />
        </>
    )
}

export default Login