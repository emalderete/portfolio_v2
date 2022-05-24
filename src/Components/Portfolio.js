import React, { useState, useEffect } from 'react';
import { projects, DataProject } from './Data/ProjectsData';
import '../App.css';

const Portfolio = () => {
    const [gitHover, setGitHover] = useState(false);
    var [modalState, setModalState] = useState(false);
    var [modalInfo, setModalInfo] = useState([]);
    const modalStyles = {showModal : {opacity: '1', pointerEvents : 'all', transition : '160ms'}, closeModal : {opacity: '0', pointerEvents : 'none', transition : '200ms', transform : 'scale(1.2)'}};

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
                            {conditionalRender()}
                        </div>
                        <div className='modalInfo'>
                            <div className='modalInfoTextContainer'>
                                <h3 className='modalSubtitle'>Descripción:</h3>
                                <p className='modalText'>{modalInfo.fullDesc}</p>
                             </div>
                            <div className='modalButtons'>
                                <a className='modalSeePage' href={modalInfo.linkPage} rel='noreferrer noopener' target='_blank'>
                                    Ver sitio <i className="fa-solid fa-square-arrow-up-right"></i>
                                </a>
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