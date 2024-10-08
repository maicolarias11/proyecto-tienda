import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { auth, provider, signInWithPopup } from "../firebase-config";

function Login() {
    const handleGoogleLogIn = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            console.log('Usuario autenticado', result.user);
            window.location.href = '/';
        })
        .catch((error) => {
            console.log('Error al autenticarse con Google', error);
        });
    };

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
                    <form action="">
                        <center><h1 className="title-form">Login</h1></center>
                        <input className="input-form" type="text" placeholder="Correo" />
                        <input className="input-form" type="password" placeholder="Contraseña"/>

                        <center>
                            <button className="btn-enviar">Iniciar sesión</button>
                        </center>

                        <div className="option-login">
                            <center>
                                <i className="fa-brands fa-google" onClick={handleGoogleLogIn}>
                                    <a href="#">Ingresa con tu cuenta de Google</a>
                                    </i>
                            </center>
                        </div>

                        <center><hr className="hr-login" /></center>

                        <center>
                            <span className="sub1-form">¿No tines una cuenta?</span>
                            <a href="/register"><p className="sub2-form">Registrate</p></a>
                        </center>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Login