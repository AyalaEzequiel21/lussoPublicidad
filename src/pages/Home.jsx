import {SplashCarrousel} from "../components/SplashCarrousel";
import {TextHome} from "../components/TextHome";
import {Cards} from "../components/Cards";
import {Clientes} from "../components/Clientes";
import {ButtonServicio} from "../components/ButtonServicio";
import Aos from "aos";
import "aos/dist/aos.css";
import mitre from '../images/mitre-y-rivadavia-mini.png';   
import triangulo from '../images/triangulo-mini.png';
import bajada from '../images/bajada-quilmes-3-mini.png';   
import { useEffect } from "react";

const dates = [
  {
      "imagen": bajada, 
      "titulo": "Bajada Autopista Quilmes",
      "texto": "Resolucion:      448 x 280 Medidas:         5 x 3 metros Repeticiones:  120 diarias"
  },

  {
      "imagen": mitre, 
      "titulo": "Peatonal Rivadavia y Mitre",
      "texto": "Resolucion:      400 x 240 Medidas:         3.5 x 2.5 metros Repeticiones:  120 diarias"
  },

  {
      "imagen": triangulo, 
      "titulo": "Triangulo de Bernal",
      "texto": "Resolucion:      448 x 280 Medidas:         5 x 3 metros Repeticiones:  120 diarias"
  }
]

export function Home() {

  useEffect(()=> {
    Aos.init({duration: 2000});
  }, []);

  return (
    <>
      <SplashCarrousel />
      <div data-aos="fade-up">
        <TextHome/>
      </div>
      <hr/>
      <div data-aos="fade-up">
        <Cards dates = {dates} />
        <ButtonServicio/>
      </div>
      <hr />
      <div data-aos="fade-up">
              <Clientes/>
      </div>
    </>
  )
}
