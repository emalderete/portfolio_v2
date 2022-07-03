import React, { useState } from 'react';
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
        let dataPack = new DataProject(
            data.name,
            data.shortDesc,
            data.fullDesc,
            data.image1Available,
            data.image2Available,
            data.image3Available,
            data.image4Available,
            data.image1,
            data.image2,
            data.image3,
            data.image4,
            data.videoAvailable,
            data.video,
            data.linkPage,
            data.linkGitAvailable,
            data.linkGit);
        setModalInfo(dataPack);
    };

    function conditionalRender(){
        if (modalInfo.image1Available === true && modalInfo.image2Available === true && modalInfo.image3Available === true && modalInfo.image4Available === true){
            return (
                <div>
                    <ul className='modalGallerySlider'>
                            <li id='slide1'><img src={modalInfo.image1} alt='' /></li>
                            <li id='slide2'><img src={modalInfo.image2} alt='' /></li>
                            <li id='slide3'><img src={modalInfo.image3} alt='' /></li>
                            <li id='slide4'><img src={modalInfo.image4} alt='' /></li>
                        </ul>
                        <ul className='modalGalleryPreviewer'>
                            <li><a href='#slide1'><img src={modalInfo.image1} alt='' /></a></li>
                            <li><a href='#slide2'><img src={modalInfo.image2} alt='' /></a></li>
                            <li><a href='#slide3'><img src={modalInfo.image3} alt='' /></a></li>
                            <li><a href='#slide4'><img src={modalInfo.image4} alt='' /></a></li>
                    </ul>
                </div>
            );
          } else {
              return (
                  <div className='videoContainer'>
                      <iframe className='video' src={modalInfo.video} title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  </div>
              );
          }
    }

    return (
        <section className='portfolioContainer'>
            <a className='' name='portfolio' href='/home'> </a>
            <article className='portfolio'>
                <div className='portfolioTitle'>
                    <h2>Portfolio</h2>
                    <div className='separator'></div>
                </div>
                <div className='projectsContainer'>
                    {projects.map((project, index)=>{
                    return (
                    <button className='contentProjectsCard' key={index} onClick={()=>{showModal(project)}} style={{textDecoration : 'none'}}>
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
                    </button>

                    )})}
                </div>
            </article>
            <article style={modalState ? modalStyles.showModal : modalStyles.closeModal} className='modalContainer'>
                <div className='modal'>
                    <div className='modalHeader'>
                        <h2 className='modalTitle'>{modalInfo.name}</h2>
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
                                <a onMouseOver={mouseOver} onMouseOut={mouseOut} className='modalSeeCode' href={modalInfo.linkGit} rel='noreferrer noopener' target='_blank'>
                                    <div style={gitHover ? {width : '10.5rem'} : null} className={modalInfo.linkGitAvailable ? 'modalPositionIconGit' : 'modalPositionIconGit modalPositionIconGit_noAvailable'}>
                                        <i className='fa-brands modalIconGit fa-github-square'></i>
                                        <p className={gitHover ? 'modalIconGitText' : 'modalIconGitText effectOpacity'}>{modalInfo[7] ? 'Ver código' : 'No disponible'}</p>
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