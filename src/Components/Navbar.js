import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbarBrand effectOpacity'>
                <i className='fa-solid fa-code codeMinilogo'></i>
                <h2 className='miniName effectSpacingLetter'>Emanuel Alderete</h2>
            </div>
            <ul className='navigation'> 
                <li className='navActived'><a className="itemHome" href="#home">Home</a></li>
                <li className=''><a className="itemPort" href="#portfolio">Portfolio</a></li>
                <li className=''><a className="itemSkill" href="#habilidades">Habilidades</a></li>
                <li className=''><Link className="item" to='/about'>Acerca de mi <i className="fa-solid fa-square-arrow-up-right"></i></Link></li>
                <li className=''><Link className="item" to='/contact'>Contacto <i className="fa-solid fa-square-arrow-up-right"></i></Link></li>
            </ul>
        </div>
    );
};

export default Navbar;