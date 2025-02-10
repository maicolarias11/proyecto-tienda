import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";  // Para obtener el ID de la URL
import Footer from "../components/Footer";
import Header from "../components/Header";
import SideMenu from "../components/Sidemenu";
import axios from "axios";
import { Alert, Stack } from "@mui/material";

function Inventario() {
    const { id_product } = useParams();  // Obtener ID del producto desde la URL
    const [formData, setFormData] = useState({
        id_product: "",
        name_product: "",
        description_product: "",
        price_product: "",
        category_product: "",
        image_product: null
    });

    const [alertInventary, setAlertInventary] = useState({ message: "", severity: "" });
    const navigate = useNavigate();

    useEffect(() => {
        if (id_product) {
            fetchProductData(id_product);
        }
    }, [id_product]);

    const fetchProductData = async (id) => {
        try {
            const response = await axios.get(`http://localhost:4000/api/cloth0311/inventary/product/${id}`);
            setFormData({
                id_product: response.data.id_product || "",
                name_product: response.data.name_product || "",
                description_product: response.data.description_product || "",
                price_product: response.data.price_product || "",
                category_product: response.data.category_product || "",
                image_product: null
            });
        } catch (error) {
            setAlertInventary({ message: "No se pudo cargar el producto", severity: "error" });
            console.error("Error al obtener la info del producto", error);
        }
    };    

    const handleChange = (e) => {
        if (e.target.name === "image_product") {
            setFormData({
                ...formData,
                image_product: e.target.files[0]
            })
        } else {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        formDataToSend.append("id_product", formData.id_product);
        formDataToSend.append("name_product", formData.name_product);
        formDataToSend.append("description_product", formData.description_product);
        formDataToSend.append("price_product", formData.price_product);
        formDataToSend.append("category_product", formData.category_product);
        if (formData.image_product) {
            formDataToSend.append("image_product", formData.image_product)
        }

        try {
            const response = id_product
                ? await axios.put(`http://localhost:4000/api/cloth0311/inventary/update-product/${id_product}`, formDataToSend, { headers: { "Content-Type": "multipart/form-data" } })
                : await axios.post("http://localhost:4000/api/cloth0311/inventary/register-product", formDataToSend, { headers: { "Content-Type": "multipart/form-data" } });
    
            setAlertInventary({ message: response.data.message, severity: "success" });
    
            setTimeout(() => {
                setAlertInventary({ message: "", severity: "" });
                navigate("/inventario/productos");
            }, 1500);
        } catch (error) {
            setAlertInventary({
                message: error.response?.data?.message || "Ocurrió un error.",
                severity: "warning"
            });
    
            setTimeout(() => {
                setAlertInventary({ message: "", severity: "" });
            }, 1500);
        }
    };    

    return (
        <>
            <Header />
            <div className="dashboard-container">
                <div className="flex">
                    <SideMenu />
                    <div className="content">
                        <div className="arrow-left">
                            <a href="/dashboard/admin"><i className="fa-solid fa-arrow-left"></i></a>
                        </div>
                        <center>
                            <h3>{id_product ? "Editar Producto" : "Registrar nuevo producto"}</h3>
                        </center>
                        <div className="inventario">
                            <div className="form-inventary">
                                <form onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        className="input-form"
                                        name="id_product"
                                        placeholder="ID producto"
                                        value={formData.id_product || ""}
                                        onChange={handleChange}
                                        required
                                        disabled={!!id_product} // Deshabilitar si es edición
                                    />
                                    <input
                                        type="text"
                                        className="input-form"
                                        name="name_product"
                                        placeholder="Nombre producto"
                                        value={formData.name_product || ""}
                                        onChange={handleChange}
                                        required
                                    />
                                    <input
                                        type="text"
                                        className="input-form"
                                        name="description_product"
                                        placeholder="Descripción producto"
                                        value={formData.description_product || ""}
                                        onChange={handleChange}
                                        required
                                    />
                                    <input
                                        type="text"
                                        className="input-form"
                                        name="price_product"
                                        placeholder="Precio producto"
                                        value={formData.price_product || ""}
                                        onChange={handleChange}
                                        required
                                    />
                                    <select
                                        className="input-form"
                                        name="category_product"
                                        value={formData.category_product}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="" disabled>Seleccionar Categoría</option>
                                        <option value="Camisetas" style={{ color: "black" }}>Camisetas</option>
                                        <option value="Buzos" style={{ color: "black" }}>Buzos</option>
                                        <option value="Gorras" style={{ color: "black" }}>Gorras</option>
                                    </select>
                                    <input 
                                        type="file"
                                        className="input-form"
                                        name="image_product"
                                        accept="image/*"
                                        onChange={handleChange}
                                    />

                                    <center>
                                        <button className="btn-publish">{id_product ? "Actualizar" : "Publicar"} producto</button>
                                    </center>

                                    {alertInventary.message && (
                                        <Stack sx={{ width: "100%" }} spacing={2}>
                                            <Alert variant="filled" severity={alertInventary.severity} style={{ marginTop: "10px" }}>
                                                {alertInventary.message}
                                            </Alert>
                                        </Stack>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Inventario;