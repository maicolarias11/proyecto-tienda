import Footer from "../components/Footer"
import Header from "../components/Header"
// import Navbar from "../components/Navbar"
import SideMenu from "../components/Sidemenu"

function Inventario() {
    return(
        <>
            <Header />
            <div className="dashboard-container">
                <div className="flex">
                    <SideMenu />
                    <div className="content">
                        <div className="arrow-left">
                            <a href="/dashboard/admin"><i className="fa-solid fa-arrow-left"></i></a>
                        </div>
                        <center>
                            <h3>Registrar nuevo producto.</h3>
                        </center>
                        <div className="inventario">
                            <div className="form-inventary">
                                <form action="">
                                    <input type="text" className="input-form" placeholder="Nombre producto"/>
                                    <input type="text" className="input-form" placeholder="Descripción producto"/>
                                    <input type="text" className="input-form" placeholder="Precio producto"/>
                                    <input type="text" className="input-form" placeholder="Categoria producto"/>

                                    <center>
                                        <button className="btn-publish">Publicar producto</button>
                                    </center>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Inventario