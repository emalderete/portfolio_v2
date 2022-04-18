import React from 'react';
import '../App.css';

const Skills = () => {
    return (
        <section className='skillsContainerMargin'>
            <article className='skillsContainer'>
                <h2 className='skillsMainTitle'>Habilidades</h2>
                <div className='separator' id='skillsSeparator'></div>
                <div className='skillsMeterContainer'>
                    <div className='skillsMeter'>
                        <div className='skillsMeterOuter'>
                            <svg className='progressMeter' xmlns='http://www.w3.org/2000/svg' version='1.1' width='300px' height='300px'>
                                <defs>
                                   <linearGradient id='GradientColor'>
                                      <stop offset='0%' stop-color='#e91e63' />
                                      <stop offset='100%' stop-color='#673ab7' />
                                   </linearGradient>
                                </defs>
                                <circle className='progressColor' cx='150' cy='150' r='118' stroke-linecap='round' />
                            </svg>
                            <div className='skillsMeterInner'></div>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default Skills;