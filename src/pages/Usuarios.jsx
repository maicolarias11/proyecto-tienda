import { useEffect, useState } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
// import Navbar from "../components/Navbar"
import SideMenu from "../components/Sidemenu"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase-config"


function Usuarios() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetcUsers = async () => {
            try {
                
                const querySnapshot = await getDocs(collection(db, 'users'));
                const usersData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setUsers(usersData);
            } catch (error) {
                console.log('Error al obtener los usuarios:', error);
            }
        };

        fetcUsers();
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
                                    <th>Nombre completo</th>
                                    <th>Correo</th>
                                    <th>Rol</th>
                                </tr>
                            </thead>
                            <tbody className="file">
                                {users.map((user) => (
                                <tr className="data-user" key={user.id}>
                                    <th>{user.name_complete}</th>
                                    <th>{user.email}</th>
                                    <th>{user.role}</th>
                                </tr>
                                ))}
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