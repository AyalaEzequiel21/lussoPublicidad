// COMPONENT - HEADER'S NAV
import { Link } from 'react-router-dom'

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg  ">
        <div className="container-fluid">
          {/* BOTON HAMBURGUESA - MOBILE  */}
            <button className="navbar-toggler btn-nav" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav list-nav-header">
                  <li className="nav-item item-navbar">
                  <Link className='nav-link' to="/">Inicio</Link>                   
                  </li>
                  <li className="nav-item item-navbar">
                  <Link className='nav-link' to="/servicio">Servicio</Link>                  
                  </li>
                  <li className="nav-item item-navbar">
                  <Link className='nav-link' to="/contacto">Contacto</Link>                  
                  </li>
              </ul>
            </div>
        </div>
    </nav>
  )
}
