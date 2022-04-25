import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import profile from '../Img/image/profile.jpg';

function About(){

    const [ isActiveHome, setIsActiveHome ] = useState(false);
    const [ isActiveAbout, setIsActiveAbout] = useState(false);
    const [ isActiveContact, setIsActiveContact ] = useState(false);

    const aboutStyles = {
        name : {color : '#f18593'},
        profile : { backgroundColor : '#f18593'},
        navbar : { backgroundColor : '#f18593'},
        itemHover : { backgroundColor : '#565656'},
        itemHoverLink : { color : '#e0e0e0'}
    };

    function mouseOverHandlerHome() {
        setIsActiveHome(true);
    };

    function mouseOutHandlerHome(){
        setIsActiveHome(false);
    }

    function mouseOverHandlerAbout() {
        setIsActiveAbout(true);
    }

    function mouseOutHandlerAbout(){
        setIsActiveAbout(false);
    }

    function mouseOverHandlerContact() {
        setIsActiveContact(true);
    }

    function mouseOutHandlerContact() {
        setIsActiveContact(false);
    }

    return (
        <section>
            {/* ------- Header y Navbar de la página de la página About --------  */}
            <div>
                <div className="headerContainerBig">
                    <i id="codeLogo" className="fa-solid fa-code"></i>
                    <div className="nameContainer">
                        <h1 style={aboutStyles.name} className='name'>¡Hola! Soy Emanuel Alderete.<br/>Desarrollador FullStack.</h1>
                    </div>
                </div>
                <div className='profileContainer'>
                    <img style={aboutStyles.profile} className='profile' src={profile} alt=''></img>
                </div>
            </div>
            <div style={aboutStyles.navbar} className='navbar'>
                <div className='navbarBrand effectOpacity'>
                    <i className='fa-solid fa-code codeMinilogo'></i>
                    <h2 className='miniName effectSpacingLetter'>Emanuel Alderete</h2>
                </div>
                <ul className='navigation'> 
                    <li onMouseOver={mouseOverHandlerHome} onMouseOut={mouseOutHandlerHome} style={isActiveHome ? aboutStyles.itemHover : null} className=''><Link style={isActiveHome ? aboutStyles.itemHoverLink : null} to='/' className='itemHome'>Home <i className="fa-solid fa-square-arrow-up-right"></i></Link></li>
                    <li onMouseOver={mouseOverHandlerAbout} onMouseOut={mouseOutHandlerAbout} style={isActiveAbout ? aboutStyles.itemHover : null} className=''><Link style={isActiveAbout ? aboutStyles.itemHoverLink : null} className="item" to='/about'>Acerca de mi</Link></li>
                    <li onMouseOver={mouseOverHandlerContact} onMouseOut={mouseOutHandlerContact} style={isActiveContact ? aboutStyles.itemHover : null} className=''><Link style={isActiveContact ? aboutStyles.itemHoverLink : null} className="item" to='/contact'>Contacto <i className="fa-solid fa-square-arrow-up-right"></i></Link></li>
                </ul>
            </div>
        </section>
    );
};

export default About;