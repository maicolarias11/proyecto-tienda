// components/DetailRole.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import SideMenu from "./Sidemenu";

function DetailRole() {
    const { id } = useParams();
    const [detailData, setDetailData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

        const fetchDetailDataUser = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/api/cloth0311/user/${id}`);
                setDetailData(response.data);
            } catch (error) {
                console.error("Error al obtener usuario:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchDetailDataUser();
    }, [id]);

    return (
        <>
            <Header />
            <div className="detailrole-contain">
                <div className="flex">
                    <SideMenu />
                    <div className="content">
                        <div className="arrow-left">
                            <a href="/usuarios"><i className="fa-solid fa-arrow-left"></i></a>
                        </div>
                        <div className="detailrole">
                            <div className="form-detailrole">
                                <form>
                                    <center><h1>Detalle Rol Usuario</h1></center>

                                    {loading ? (
                                        <p>Cargando usuario...</p>
                                    ) : detailData ? (
                                        <>
                                            <input
                                                className="input-form"
                                                type="text"
                                                name="id_user"
                                                placeholder="ID Usuario"
                                                value={detailData.id_user}
                                                disabled
                                            />

                                            <input
                                                className="input-form"
                                                type="text"
                                                name="email"
                                                placeholder="Correo"
                                                value={detailData.email}
                                                disabled
                                            />
                                        </>
                                    ) : (
                                        <p style={{ color: "white" }}>No se encontró el usuario.</p>
                                    )}

                                    <select 
                                        className="input-form"
                                        required
                                        defaultValue=""
                                    >
                                        <option style={{ color: "black" }} value="" disabled>Seleccionar Rol</option>
                                        <option style={{ color: "black" }} value="Admin">Admin</option>
                                        <option style={{ color: "black" }} value="Usuario">Usuario</option>
                                    </select>

                                    <center>
                                    <   button className="btn-role">Agregar Rol</button>
                                    </center>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetailRole;
