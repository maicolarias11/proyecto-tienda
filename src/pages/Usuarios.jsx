import { useEffect, useState } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
// import Navbar from "../components/Navbar"
import SideMenu from "../components/Sidemenu"
import axios from "axios"

function Usuarios() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchDataUsers = async () => {
            try {
                const response = await axios.get("http://localhost:4000/api/cloth0311/users");
                setUsers(response.data);
            } catch (error) {
                console.error("Error", error)
            }
        };

        fetchDataUsers();
    }, []);

    return(
        <>
            <Header />
            <div className="dashboard-contairner">
                <div className="flex">
                    <SideMenu />
                    <div className="content">
                        <center>
                            <h3 className="title-table-gnral">
                                Total de usuarios registrados.
                            </h3>
                        </center>

                        <table className="table-gnral">
                            <thead className="column">
                                <tr>
                                    <th>ID User</th>
                                    <th>Email</th>
                                    <th>Rol Usuario</th>
                                    <th>Funciones</th>
                                </tr>
                            </thead>
                            <tbody className="file-user">
                               {users.length > 0 ? (
                                    users.map((user) => {
                                        return(
                                            <tr key={user.id_user}>
                                                <td className="celda-table-user">{user.id_user}</td>
                                                <td className="celda-table-user">{user.email}</td>
                                                <td className="celda-table-user">{user.rol}</td>
                                                <td className="icons-table-user">
                                                        <i 
                                                            className="icon-table-users-1 fa-solid fa-trash" 
                                            
                                                        ></i>
                                                        <a href={`/detalle/usuarios/${user.id_user}`}>
                                                            <i className="icon-table-users-2 fa-solid fa-plus"></i>
                                                        </a>
                                                </td>
                                            </tr>
                                        );
                                    })
                               ) : (
                                    <tr>
                                        <td colSpan="7">No hay usuarios registrados.</td>
                                    </tr>
                               )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Usuarios