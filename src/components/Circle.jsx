
export function Circle(props) {
    const {image} = props;
  return (
    <div className="circle">
        <img src={image} alt="imagen-cliente" className="img-circle" />
    </div>
  )
}
