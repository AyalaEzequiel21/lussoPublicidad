import logo from '../images/logos/logoViolett.png';
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faCalendar } from '@fortawesome/free-solid-svg-icons'

export function Footer() {
  return (
    <div className="footer">
        <div className="text-footer">
            <h6>LUSSO PUBLICIDAD</h6>
            <div className="item-footer"><FontAwesomeIcon icon={faEnvelope}/><span><a href="mailto:lussoh.publicidad@gmail.com">lussoh.publicidad@gmail.com</a></span></div>
            <div className="item-footer"><FontAwesomeIcon icon={faPhone}/><span>+54 11-5490-4976</span></div>
            <div className="item-footer"><FontAwesomeIcon icon={faCalendar}/><span>Lunes a viernes 10 a 19 hs</span></div>
        </div>
        <Link to="/"><img src={logo} alt="logo" className="logo-footer" /></Link>
    </div>
  )
}
