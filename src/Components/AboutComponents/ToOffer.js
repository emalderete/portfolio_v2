import React from 'react';
import '../../App.css';

const ToOffer = () => {
    return (
        <section className='toOfferContainer'>
            <article className='toOffer backgroundGradientDark'>
                <h2 className='infoTitle'>¿Qué puedo ofrecer?</h2>
                <div className='infoText'>
                    <p>
                        Mi motivación por el desarrollo personal y profesional me impulsa a aceptar nuevos desafíos que me permitan ganar nuevos conocimientos, por lo tanto puedo ofrecer mi talento para el desarrollo de soluciones innovadoras que ayuden a optimizar el crecimiento
                        de mis clientes.<br /> Algunas funciones que puedo desarrollar son:
                    </p>
                    <ul className='toOfferList'>
                        <li>Desarrollo de formularios y sus correspondientes validaciones</li>
                        <li>Servicio de login y register</li>
                        <li>Sistema CRUD (Create, Read, Update, Delete) para servicios que requieran la carga, modificación y eliminación de datos</li>
                        <li>Creación y mantenimiento de bases de datos</li>
                        <li>Integración de servicios adicionales o elementos embebidos en el mismo sitio web (mapas, reproductores, etc.)</li>
                        <li>Diseño y estética personalizada (uso de animaciones, efectos visuales, etc.)</li>
                        <li>Diseño de interfaces intuitivas para el usuario</li>
                    </ul>
                </div>
            </article>
        </section>
    );
};

export default ToOffer;