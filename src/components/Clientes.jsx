import arba from '../images/clientes/arba.png';
import auchan from '../images/clientes/Auchan.png';
import argentinaPresi from '../images/clientes/argentina-presidencia.png';
import canal13 from '../images/clientes/canal13.png';
import carrefour from '../images/clientes/carrefours.png';
import centrosider from '../images/clientes/centrosider.png';
import fravega from '../images/clientes/fravega.png';
import gobierno from '../images/clientes/gobierno.png';
import jeep from '../images/clientes/jeep.png';
import mcdonalds from '../images/clientes/mcdonalds.png';
import naranja from '../images/clientes/naranja.jpg';
import perspectiva from '../images/clientes/perspectiva.png';
import peugeot from '../images/clientes/peugeot.png';
import provincia from '../images/clientes/provincia.png';
import quilmes from '../images/clientes/quilmes.jpg';
import cerveza from '../images/clientes/cerveza.png';
import ucalp from '../images/clientes/ucalp.png';
import ypf from '../images/clientes/ypf.png';
import otamendi from '../images/clientes/otamendi.png';
import golden from '../images/clientes/golden.png';
import gente from '../images/clientes/primero-gente.png';
import maga from '../images/clientes/maga.png';
import zonaprop from '../images/clientes/zonaprop.png';
import fiat from '../images/clientes/fiat.png';
import { Circle } from '../components/Circle';

const images = [arba, auchan, argentinaPresi, canal13, carrefour, centrosider, ucalp, ypf]
const images2 =  [fravega, gobierno, jeep, mcdonalds, naranja, perspectiva, quilmes, cerveza]
const images3 = [peugeot, provincia, otamendi, golden, gente, maga, zonaprop, fiat];


export function Clientes() {
  return (
    <div className="clientes">
      <h4>Las empresas que confian en nosotros</h4>
      <div className="circles">
        <div id="carouselExampleControls" class="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="content-circle">
                {images.map((image, index) =>{
                  return <Circle image = {image} key={index}/>
                })}
              </div>
            </div>
            <div className="carousel-item">
            <div className="content-circle">
                {images2.map((image, index) =>{
                  return <Circle image = {image} key={index}/>
                })}
              </div>            </div>
            <div className="carousel-item">
            <div className="content-circle">
                {images3.map((image, index) =>{
                  return <Circle image = {image} key={index}/>
                })}
              </div>            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden btn-ctr">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden btn-ctr">Next</span>
          </button>
        </div>
      </div>  
    </div>
  )
}
