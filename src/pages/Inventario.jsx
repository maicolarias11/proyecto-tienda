import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

function Inventario() {
    return(
        <>
            <Navbar />
            <div className="arrow-left">
                <a href="/dashboard/admin"><i className="fa-solid fa-arrow-left"></i></a>
            </div>
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
            <Footer />
        </>
    )
}

export default Inventario