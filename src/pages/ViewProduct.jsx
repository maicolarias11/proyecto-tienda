import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import axios from "axios";
import DetailProduct from "../components/DetailProduct";

function ViewProduct({ productId }) {
    const [products, setProducts] = useState([]);
    const [detailImages, setDetailImages] = useState([]);

    useEffect(() => {
        const fetchDataProducts = async () => {
            try {
                const response = await axios.get("http://localhost:4000/api/cloth0311/inventary/products");
                const randomProducts = response.data.sort(() => Math.random() - 0.5).slice(0, 4);
                setProducts(randomProducts);
            } catch (error) {
                console.error("Error al obtener los productos", error);
            }
        };

        fetchDataProducts();
    }, []);

    useEffect(() => {
        const fetchDetailImages = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/api/cloth0311/detail/product/${productId}`);
                setDetailImages(response.data);
            } catch (error) {
                console.error("Error al obtener las imágenes de detalle", error);
            }
        };

        if (productId) {
            fetchDetailImages();
        }
    }, [productId]);

    return (
        <>
            <Navbar />
            <div className="viewproduct">
                <div className="viewproduct-contain">
                    {/* <div className="section-img-products">
                        {detailImages.map((image, index) => (
                            <img key={index} className="img-product" src={`http://localhost:4000/uploads/${image.image_detail}`} alt={`Detalle ${index}`} />
                        ))}
                    </div> */}
                    {/* <div className="section-img-products">
                        <img className="img-product-1" src="/src/images/Card tienda.jpg" alt="" />
                        <img className="img-product-2" src="/src/images/Card tienda.jpg" alt="" />
                    </div>
                    <div className="section-img-products-2">
                        <img className="img-product-1" src="/src/images/Card tienda.jpg" alt="" />
                        <img className="img-product-2" src="/src/images/Card tienda.jpg" alt="" />
                    </div> */}
                    <DetailProduct />
                </div>
                <div className="info">
                    <div className="title-section">
                        <span>311 Clothing</span>
                    </div>
                    <hr className="hr-name" />
                    <div className="description-product">
                        <span>Camiseta Pantera Rosa Classic</span>
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
                        <center>
                            <button className="add-product">AÑADIR AL CARRITO</button>
                        </center>
                    </div>
                </div>
            </div>
            <div className="other-products">
                <center>
                    <hr className="hr-other" />
                </center>
                <span className="title-other">
                    Otros productos de tu interés.
                </span>
                <div className="img-other-product">
                    {products.map((product, index) => (
                        <img key={index} src={`http://localhost:4000/uploads/${product.image_product}`} alt={product.name_product} />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ViewProduct;
