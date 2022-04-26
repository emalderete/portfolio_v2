import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import profile from '../Img/image/profile.jpg';
import Who from '../Components/AboutComponents/Who';
import Studies from '../Components/AboutComponents/Studies';
import ToOffer from '../Components/AboutComponents/ToOffer';
import Different from '../Components/AboutComponents/Different';
import Trust from '../Components/AboutComponents/Trust';
import Footer from '../Components/Footer';

const About = ()=>{
    const [ isActiveHome, setIsActiveHome ] = useState(false);
    const [ isActiveContact, setIsActiveContact ] = useState(false);

    const aboutStyles = {
        name : {color : '#f18593'},
        profile : { backgroundColor : '#f18593'},
        navbar : { backgroundColor : '#f18593'},
        itemActive : { backgroundColor : '#565656'},
        itemActiveLink : { color : '#e0e0e0'},
        currentItemActive : { backgroundColor : '#565656', padding : '1.2rem 1.5rem', margin : '0'}
    };

    function mouseOverHandlerHome() {
        setIsActiveHome(true);
    };

    function mouseOutHandlerHome() {
        setIsActiveHome(false);
    }

    function mouseOverHandlerContact() {
        setIsActiveContact(true);
    }

    function mouseOutHandlerContact() {
        setIsActiveContact(false);
    }

    return (
        <section>
            {/* ------- Header y Navbar de la página About --------  */}
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
                    <li onMouseOver={mouseOverHandlerHome} onMouseOut={mouseOutHandlerHome} style={isActiveHome ? aboutStyles.itemActive : null} className=''>
                        <NavLink style={isActiveHome ? aboutStyles.itemActiveLink : null} to='/'>Home <i className="fa-solid fa-square-arrow-up-right"></i></NavLink>
                    </li>
                    <li style={aboutStyles.currentItemActive} className=''>
                        <NavLink style={aboutStyles.itemActiveLink} to='/about'>Acerca de mi</NavLink>
                    </li>
                    <li onMouseOver={mouseOverHandlerContact} onMouseOut={mouseOutHandlerContact} style={isActiveContact ? aboutStyles.itemActive : null} className=''>
                        <NavLink style={isActiveContact ? aboutStyles.itemActiveLink : null} to='/contact'>Contacto <i className="fa-solid fa-square-arrow-up-right"></i></NavLink>
                    </li>
                </ul>
            </div>
            {/* ------- Componentes de la página About --------  */}
            <Who></Who>
            <Studies></Studies>
            <ToOffer></ToOffer>
            <Different></Different>
            <Trust></Trust>
            <Footer></Footer>
        </section>
    );
};

export default About;