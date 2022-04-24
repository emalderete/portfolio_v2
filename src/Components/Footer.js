import React from 'react';
import fbIcon from '../Img/ui/face.png';
import instIcon from '../Img/ui/inst.png';
import inIcon from '../Img/ui/in.png';
import '../App.css';

const Footer = () => {
    return (
        <section className='footerContainer'>
            <article className='footer'>
                <div className='credits'>
                    <span>Background principal de la página creado por <a className='links' href='https://www.freepik.es/vectores/fondo' target='blank' rel='noopener noreferrer'>starline - www.freepik.es</a>, todos los derechos reservados a su creador. </span>
                    <span>La construcción, maquetado y/o codificación de este sitio web corresponden a propiedad de Emanuel Alderete. Todos los derechos reservados.</span>
                </div>
                <div className='social'>
                    <h4>Redes sociales</h4>
                    <ul className='listSocial'>
                        <li className='socialMedia'><a href='https://www.facebook.com/emalderete77' target='_blank' rel='noopener noreferrer'><img className='mediaIcon' src={fbIcon} alt='Mi Facebook' /></a></li>
                        <li className='socialMedia'><a href='https://www.instagram.com/nemeck7/?hl=es-la' target='_blank' rel='noopener noreferrer'><img className='mediaIcon' src={instIcon} alt='Mi Instagram' /></a></li>
                        <li className='socialMedia'><a href='https://www.linkedin.com/in/emanuel-alderete95/' target='_blank' rel='noopener noreferrer'><img className='mediaIcon' src={inIcon} alt='Mi LinkedIn' /></a></li>
                        <li className='socialMedia'><a href='https://github.com/emalderete' target='_blank' rel='noopener noreferrer'><i className='fa-brands fa-github'></i></a></li>
                    </ul>
                </div>
            </article>
        </section>
    );
};

export default Footer;