

function Contacto() {
  return (
    <>
      <div className="contact-form">
        <div className="container-form">
          <form action="#">
            <input className="input-form" type="text" placeholder="Nombre" />
            <input className="input-form" type="text" placeholder="Telefono" />
            <input className="input-form" type="text" placeholder="Correo" />
            <input className="input-form-message" type="message" placeholder="Comentario" />

            <div className="btn-container">
              <button className="btn-form">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contacto
