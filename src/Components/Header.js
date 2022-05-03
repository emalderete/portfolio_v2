import React from 'react';
import '../App.css';
import profile from '../Img/image/profile.jpg';

const Header = () => {

    document.body.onload = ()=>{window.scrollTo(0, 1);}

    return (
        <section>
            <a name='home' href='#'></a>
            <div className="headerContainerBig">
                <i id="codeLogo" className="fa-solid fa-code"></i>
                <div className="nameContainer">
                    <h1 className="name">¡Hola! Soy Emanuel Alderete.<br/>Desarrollador FullStack.</h1>
                </div>
            </div>
            <div className='profileContainer'>
                <img className='profile' src={profile} alt=''></img>
            </div>
        </section>
    );
};

export default Header;