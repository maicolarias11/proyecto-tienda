import { useState } from "react";
import axios from "axios";
import Alert from "@mui/material/Alert";
import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

function DetailProduct() {
    const [images, setImages] = useState([]);
    const [productId, setProductId] = useState("");
    const [size, setSize] = useState([]);
    const [categoryGender, setCategoryGender] = useState("");
    const [type, setType] = useState("");
    const [color, setColor] = useState("");
    const [alertInfoDetail, setAlertInfoDetail] = useState({ message: "", severity: "" });
    const navigate = useNavigate();

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setImages((prevImages) => [...prevImages, ...files]);
    };

    const handleSizeChange = (e) => {
        const { value, checked } = e.target;
        setSize((prev) => 
            checked ? [...prev, value] : prev.filter((s) => s !== value)
        );
    };

    const handleSubmitImages = async (e) => {
        e.preventDefault();

        if (!productId || size.length === 0 || !categoryGender || !type || !color) {
            alert("Porfavor llenar todos los campos y seleccionar por lo menos una talla.");
            return;
        }

        const formData = new FormData();
        formData.append("product_id", productId);
        formData.append("size", size.join(","));
        formData.append("category_gender", categoryGender);
        formData.append("type", type);
        formData.append("color", color);

        images.forEach((image) => formData.append("image_detail", image));

        try {
            const response = await axios.post(
                "http://localhost:4000/api/cloth0311/detail/detail/product",
                formData
            );

            setAlertInfoDetail({ message: response.data.message, severity: "success" });

            setTimeout(() => {
                setAlertInfoDetail({ message: "", severity: "" });
                setImages([]);
                navigate("/");
            }, 1500);
        } catch (error) {
            setAlertInfoDetail({
                message: error.response?.data?.message || "Ocurrió un error.",
                severity: "warning",
            });
        }
    };

    return (
        <>
            <div className="detailproduct-contain">
                <div className="flex">
                    <div className="content">
                        <div className="detailproduct">
                            <div className="form-detailproduct">
                                <form onSubmit={handleSubmitImages}>
                                    <center>
                                        <h1>Detalle producto.</h1>
                                    </center>

                                    <input
                                        type="text"
                                        className="input-form"
                                        name="product_id"
                                        placeholder="ID del producto"
                                        value={productId}
                                        onChange={(e) => setProductId(e.target.value)}
                                        required
                                    />

                                    <label className="title-size">
                                        Tallas
                                    </label>
                                    <br />
                                    <br />
                                    {["S", "M", "L", "XL"].map((size) => (
                                        <label className="radio-label" key={size}>
                                            <input 
                                                className="radio-label"
                                                type="checkbox" 
                                                value={size}
                                                onChange={handleSizeChange}
                                            />{""}
                                            {size}
                                        </label>
                                    ))}

                                    <select 
                                        className="input-form" 
                                        value={categoryGender}
                                        onChange={(e) => setCategoryGender(e.target.value)}
                                        required
                                        defaultValue=""
                                    >
                                        <option value="" style={{ color: "black" }} disabled>Seleccionar Genero</option>
                                        <option value="Hombre" style={{ color: "black" }}>Hombre</option>
                                        <option value="Mujer" style={{ color: "black" }}>Mujer</option>
                                    </select>

                                    <input
                                        type="text"
                                        className="input-form"
                                        name="type_id"
                                        placeholder="Tipo"
                                        value={type}
                                        onChange={(e) => setType(e.target.value)}
                                        required
                                    />

                                    <input
                                        type="text"
                                        className="input-form"
                                        name="color_id"
                                        placeholder="Color"
                                        value={color}
                                        onChange={(e) => setColor(e.target.value)}
                                        required
                                    />

                                    <input
                                        type="file"
                                        className="input-form"
                                        name="image_detail"
                                        accept="image/*"
                                        multiple
                                        onChange={handleFileChange}
                                    />

                                    <center>
                                        <button className="btn-publish">Agregar Detalle</button>
                                    </center>

                                    {alertInfoDetail.message && (
                                        <Stack sx={{ width: "100%" }} spacing={2}>
                                            <Alert
                                                variant="filled"
                                                severity={alertInfoDetail.severity}
                                                style={{ marginTop: "10px" }}
                                            >
                                                {alertInfoDetail.message}
                                            </Alert>
                                        </Stack>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetailProduct;
