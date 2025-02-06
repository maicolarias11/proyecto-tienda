import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Sidemenuproducts from "../components/Sidemenuproducts"


function Camisetas() {
    return(
        <>
            <Navbar />
            <Sidemenuproducts />
            <div className="title-animation">
                <center>
                    <span>CAMISETAS PARA HOMBRE</span>
                    <span>CAMISETAS PARA HOMBRE</span>
                    <span>CAMISETAS PARA HOMBRE</span>
                    <span>CAMISETAS PARA HOMBRE</span>
                    <span>CAMISETAS PARA HOMBRE</span>
                </center>
            </div>
            <div className="arrow-left">
                <a href="/catalogo"><i className="fa-solid fa-arrow-left"></i></a>
            </div>
            <br />
            <div className="card-contain">
                <div className="card-catalogo">
                    <center><img src="/src/images/Card tienda.jpg" alt="" /></center>
                    <div className="text-card">
                    <p>Camiseta pantera negra basica</p>
                    <p>$60,000</p>
                    </div>
                </div>

                <div className="card-catalogo">
                    <center><img src="/src/images/Card tienda.jpg" alt="" /></center>
                    <div className="text-card">
                    <p>Camiseta pantera negra basica</p>
                    <p>$60,000</p>
                    </div>
                </div>

                <div className="card-catalogo">
                    <center><img src="/src/images/Card tienda.jpg" alt="" /></center>
                    <div className="text-card">
                    <p>Camiseta pantera negra basica</p>
                    <p>$60,000</p>
                    </div>
                </div>

                <div className="card-catalogo">
                    <center><img src="/src/images/Card tienda.jpg" alt="" /></center>
                    <div className="text-card">
                    <p>Camiseta pantera negra basica</p>
                    <p>$60,000</p>
                    </div>
                </div>

                <div className="card-catalogo">
                    <center><img src="/src/images/Card tienda.jpg" alt="" /></center>
                    <div className="text-card">
                    <p>Camiseta pantera negra basica</p>
                    <p>$60,000</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Camisetas