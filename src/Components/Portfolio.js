import React from 'react';
import ImgProject1Image2 from '../Img/image/project1-2.jpg';
import ImgProject2Image1 from '../Img/image/project2-1.jpg';
import ImgProject3Image1 from '../Img/image/project3-1.jpg';

const Portfolio = () => {
    return (
        <section className='portfolioContainer'>
            <article className='portfolio'>
                <div className='portfolioTitle'>
                    <h2>Portfolio</h2>
                    <div className='separator'></div>
                </div>
                <div className='projectsContainer'>
                    <div className='projects'>
                        <div className='projectsMargin'>
                            <div className='projectsImgMainContainer'>
                                <img className='projectsImgMain' src={ImgProject1Image2} alt=''></img>
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
        </section>
    );
};

export default Portfolio;