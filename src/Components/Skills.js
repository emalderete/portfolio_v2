import React, { useRef } from 'react';
import '../App.css';

const Skills = () => {
    const refSkillsMeterContainer = useRef();
    const objectSkills = [
        {name : "HTML 5", icon : "fa-brands fa-html5 icons", value : 90},
        {name : "CSS 3", icon : "fa-brands fa-css3 icons", value : 72},
        {name : "JavaScript", icon : "fa-brands fa-square-js icons", value : 67},
        {name : "ReactJS", icon : "fa-brands fa-react icons", value : 64},
        {name : "Bootstrap", icon : "fa-brands fa-bootstrap icons", value : 91},
        {name : "NodeJS", icon : "fa-brands fa-node icons", value : 54}
    ];

    function calcPercentage(value) {
        return 730 / 100 * value;
    };

    return (
        <section className='skillsContainerMargin'>
            <a className='' name='skills' href='/home'> </a>
            <article className='skillsContainer'>
                <h2 className='skillsMainTitle'>Habilidades</h2>
                <div className='separator' id='skillsSeparator'></div>
                <div ref={refSkillsMeterContainer} className='skillsMeterContainer'>
                    {
                        objectSkills.map((skill, index)=>{
                            return(
                                <div key={index} className='skillsMeter'>
                                    <div className='skillsMeterOuter'>
                                        <svg className='progressMeter' xmlns='http://www.w3.org/2000/svg' version='1.1' width='300px' height='300px'>
                                            <defs>
                                               <linearGradient id='GradientColor'>
                                                  <stop offset='0%' stopColor='#e91e63' />
                                                  <stop offset='100%' stopColor='#673ab7' />
                                               </linearGradient>
                                            </defs>
                                            <circle style={{strokeDasharray: 2000 + calcPercentage(skill.value)}} className='progressColor' cx='150' cy='150' r='118' strokeLinecap='round' />
                                        </svg>
                                        <div className='skillsMeterInner'>
                                            <div><i className={skill.icon}></i></div>
                                            <div className='skillNameDisplayed'>{skill.name}</div>
                                            <div className='percentageDisplayed'>{skill.value}%</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </article>
        </section>
    );
};

export default Skills;