import React, { useState } from 'react';
import '../../App.css';

const ConctactForm = () => {
    const [nameState, setNameState] = useState(false);
    const [mailState, setMailState] = useState(false);
    const [phoneState, setPhoneState] = useState(false);
    const [messageState, setMessageState] = useState(false);

    const formStyles = {
        span : {transform : 'translate(-1rem, -1rem)', fontSize : '100%'}
    };

    function evaluateInputState(element, state){
        let element_data = document.querySelector(element);
        if (element_data.value.length > 0){
            state(true);
        } else {
            state(false);
        }
    };

    return (
        <section>
            <div className='shapeTop'></div>
                <article className='contactFormContainer'>
                    <h2 className='contactFormTitle'>Formulario de contacto</h2>
                    <div style={{background : 'linear-gradient(90deg, #84b6f43e 0%, #84b6f4 50%, #84b6f428 100%)', marginBottom : '1rem'}} className='separator'></div>
                    <form className='contactForm'>
                        <label className='contactFormLabel' htmlFor='name'>
                            <span style={nameState ? formStyles.span : null} className='spanInput'>¿Cuál es tu nombre?</span>
                            <input className='formInput' typeof='text' name='name' id='name' required onFocus={()=>{setNameState(true)}} onBlur={()=>{evaluateInputState('#name', setNameState)}}/>
                        </label>
                        <label className='contactFormLabel' htmlFor='mail'>
                            <span style={mailState ? formStyles.span : null} className='spanInput'>Correo electrónico</span>
                            <input className='formInput' typeof='email' name='email' id='email' required onFocus={()=>{setMailState(true)}} onBlur={()=>{evaluateInputState('#email', setMailState)}}/>
                        </label>
                        <label className='contactFormLabel' htmlFor='phone'>
                            <span style={phoneState ? formStyles.span : null} className='spanInput'>Número de teléfono</span>
                            <input className='formInput' typeof='number' name='phone' id='phone' required onFocus={()=>{setPhoneState(true)}} onBlur={()=>{evaluateInputState('#phone', setPhoneState)}}/>
                        </label>
                        <label className='contactFormLabel' htmlFor='message'>
                            <span style={messageState ? formStyles.span : null} className='spanInput'>Escribe tu mensaje</span>
                            <textarea className='formInput formInputTextArea' typeof='text' name='message' id='message' required onFocus={()=>{setMessageState(true)}} onBlur={()=>{evaluateInputState('#message', setMessageState)}}/>
                        </label>
                        <div className='formButtonContainer'>
                            <button className='formButton'>Enviar <i className="fas fa-paper-plane paperPlane1"></i><i className="fas fa-paper-plane paperPlane2"></i></button>
                        </div>
                    </form>
                </article>
            <div className='shapeBottom'></div>
        </section>
    );
};

export default ConctactForm;