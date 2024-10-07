import Banner from "../components/Banner"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Contacto from "./Contacto"

function Home() {
  return (
    <>
      <div>
        <Navbar />
        <Banner />
        <Contacto />
        <br />
        <br />
        <Footer />
      </div>
    </>
  )
}

export default Home
