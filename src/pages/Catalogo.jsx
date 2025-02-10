import { useEffect, useState } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Sidemenuproducts from "../components/Sidemenuproducts"
import axios from "axios";


function Catalogo() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchDataProducts = async () => {
      try {
          const response = await axios.get("http://localhost:4000/api/cloth0311/inventary/products");
          const randomProducts = response.data.sort(() => Math.random() - 0.5);
          setProducts(randomProducts.slice(0, 5));
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
      <br />
      <div className="card-contain">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="card-catalogo" key={product.id_product}>
              <center>
                <a href={`/vista/producto/${product.id_product}`}>
                  <img src={`http://localhost:4000/uploads/${product.image_product}`} alt={product.name_product} />
                </a>
              </center>
              <div className="text-card">
                <p>{product.name_product}</p>
                <p>${product.price_product}</p>
              </div>
            </div>
          ))
        ) : (
          <p style={{ color: "white" }}>Cargando productos...</p>
        )}
      </div>
      <Footer />
    </>
  )
}

export default Catalogo
