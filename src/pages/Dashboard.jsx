import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SideMenu from "../components/Sidemenu";

function DashboardAdmin() {
    return (
        <>
            <Navbar />
            <div className="dashboard">
                <div className="col-2">
                    <SideMenu />
                </div>
                <div className="col-10">
        
                </div>
            </div>
            <Footer />
        </>
    );
}

export default DashboardAdmin;
