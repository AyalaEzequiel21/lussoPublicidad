
export function Formulario() {
  return (
    <div className="container-form">
        <h5>Contactanos..</h5>
        <form>
            <div className="container-input">
                <label className="label-form">Nombre y Apelido</label>
                <input type="text" className="input-form"/>
            </div>
            <div className="container-input">
                <label className="label-form">Email</label>
                <input type="email" className="input-form"/>
            </div>
            <div className="container-input">
                <label className="label-form">Mensaje</label>
                <textarea cols="30" rows="10" className="input-form"></textarea>
            </div>
            <button type="submit" className="button-form">ENVIAR</button>
        </form>
    </div>
  )
}
