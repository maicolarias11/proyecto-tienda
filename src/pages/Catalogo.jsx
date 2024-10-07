import Footer from "../components/Footer"
import Navbar from "../components/Navbar"


function Catalogo() {
  return (
    <>
      <Navbar />
      <div className="catalogo">
        <br />
        <center>
          <a href="/camisetas"><button className="btn-clo">Camisetas</button></a>
          <a href="/buzos"><button className="btn-clo">Buzos</button></a>
          <a href="/gorras"><button className="btn-clo">Gorras</button></a>
        </center>
      </div>
      <br />
      <div className="card-contain">
        <div className="card-catalogo">
          <center><img src="/src/images/Card tienda.jpg" alt="" /></center>
          <div className="text-card">
            <p>Camiseta pantera negra basica</p>
            <p>$60,000</p>
          </div>
        </div>

        <div className="card-catalogo">
          <center><img src="/src/images/Card tienda.jpg" alt="" /></center>
          <div className="text-card">
            <p>Camiseta pantera negra basica</p>
            <p>$60,000</p>
          </div>
        </div>

        <div className="card-catalogo">
          <center><img src="/src/images/Card tienda.jpg" alt="" /></center>
          <div className="text-card">
            <p>Camiseta pantera negra basica</p>
            <p>$60,000</p>
          </div>
        </div>

        <div className="card-catalogo">
          <center><img src="/src/images/Card tienda.jpg" alt="" /></center>
          <div className="text-card">
            <p>Camiseta pantera negra basica</p>
            <p>$60,000</p>
          </div>
        </div>
        
        <div className="card-catalogo">
          <center><img src="/src/images/Card tienda.jpg" alt="" /></center>
          <div className="text-card">
            <p>Camiseta pantera negra basica</p>
            <p>$60,000</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Catalogo
