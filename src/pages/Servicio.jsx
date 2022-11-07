import {Cards} from "../components/Cards";
import {Clientes} from "../components/Clientes";
import {TextServicio} from "../components/TextServicio";
import bajada from '../images/bajada-quilmes-3-mini.png';
import mitre from '../images/mitre-y-rivadavia-mini.png';   
import triangulo from '../images/triangulo-mini.png';
import calchaqui from '../images/calchaqui-mini.png';
import bernal from '../images/bernal-mini.png';
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";


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
  },

  {
      "imagen": calchaqui, 
      "titulo": "Av Calchaqui 1865",
      "texto": "Resolucion:      400 x 240 Medidas:         3.5 x 2.5 metros Repeticiones:  120 diarias"
  },

  {
      "imagen": bernal, 
      "titulo": "Bajada Autopista Bernal",
      "texto": "Resolucion:      400 x 240 Medidas:         3.5 x 2.5 metros Repeticiones:  120 diarias"
  }
]

export function Servicio() {

  useEffect(()=> {
    Aos.init({duration: 2000});
  }, []);

  return (
    <>
      <div data-aos="fade-up">
        <TextServicio/>
      </div>
      <hr />
      <div data-aos="fade-up">
        <Cards dates = {dates}/>
      </div>
      <hr />
      <div data-aos="fade-up">
        <Clientes/>
      </div>
    </>
  )
}
