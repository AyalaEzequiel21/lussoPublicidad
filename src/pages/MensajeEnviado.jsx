import { Link } from "react-router-dom";

export function MensajeEnviado() {
  return (
    <div className="container-mensaje">
        <div className="content-mensaje">
            <h5>Su consulta ha sido enviada con exito. Nos pondremos en contacto con usted, gracias.</h5>
            <button><Link to={"/"}>INICIO</Link></button>
        </div>
    </div>
  )
}
