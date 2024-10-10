import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { auth, provider, signInWithPopup } from "../firebase-config";

function Register() {
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            console.log('Usuario registrado correctamente', result.user);
            window.location.href = '/';
        })
        .catch((error) => {
            console.log('Error al registrarse con Google', error);
        });
    };

    return(
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
                    <form action="">
                        <div className="body-form">
                            <center>
                                <h1 className="title-form">Registrate</h1>
                            </center>
                        </div>
                        
                        <input className="input-form" type="text" placeholder="Nombre completo" />
                        <input className="input-form" type="text" placeholder="Telefono" />
                        <input className="input-form" type="text" placeholder="Correo"/>
                        <input className="input-form" type="text" placeholder="Contraseña"/>

                        <div className="option-register">
                            <center>
                                <i className="fa-brands fa-google" onClick={handleGoogleSignIn}>
                                    <a href="#">Registrate con tu cuenta de Google</a>
                                </i>
                            </center>
                        </div>

                        <center>
                            <button className="btn-enviar">Registrarse</button>
                        </center>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Register