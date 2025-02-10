import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidemenuproducts from "../components/Sidemenuproducts";
import axios from "axios";


function Gorras() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchDataProducts = async () => {
            try {
                const response = await axios.get("http://localhost:4000/api/cloth0311/inventary/products");
                const gorras = response.data.filter(product => product.category_product === "Gorras");
                setProducts(gorras);
            } catch (error) {
                console.error("Error al obtener los productos", error);
            }
        };

        fetchDataProducts();
    }, []);

    return (
        <>
            <Navbar />
            <Sidemenuproducts />
            <div className="title-animation">
                <center>
                    <span>GORRAS PARA HOMBRE</span>
                    <span>GORRAS PARA HOMBRE</span>
                    <span>GORRAS PARA HOMBRE</span>
                    <span>GORRAS PARA HOMBRE</span>
                    <span>GORRAS PARA HOMBRE</span>
                </center>
            </div>
            <div className="arrow-left">
                <a href="/catalogo"><i className="fa-solid fa-arrow-left"></i></a>
            </div>
            <br />
            <div className="card-contain">
                {products.length > 0 ? (
                    products.map((product) => (
                        <div className="card-catalogo" key={product.id_product}>
                            <center>
                                <img src={`http://localhost:4000/uploads/${product.image_product}`} alt={product.name_product} />
                            </center>
                        <div className="text-card">
                            <p>{product.name_product}</p>
                            <p>${product.price_product}</p>
                        </div>
                    </div>
                    ))
                ) : (
                    <p style={{ color: "white" }}>No hay gorras disponibles.</p>
                )}
            </div>
            <Footer />
        </>
    )
}

export default Gorras