import React, { useState, useEffect } from 'react';
import ImgProject2Image1 from '../Img/image/project2-1.jpg';
import ImgProject3Image1 from '../Img/image/project3-1.jpg';
import project1_1 from '../Img/image/project1-1.jpg';
import project1_2 from '../Img/image/project1-2.jpg';
import project1_3 from '../Img/image/project1-3.jpg';
import project1_4 from '../Img/image/project1-4.jpg';
import '../App.css';

const Portfolio = () => {
    const [gitHover, setGitHover] = useState(false);
    var [modalState, setModalState] = useState(true);
    const handlerModalStyles = {closeModal : {opacity : '0', pointerEvents : 'none'}, showModal : {opacity : '1', pointerEvents : 'all'}}

    function mouseOver(){
        setGitHover(true);
    };

    function mouseOut(){
        setGitHover(false);
    };

    function showModal(){
        setModalState(true);
    };

    function closeModal(){
        setModalState(false);
    };

    return (
        <section className='portfolioContainer'>
            <a name='portfolio' href='#'></a>
            <article className='portfolio'>
                <div className='portfolioTitle'>
                    <h2>Portfolio</h2>
                    <div className='separator'></div>
                </div>
                <div className='projectsContainer'>
                    <a onClick={showModal} style={{textDecoration : 'none'}}>
                        <div className='projects'>
                            <div className='projectsMargin'>
                                <div className='projectsImgMainContainer'>
                                    <img className='projectsImgMain' src={project1_2} alt=''></img>
                                </div>
                                <div className='projectsTextContainer'>
                                    <div>
                                        <h3 className='projectsTitle'>Blog sobre programación</h3>
                                        <p className='projectsText'>Se trata de un proyecto evaluativo que he realizado en equipo con algunos compañeros del instituto.</p>
                                    </div>
                                </div>
                            </div>
                            <p className='projectsMoreInfoText'>Toca para más info...</p>
                        </div>
                    </a>
                    <div className='projects'>
                        <div className='projectsMargin'>
                            <div className='projectsImgMainContainer'>
                                <img className='projectsImgMain' src={ImgProject2Image1} alt=''></img>
                            </div>
                            <div className='projectsTextContainer'>
                                <div>
                                    <h3 className='projectsTitle'>Trabajo Práctico Steam Rolling Code</h3>
                                    <p className='projectsText'>Proyecto evaluativo realizado con compañeros de equipo como exámen final integrador. Basado en el sitio web Steam.</p>
                                </div>
                            </div>
                        </div>
                        <p className='projectsMoreInfoText'>Toca para más info...</p>
                    </div>
                    <div className="projects">
                        <div className='projectsMargin'>
                            <div className='projectsImgMainContainer'>
                                <img className='projectsImgMain' src={ImgProject3Image1} alt=''></img>
                            </div>
                            <div className='projectsTextContainer'>
                                <div>
                                    <h3 className='projectsTitle'>Curriculum Vitae versión web</h3>
                                    <p className='projectsText'>Mi propio curriculum de experiencias laborales y estudios académicos pero en versión web.</p>
                                </div>
                            </div>
                        </div>
                        <p className='projectsMoreInfoText'>Toca para más info...</p>
                    </div>
                </div>
            </article>
            <article style={modalState ? handlerModalStyles.showModal : handlerModalStyles.closeModal} className='modalContainer'>
                <div className='modal'>
                    <div className='modalHeader'>
                        <h2 className='modalTitle'>Texto de prueba</h2>
                        <button onClick={closeModal} className='modalCloseButton'><i className="fa-solid fa-xmark"></i></button>
                    </div>
                    <hr className='modalSeparator'/>
                    <div className='modalContent'>
                        <div className='modalGallery'>
                            <ul className='modalGallerySlider'>
                                <li id='slide1'><img src={project1_2} alt='' /></li>
                                <li id='slide2'><img src={project1_1} alt='' /></li>
                                <li id='slide3'><img src={project1_3} alt='' /></li>
                                <li id='slide4'><img src={project1_4} alt='' /></li>
                            </ul>
                            <ul className='modalGalleryPreviewer'>
                                <li><a href='#slide1'><img src={project1_2} alt='' /></a></li>
                                <li><a href='#slide2'><img src={project1_1} alt='' /></a></li>
                                <li><a href='#slide3'><img src={project1_3} alt='' /></a></li>
                                <li><a href='#slide4'><img src={project1_4} alt='' /></a></li>
                            </ul>
                        </div>
                        <div className='modalInfo'>
                            <div className='modalInfoTextContainer'>
                                <h3 className='modalSubtitle'>Descripción:</h3>
                                <p className='modalText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, commodi nemo harum nisi tempora odit,
                                 autem, inventore quasi perspiciatis beatae incidunt. Rerum pariatur, expedita quia consectetur esse minima 
                                 reprehenderit ex dolore voluptatem nihil minus, quidem sed dolorum! Hic quas earum sint reprehenderit assumenda 
                                 deleniti! Aut dolorum accusantium quaerat dicta rerum?</p>
                             </div>
                            <div className='modalButtons'>
                                <a className='modalSeePage' href='https://www.google.com' rel='noreferrer noopener' target='_blank'>
                                    Ver sitio <i className="fa-solid fa-square-arrow-up-right"></i>
                                </a>
                                <a onMouseOver={mouseOver} onMouseOut={mouseOut} className='modalSeeCode' href='https://www.google.com' rel='noreferrer noopener' target='_blank'>
                                    <div style={gitHover ? {width : '9.8rem'} : null} className='modalPositionIconGit'>
                                        <i className='fa-brands modalIconGit fa-github-square'></i>
                                        <p className={gitHover ? 'modalIconGitText' : 'modalIconGitText effectOpacity'}>Ver código</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default Portfolio;