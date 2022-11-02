import { Formulario } from "../components/Formulario";
import { TextContacto } from "../components/TextContacto";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";


export function Contacto() {

  useEffect(()=> {
    Aos.init({duration: 2000});
  }, []);

  return (
    <>
      <div data-aos="fade-up">
        <TextContacto/>
      </div>
      <hr />
      <div data-aos="fade-up">
        <Formulario/>
      </div>
    </>
  )
}
