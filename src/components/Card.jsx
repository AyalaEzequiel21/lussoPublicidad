
export function Card(props) {
    const { image, title, text } = props;
  return (
    <div className="card">
        <img src={image} className= "image-card" alt="imagen-pantalla" />
        <div className="text-card">
            <h5>{title}</h5>
            <h6>Especificaciones tecnicas</h6>
            <p>{text}</p>
        </div>
    </div>
  )
}
