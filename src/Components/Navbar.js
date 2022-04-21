import React, { useEffect } from 'react';
import '../App.css';

const Navbar = () => {

    // useEffect(()=>{
    //      window.addEventListener('scroll', ()=>{
    //         const scroll = window.scrollY;
    //         console.log(scroll); 
    //      });
    // }, []);

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
                <li className=''><a className="item" href="./about.html">Acerca de mi <i className="fa-solid fa-square-arrow-up-right"></i></a></li>
                <li className=''><a className="item" href="./about.html">Contacto <i className="fa-solid fa-square-arrow-up-right"></i></a></li>
            </ul>
        </div>
    );
};

export default Navbar;