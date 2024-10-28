import Navbar from "../components/Navbar"


function CartShopping() {
    return(
        <>
            <Navbar />
            <div className="cartshopping-contain">
                <h3 className="title-cart">Carrito de Compras.</h3>
                <center>
                    <div className="cartshopping">
                        <img className="img-cart" src="/src/images/Card tienda.jpg" alt=""  />
                        <div className="detail-cart">
                            <span className="text-detail">Camiseta Pantera Rosa Clasick</span>
                            <br />
                            <span className="text-detail">Precio: $60.000,00</span>
                        </div>
                        <div className="btn-cart">
                            <button className="btn-shop">Comprar</button>
                            {/* <br /> */}
                            <button className="btn-delete">Eliminar</button>
                        </div>

                    </div>
                </center>
            </div>
        </>
    )
}

export default CartShopping