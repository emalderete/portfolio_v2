import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const MiniAbout = () => {
    return (
        <section className='miniAboutContainer'>
            <div className='miniAbout'>
                <h2>Acerca de mi...</h2>
                <div className='miniAboutTextContainer'>
                    <p className='miniAboutText'>Soy un apasionado por la informática, los componentes, los videojuegos y la música. 
                    En mis ratos libres disfruto de un buen café mientras practico escritura de código y razonamiento lógico. 
                    Mis objetivos son seguir aprendiendo nuevas tecnologías y desarrollar habilidades que me permitan expandir mis 
                    horizontes cada vez más, creo firmemente que el éxito es una meta alcanzable mediante el constante progreso y avance.</p>
                    <Link className='links' to="/about">Más información...</Link>
                </div>
            </div>
        </section>
    );
};

export default MiniAbout;