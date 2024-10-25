import Footer from "../components/Footer"
import Header from "../components/Header"
// import Navbar from "../components/Navbar"
import SideMenu from "../components/Sidemenu"


function Pedidos() {
    return(
        <>
            <Header />
            <div className="dashboard-container">
                <div className="flex">
                    <SideMenu />
                    <div className="content">
                        <center>
                            <h3 className="title-table-gnral">
                                Total de pedidos.
                            </h3>
                        </center>

                        <table className="table-gnral">
                            <thead className="column">
                                <tr>
                                    <th>Nombre completo</th>
                                    <th>Producto</th>
                                    <th>Dirección</th>
                                    <th>Celular</th>
                                    <th>Acción</th>
                                </tr>
                            </thead>
                            <tbody className="file">
                                <tr>
                                    <th>Maicol</th>
                                    <th>Camiseta Clasick</th>
                                    <th>Barichara</th>
                                    <th>304******</th>
                                    <th>
                                        <button className="btn-env-pedido">Enviar pedido</button>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Pedidos