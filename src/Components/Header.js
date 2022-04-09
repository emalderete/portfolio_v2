import React from 'react';
import '../App.css';
import profile from '../Img/image/profile.jpg';

const Header = () => {
    return (
        <section>
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