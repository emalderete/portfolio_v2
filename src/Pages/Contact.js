import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import profile from '../Img/image/profile.jpg';

const Contact = () => {
    const [ isActiveHome, setIsActiveHome ] = useState(false);
    const [ isActiveAbout, setIsActiveAbout ] = useState(false);
    const [tracker, setTracker] = useState();

    const aboutStyles = {
        name : {color : '#84b6f4'},
        profile : { backgroundColor : '#84b6f4'},
        navbar : { backgroundColor : '#84b6f4'},
        navbarResponsive : { backgroundColor : '#84b6f4', position : 'fixed', top : '0'},
        itemActive : { backgroundColor : '#565656'},
        itemActiveLink : { color : '#e0e0e0'},
        currentItemActive : { backgroundColor : '#565656', padding : '1.2rem 1.5rem', margin : '0'},
        miniName : { fontFamily : 'Hubballi, cursive', letterSpacing : '1px', fontWeight : '800', fontSize : '200%', transition : '900ms'}
    };

    function mouseOverHandlerHome() {
        setIsActiveHome(true);
    };

    function mouseOutHandlerHome() {
        setIsActiveHome(false);
    };

    function mouseOverHandlerAbout() {
        setIsActiveAbout(true);
    };

    function mouseOutHandlerAbout() {
        setIsActiveAbout(false);
    };

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            const scroll = window.scrollY;
            setTracker(scroll);
        });
    }, []);

    return (
        <section>
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
            <div className={tracker >= 288 ? 'phantomContainer' : 'displayNone phantomContainer'}></div>
            <div style={tracker >= 288 ? aboutStyles.navbarResponsive : aboutStyles.navbar} className='navbar'>
                <div className={tracker >= 288 ? 'navbarBrand' : 'navbarBrand effectOpacity'}>
                    <i className='fa-solid fa-code codeMinilogo'></i>
                    <h2 style={aboutStyles.miniName} className={tracker >= 288 ? 'mininame' : 'miniName effectSpacingLetter'}>Emanuel Alderete</h2>
                </div>
                <ul className='navigation'> 
                    <li onMouseOver={mouseOverHandlerHome} onMouseOut={mouseOutHandlerHome} style={isActiveHome ? aboutStyles.itemActive : null} className=''>
                        <NavLink style={isActiveHome ? aboutStyles.itemActiveLink : null} to='/'>Home <i className="fa-solid fa-square-arrow-up-right"></i></NavLink>
                    </li>
                    <li className='' onMouseOver={mouseOverHandlerAbout} onMouseOut={mouseOutHandlerAbout}>
                        <NavLink style={isActiveAbout ? aboutStyles.itemActiveLink : null} to='/about'>Acerca de mi</NavLink>
                    </li>
                    <li style={aboutStyles.currentItemActive} className=''>
                        <NavLink style={aboutStyles.itemActiveLink} to='/contact'>Contacto <i className="fa-solid fa-square-arrow-up-right"></i></NavLink>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Contact;