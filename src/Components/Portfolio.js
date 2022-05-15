import React, { useState, useEffect } from 'react';
import ImgProject2Image1 from '../Img/image/project2-1.jpg';
import ImgProject3Image1 from '../Img/image/project3-1.jpg';
import project1_1 from '../Img/image/project1-1.jpg';
import project1_2 from '../Img/image/project1-2.jpg';
import project1_3 from '../Img/image/project1-3.jpg';
import project1_4 from '../Img/image/project1-4.jpg';
import project2_1 from '../Img/image/project2-1.jpg';
import project2_2 from '../Img/image/project2-2.jpg';
import project2_3 from '../Img/image/project2-3.jpg';
import project2_4 from '../Img/image/project2-4.jpg';
import project3_1 from '../Img/image/project3-1.jpg';
import { projects } from './Data/ProjectsData';
import '../App.css';

const Portfolio = () => {
    const [gitHover, setGitHover] = useState(false);
    var [modalState, setModalState] = useState(false);
    var [modalInfo, setModalInfo] = useState([]);
    const modalStyles = {showModal : {opacity: '1', pointerEvents : 'all', transition : '160ms'}, closeModal : {opacity: '0', pointerEvents : 'none', transition : '200ms', transform : 'scale(1.2)'}}

    function mouseOver(){
        setGitHover(true);
    };

    function mouseOut(){
        setGitHover(false);
    };

    function showModal(data){
        setModalState(true);
        exportData(data);
    };

    function closeModal(){
        setModalState(false);
        setModalInfo([]);
    };

    function exportData(data){
        let dataPack = [];
        dataPack.push(data.name, data.fullDesc, data.image1, data.image2, data.image3, data.image4, data.linkPage, data.linkGitAvailable);
        if (data.linkGitAvailable) {
            dataPack.push(data.linkGit);
        };
        setModalInfo(dataPack);
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
                    {projects.map((project, index)=>{
                    return (
                    <a key={index} onClick={()=>{showModal(project)}} style={{textDecoration : 'none'}}>
                        <div className='projects'>
                            <div className='projectsMargin'>
                                <div className='projectsImgMainContainer'>
                                    <img className='projectsImgMain' src={project.image1} alt=''></img>
                                </div>
                                <div className='projectsTextContainer'>
                                    <div>
                                        <h3 className='projectsTitle'>{project.name}</h3>
                                        <p className='projectsText'>{project.shortDesc}</p>
                                    </div>
                                </div>
                            </div>
                            <p className='projectsMoreInfoText'>Toca para más info...</p>
                        </div>
                    </a>

                    )})}
                </div>
            </article>
            <article style={modalState ? modalStyles.showModal : modalStyles.closeModal} className='modalContainer'>
                <div className='modal'>
                    <div className='modalHeader'>
                        <h2 className='modalTitle'>{modalInfo[0]}</h2>
                        <button onClick={closeModal} className='modalCloseButton'><i className="fa-solid fa-xmark"></i></button>
                    </div>
                    <hr className='modalSeparator'/>
                    <div className='modalContent'>
                        <div className='modalGallery'>
                            <ul className='modalGallerySlider'>
                                <li id='slide1'><img src={modalInfo[2]} alt='' /></li>
                                <li id='slide2'><img src={modalInfo[3]} alt='' /></li>
                                <li id='slide3'><img src={modalInfo[4]} alt='' /></li>
                                <li id='slide4'><img src={modalInfo[5]} alt='' /></li>
                            </ul>
                            <ul className='modalGalleryPreviewer'>
                                <li><a href='#slide1'><img src={modalInfo[2]} alt='' /></a></li>
                                <li><a href='#slide2'><img src={modalInfo[3]} alt='' /></a></li>
                                <li><a href='#slide3'><img src={modalInfo[4]} alt='' /></a></li>
                                <li><a href='#slide4'><img src={modalInfo[5]} alt='' /></a></li>
                            </ul>
                        </div>
                        <div className='modalInfo'>
                            <div className='modalInfoTextContainer'>
                                <h3 className='modalSubtitle'>Descripción:</h3>
                                <p className='modalText'>{modalInfo[1]}</p>
                             </div>
                            <div className='modalButtons'>
                                <a className='modalSeePage' href={modalInfo[6]} rel='noreferrer noopener' target='_blank'>
                                    Ver sitio <i className="fa-solid fa-square-arrow-up-right"></i>
                                </a>
                                <a onMouseOver={mouseOver} onMouseOut={mouseOut} className='modalSeeCode' href={modalInfo[8]} rel='noreferrer noopener' target='_blank'>
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