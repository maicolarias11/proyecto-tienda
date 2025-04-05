import { useEffect, useState } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Sidemenuproducts from "../components/Sidemenuproducts"
import axios from "axios"
import { Link } from "react-router-dom"


function Camisetas() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchDataProducts = async () => {
            try {
                const response = await axios.get("http://localhost:4000/api/cloth0311/inventary/products?category=Camisetas");
                setProducts(response.data);
            } catch (error) {
                console.error("Error al obtener los productos", error);
            }
        };

        fetchDataProducts()
    }, [])

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
                {products.map((product) => (
                    <div className="card-catalogo" key={product.id_product}>
                        <center>
                            <Link to={`/vista/producto/${product.id_product}`}>
                                <img src={`http://localhost:4000/uploads/${product.image_product}`} alt={product.nam_product} />
                            </Link>
                        </center>
                        <div className="text-card">
                            <p>{product.name_product}</p>
                            <p>{product.price_product}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </>
    )
}

export default Camisetas