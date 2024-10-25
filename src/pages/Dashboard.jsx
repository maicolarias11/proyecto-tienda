import Footer from "../components/Footer";
import Header from "../components/Header";
// import Navbar from "../components/Navbar";
import SideMenu from "../components/Sidemenu";
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart } from "@mui/x-charts/PieChart";

function DashboardAdmin() {
    return (
        <>
            <Header />
            <div className="dashboard-container">
                <div className="flex">
                    <SideMenu />
                    <div className="content">
                        <div className="title-dashboard">
                            <h4>PANEL ADMINISTRATIVO.</h4>
                            <span>Bienvenido al modulo administrativo de 311° Clohting</span>
                        </div>
                        <div className="cards">
                            <div className="card-dashboard">
                                <a href="/inventario">
                                    <div className="card-dashboard-info">
                                        <i className="icon-card fa-solid fa-store"></i>
                                        <h3>
                                            Cantidad de productos
                                        </h3>
                                    </div>
                                </a>
                            </div>
                            <div className="card-dashboard">
                                <a href="/pedidos">
                                    <div className="card-dashboard-info">
                                        <i className="icon-card fa-solid fa-basket-shopping"></i>
                                        <h3>
                                            Cantidad de pedidos
                                        </h3>
                                    </div>
                                </a>
                            </div>
                            <div className="card-dashboard">
                                <a href="/usuarios">
                                    <div className="card-dashboard-info">
                                        <i className="icon-card fa-regular fa-user"></i>
                                        <h3>
                                            Cantidad de usuarios
                                        </h3>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="analytics">
                            <div className="vistas-page">
                                <center>
                                    <h3>
                                        Vistas en la pagina.
                                    </h3>
                
                                </center>
                                <PieChart className="grafic-visitas"
                                    series={[
                                        {
                                            data: [
                                                {id: 0, value: 25, label: 'Semana 1'},
                                                {id: 1, value: 45, label: 'Semana 2'},
                                                {id: 2, value: 65, label: 'Semana 3'},
                                                {id: 3, value: 85, label: 'Semana 4'},
                                            ]
                                        }
                                    ]}
                                    height={190}
                                    width={430}
                                />
                            </div>
                            <div className="vistas-page-2">
                                <center>
                                    <h3>
                                        Total de ventas.
                                    </h3>
                                </center>
                                <center>
                                    <BarChart className="grafic-ventas"
                                        xAxis={
                                            [
                                                {
                                                    id: 'total_ventas',
                                                    data: ['Camisetas', 'Buzos', 'Gorras'],
                                                    scaleType: 'band'
                                                }
                                            ]
                                        }
                                        series={[
                                            {
                                                data: [20000, 50000, 30000]
                                            }
                                        ]}
                                        height={230}
                                        width={400}
                                    />
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default DashboardAdmin;
