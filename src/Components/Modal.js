import React, { useState, useEffect } from 'react';
import { alignPropType } from 'react-bootstrap/esm/types';
import '../App.css';
import project1_2 from '../Img/image/project1-2.jpg';

const Modal = () => {
    const [gitHover, setGitHover] = useState(false);

        const mouseOver = ()=>{
            setGitHover(true);
        };

        const mouseOut = ()=>{
            setGitHover(false);
        };

    return (
        <section className='modalContainer'>
            <article className='modal'>
                <h2 className='modalTitle'>Texto de prueba</h2>
                <hr className='modalSeparator'/>
                <div className='modalContent'>
                    <div className='modalGallery'>
                        <img className='modalGalleryImg'></img>
                    </div>
                    <div className='modalInfo'>
                        <h3 className='modalSubtitle'>Descripción:</h3>
                        <p className='modalText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, commodi nemo harum nisi tempora odit,
                         autem, inventore quasi perspiciatis beatae incidunt. Rerum pariatur, expedita quia consectetur esse minima 
                         reprehenderit ex dolore voluptatem nihil minus, quidem sed dolorum! Hic quas earum sint reprehenderit assumenda 
                         deleniti! Aut dolorum accusantium quaerat dicta rerum?</p>
                        <a onMouseOver={mouseOver} onMouseOut={mouseOut} className='modalSeeCode' href='https://www.google.com' rel='noreferrer noopener' target='_blank'>
                            <div style={gitHover ? {width : '9.8rem'} : null} className='modalPositionIconGit'>
                                <i className='fa-brands modalIconGit fa-github-square'></i>
                                <p className={gitHover ? 'modalIconGitText' : 'modalIconGitText effectOpacity'}>Ver código</p>
                            </div>
                        </a>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default Modal;