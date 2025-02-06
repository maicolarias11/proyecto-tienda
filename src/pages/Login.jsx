import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import { Stack } from "@mui/material";

function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [alertInfo, setAlertInfo] = useState({ message: "", severity: "" });
    const [isRegistering, setIsRegistering] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (isRegistering) {
                const response = await axios.post("http://localhost:4000/api/cloth0311/register", formData);

                setAlertInfo({ message: response.data.message, severity: "success" });

                setTimeout(() => {
                    setAlertInfo({ message: "", severity: "" });
                    navigate("/login");
                }, 1500);
            } else {
                const response = await axios.post("http://localhost:4000/api/cloth0311/login", formData);

                if (response.data.token) {
                    localStorage.setItem("token", response.data.token);
                    localStorage.setItem("userEmail", formData.email);
                }

                setAlertInfo({ message: response.data.message, severity: "success" });

                setTimeout(() => {
                    setAlertInfo({ message: "", severity: "" });
                    navigate("/");
                }, 1500);
            }
        } catch (error) {
            setAlertInfo({ 
                message: error.response?.data?.message || "Ocurrió un error.", 
                severity: "warning" 
            });

            setTimeout(() => {
                setAlertInfo({ message: "", severity: "" });
            }, 3000);
        }
    };

    return (
        <>
            <Navbar />
            <div className="title-animation">
                <center>
                    <span>{isRegistering ? "REGISTRARSE" : "INICIAR SESIÓN"}</span>
                    <span>{isRegistering ? "REGISTRARSE" : "INICIAR SESIÓN"}</span>
                    <span>{isRegistering ? "REGISTRARSE" : "INICIAR SESIÓN"}</span>
                    <span>{isRegistering ? "REGISTRARSE" : "INICIAR SESIÓN"}</span>
                    <span>{isRegistering ? "REGISTRARSE" : "INICIAR SESIÓN"}</span>
                </center>
            </div>
            <div className="login-form">
                <div className="login-contain">
                    <form onSubmit={handleSubmit}>
                        <center><h1 className="title-form">{isRegistering ? "Regístrate." : "Iniciar sesión."}</h1></center>

                        <input 
                            className="input-form" 
                            type="text" 
                            name="email"
                            placeholder="Correo"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                        <input 
                            className="input-form" 
                            type="password" 
                            name="password"
                            placeholder="Contraseña"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />

                        <center>
                            <button className="btn-enviar" type="submit">{isRegistering ? "Registrarse" : "Iniciar sesión"}</button> 
                        </center>

                        {/* Alerta dinámica para mostrar mensajes de éxito o error */}
                        {alertInfo.message && (
                            <Stack sx={{ width: '100%' }} spacing={2}>
                                <Alert 
                                    variant="filled" 
                                    severity={alertInfo.severity} 
                                    style={{ marginTop: "10px" }}
                                >
                                    {alertInfo.message}
                                </Alert>
                            </Stack>
                        )}

                        <div className="option-route-register">
                            <h4 className='title-route'>
                                {isRegistering 
                                    ? "¿Ya tienes cuenta? " 
                                    : "¿No tienes una cuenta? "}
                                <span 
                                    className='route-gnral' 
                                    onClick={() => setIsRegistering(!isRegistering)}
                                    style={{ cursor: "pointer", color: "white", textDecoration: "underline" }}
                                >
                                    {isRegistering ? "Inicia sesión" : "Regístrate"}
                                </span>
                            </h4>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Login;
