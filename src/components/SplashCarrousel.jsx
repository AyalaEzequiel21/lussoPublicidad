import calchaqui from "../images/calchaqui.png";
import bajadaAutopista from "../images/bajada-autopista-quilmes2.png";
import mitreRivadavia from "../images/mitre-y-rivadavia3.png"

export function SplashCarrousel() {
  return (
    <div className= "splash-carousel">
        <div id="carouselExampleControls" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={bajadaAutopista} className="d-block w-100 img-carousel" alt="image-pantalla"/>
                </div>
                <div className="carousel-item">
                    <img src={calchaqui} className="d-block w-100 img-carousel" alt="image-pantalla"/>
                </div>
                <div className="carousel-item">
                    <img src={mitreRivadavia} className="d-block w-100 img-carousel" alt="image-pantalla"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
  )
}

