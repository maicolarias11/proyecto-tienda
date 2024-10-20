import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import SideMenu from "../components/Sidemenu"


function Pedidos() {
    return(
        <>
            <Navbar />
            <div className="pedidos">
                <SideMenu />
            </div>
            <Footer />
        </>
    )
}

export default Pedidos