import { useEffect, useState } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
// import Navbar from "../components/Navbar"
import SideMenu from "../components/Sidemenu"


function Usuarios() {



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