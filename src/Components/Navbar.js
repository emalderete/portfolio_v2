import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
    const [tracker, setTracker] = useState();

    useEffect(()=>{   
        window.addEventListener('scroll', activeFunctions);
        
        function activeFunctions(){
            scrollTracker();
        };
        
        function scrollTracker(){
            const scroll = window.scrollY;
            setTracker(scroll);
        };

    }, []);

    return (
        <div>
            <div className={tracker >= 288 ? 'phantomContainer' : 'displayNone phantomContainer'}></div>
            <div className={tracker >= 288 ? 'navbar fixedTop' : 'navbar'}>
                <div className={tracker >= 288 ? 'navbarBrand' : 'navbarBrand effectOpacity'}>
                    <i className='fa-solid fa-code codeMinilogo'></i>
                    <h2 className={tracker >= 288 ? 'miniName' : 'miniName effectSpacingLetter'}>Emanuel Alderete</h2>
                </div>
                <ul className='navigation'> 
                    <li className={tracker >= 0 && tracker <= 556 ? 'navActived' : null}><a className="itemHome" href="#home">Home</a></li>
                    <li className={tracker >= 557 && tracker <= 1229 ? 'navActived' : null}><a className="itemPort" href="#portfolio">Portfolio</a></li>
                    <li className={tracker >= 1230 ? 'navActived' : null}><a className="itemSkill" href="#skills">Habilidades</a></li>
                    <li className=''><Link className="item" to='/about'>Acerca de mi <i className="fa-solid fa-square-arrow-up-right"></i></Link></li>
                    <li className=''><Link className="item" to='/contact'>Contacto <i className="fa-solid fa-square-arrow-up-right"></i></Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;