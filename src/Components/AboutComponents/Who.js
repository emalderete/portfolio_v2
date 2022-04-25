import React from 'react';
import '../../App.css';

const Who = () => {
    return (
        <section className='whoContainer'>
            <article className='who backgroundGradientDark'>
                <h2 className='infoTitle'>¿Quién soy?</h2>
                <p className='infoText'>
                    Soy un apasionado por la informática, los componentes, los videojuegos y la música. En mis ratos libres disfruto de un buen café mientras codeo.<br /> Mis objetivos son seguir aprendiendo
                    nuevas tecnologías y desarrollar habilidades que me permitan expandir mis horizontes cada vez más, creo firmemente que el éxito es una meta alcanzable mediante el constante progreso y avance.
                </p>
            </article>
        </section>
    );
};

export default Who;