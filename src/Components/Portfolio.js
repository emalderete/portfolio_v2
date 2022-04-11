import React from 'react';
import ImgProject1of2 from '../Img/image/project1-2.jpg';

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
                        <div className='projectMargin'>
                            <div className='projectsImgMainContainer'>
                                <img className='projectsImgMain' src={ImgProject1of2} alt=''></img>
                            </div>
                        </div>
                    </div>
                    <div className="projects"></div>
                    <div className="projects"></div>
                </div>
            </article>
        </section>
    );
};

export default Portfolio;