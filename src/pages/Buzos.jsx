import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidemenuproducts from "../components/Sidemenuproducts";

function Buzos() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("http://localhost:4000/api/cloth0311/inventary/products");
                const buzos = response.data.filter(product => product.category_product === "Buzos");
                setProducts(buzos);
            } catch (error) {
                console.error("Error al obtener los productos:", error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <>
            <Navbar />
            <Sidemenuproducts />
            <div className="title-animation">
                <center>
                    <span>BUZOS PARA HOMBRE</span>
                    <span>BUZOS PARA HOMBRE</span>
                    <span>BUZOS PARA HOMBRE</span>
                    <span>BUZOS PARA HOMBRE</span>
                    <span>BUZOS PARA HOMBRE</span>
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
                    <p style={{ color: "white" }}>No hay buzos disponibles.</p>
                )}
            </div>
            <Footer />
        </>
    );
}

export default Buzos;
