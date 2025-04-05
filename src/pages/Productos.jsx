import { useEffect, useState } from "react";
import Header from "../components/Header";
import SideMenu from "../components/Sidemenu";
import axios from "axios";

function Productos() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchDataProducts = async () => {
            try {
                const response = await axios.get("http://localhost:4000/api/cloth0311/inventary/products");
                setProducts(response.data);
            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchDataProducts();
    }, []);
    
    const handleDeleteProduct = async (id) => {
        if (!window.confirm("¿Estas seguro de eliminar este producto?")) return;

        try {
            await axios.delete(`http://localhost:4000/api/cloth0311/inventary/delete-product/${id}`);
            setProducts(products.filter((product) => product.id_product !== id));
        } catch (error) {
            console.error("Error al eliminar el producto", error);
        }
    };

    return (
        <>
            <Header />
            <div className="products">
                <div className="products-contain">
                    <div className="flex">
                        <SideMenu />
                        <div className="content">
                            <center>
                                <h3 className="title-table-gnral">
                                    Productos.
                                </h3>
                            </center>

                            <table className="table-gnral">
                                <thead className="column">
                                    <tr>
                                        <th>ID Producto</th>
                                        <th>Imagen</th>
                                        <th>Nombre producto</th>
                                        <th>Descripción</th>
                                        <th>Precio</th>
                                        <th>Categoría</th>
                                        <th>Funciones</th>
                                    </tr>
                                </thead>
                                <tbody className="file">
                                    {products.length > 0 ? (
                                        products.map((product) => { 
                                            console.log("Imagen del producto:", product.image_product); // Consola para depuración

                                            return (
                                                <tr key={product.id_product}>
                                                    <td>{product.id_product}</td>
                                                    <td>
                                                        {product.image_product ? (
                                                            <img 
                                                                src={`http://localhost:4000/uploads/${product.image_product}`} 
                                                                alt={product.name_product} 
                                                                style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "5px" }} 
                                                            />
                                                        ) : (
                                                            "Sin imagen"
                                                        )}
                                                    </td>
                                                    <td>{product.name_product}</td>
                                                    <td>{product.description_product}</td>
                                                    <td>{product.price_product}</td>
                                                    <td>{product.category_product}</td>
                                                    <td className="icons-table"> 
                                                        <a href={`/inventario/${product.id_product}`}>
                                                            <i className="icon-table-1 fa-regular fa-pen-to-square"></i>
                                                        </a>   
                                                        <i 
                                                            className="icon-table-2 fa-solid fa-trash" 
                                                            onClick={() => handleDeleteProduct(product.id_product)}
                                                        ></i>
                                                        <a href={`/detalle/producto/${product.id_product}`}>
                                                            <i className="icon-table-3 fa-solid fa-plus"></i>
                                                        </a>
                                                    </td>
                                                </tr>
                                            );
                                        })
                                    ) : (
                                        <tr>
                                            <td colSpan="7">No hay productos disponibles</td>
                                        </tr>
                                    )}  
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Productos;
