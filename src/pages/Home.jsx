import Banner from "../components/Banner"
import Cardhome from "../components/Card-home"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Contacto from "./Contacto"

function Home() {
  return (
    <>
      <div>
        <Navbar />
        <Banner />
        <br />
        <Cardhome />
        <Contacto />
        <br />
        <br />
        <Footer />
      </div>
    </>
  )
}

export default Home
