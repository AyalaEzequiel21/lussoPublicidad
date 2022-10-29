import logo from '../images/logos/logoViolett.png';
import { Link } from 'react-router-dom'
import { Navbar } from './Navbar';

// THIS COMPONENT CONTAIN LOGO AND NAVBAR 

export function Header(){
    return (
        <header className="header">
            <Link to="/"><img className="logoHeader" src={logo} alt="logo" /></Link>
            <Navbar></Navbar>
        </header>
    )
}