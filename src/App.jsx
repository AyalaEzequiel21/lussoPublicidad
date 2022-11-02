import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Home} from "./pages/Home";
import {Servicio} from "./pages/Servicio";
import {Contacto} from "./pages/Contacto"// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MensajeEnviado } from "./pages/MensajeEnviado";


export function App(){

    
    return (
        <div>
            <BrowserRouter>
                <Header/>
                <main className="main">
                    <Routes>
                        <Route  path='/' element={<Home/>}></Route>
                        <Route exact path='/servicio' element={<Servicio/>}></Route>
                        <Route exact path='/contacto' element={<Contacto/>}></Route>
                        <Route exact path='/send' element={<MensajeEnviado/>}></Route>
                    </Routes>
                </main>
                <Footer/>
            </BrowserRouter>

        </div>
    )
}