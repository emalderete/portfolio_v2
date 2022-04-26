import React from 'react';
import '../../App.css';

const Trust = () => {

    const boldAndRedText = {
        fontWeight : 'bold',
        color : '#d82f45'
    };

    return (
        <section className='trustContainer'>
            <article className='trust backgroundGradientDark'>
                <h2 className='infoTitle'>¿Por qué confiar en mí?</h2>
                <p className='infoText'>
                    Mi trabajo incluye mi propia garantía personal con la cual <span style={boldAndRedText}>aseguro la satisfacción del cliente</span> mediante un producto de calidad, si dicho producto no cumple con las espectativas o no asegura la satisfacción cumplo con mi garantía reintegrando el monto
                    total o parcial abonado o bien realizando los ajustes necesarios sin cargo adicional.
                </p>
            </article>
        </section>
    );
};

export default Trust;