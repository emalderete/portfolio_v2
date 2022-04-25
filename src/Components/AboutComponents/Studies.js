import React from 'react';
import '../../App.css';

const Studies = () => {
    return (
        <section className='studiesContainer'>
            <article className='studies'>
                <p className='infoText'>
                    A lo largo de mi vida he estudiado en diferentes lugares, algunas fueron carreras inconclusas, he cursado diferentes asignaciones pero ninguna ha despertado tanto mi pasión como lo ha hecho la programación y desarrollo informático.<br />Mi
                    principal formación fue en <a class="links" href="https://rollingcodeschool.com" target="blank" rel="noopener noreferrer">Rolling Code School</a> donde aprendí desarrollo FullStack y las tecnologías de HTML 5 <i class="fa-brands fa-html5"></i>,
                    CSS 3 <i class="fa-brands fa-css3"></i>, JavaScript <i class="fa-brands fa-js-square "></i> y React <i class="fa-brands fa-react"></i>, entre otras tecnologías. En ese momento sentí que descubrí un nuevo mundo que antes estaba oculto ante mis ojos, la
                    programación es algo que todos deberían aprender en algún momento de su vida.
                </p>
                <h2 className='infoTitle'>¿Dónde estudié?</h2>
            </article>
        </section>
    );
};

export default Studies;