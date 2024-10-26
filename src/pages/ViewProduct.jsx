import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

function ViewProduct() {
    return(
        <>
            <Navbar />
            <div className="viewproduct-contain">
                <div className="section-img-products">
                    <img className="img-product-1" src="/src/images/Card tienda.jpg" alt="" />
                    <img className="img-product-2" src="/src/images/Card tienda.jpg" alt="" />
                </div>
                <div className="section-img-products-2">
                    <img className="img-product-1" src="/src/images/Card tienda.jpg" alt="" />
                    <img className="img-product-2" src="/src/images/Card tienda.jpg" alt="" />
                </div>
            </div>
            <div className="info">
                <div className="title-section">
                    <span>311 Clohting</span>
                </div>
                <hr className="hr-name" />
                
                <div className="description-product">
                    <span>Camiseta Pantera Rosa Clasick</span>
                </div>
                
                <div className="price-product">
                    <span>$60.000,00</span>
                </div>
                
                <div className="title-tallas">
                    <span>Tallas Disponibles.</span>
                </div>
                
                <div className="talla-product">
                    <p className="talla">S</p>
                    <p className="talla">M</p>
                    <p className="talla">L</p>
                    <p className="talla">XL</p>
                </div>

                <div className="detail-product">
                    <span>Camiseta: Hombre.</span>
                    <span>Tipo: Oversize.</span>
                    <span>Color: Beige</span>
                </div>

                <div className="btn-product">
                    <button className="add-product">AÑADIR AL CARRITO</button>
                </div>  
            </div>
            <Footer />
        </>
    )
}

export default ViewProduct