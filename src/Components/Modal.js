import React from 'react';

const Modal = () => {
    return (
        <section>
            <div className='modal fade' id='project1' tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
                <div className='modal-dialog modal-dialog-centered modal-xl'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title' id='exampleModalLabel'>Behind The Code</h5>
                            <button type='button' className='cross-button-light' data-bs-dismiss='modal' aria-label='Close'><i className='fa-solid fa-xmark'></i></button>
                        </div>
                        <div className='modal-body'>
                            <div className='carousel-container'>
                                <div id='project-1' className='carousel slide' data-bs-ride='carousel'>
                                    <div className='carousel-indicators'>
                                        <button type='button' data-bs-target='#project-1' data-bs-slide-to='0' className='active' aria-current='true' aria-label='Slide 1'></button>
                                        <button type='button' data-bs-target='#project-1' data-bs-slide-to='1' aria-label='Slide 2'></button>
                                        <button type='button' data-bs-target='#project-1' data-bs-slide-to='2' aria-label='Slide 3'></button>
                                        <button type='button' data-bs-target='#project-1' data-bs-slide-to='3' aria-label='Slide 4'></button>
                                    </div>
                                    <div className='carousel-inner'>
                                        <div className='carousel-item active'>
                                            <img src='./img/image/project1-2.jpg' class='d-block w-100' />
                                        </div>
                                        <div className='carousel-item'>
                                            <img src='./img/image/project1-1.jpg' class='d-block w-100' />
                                        </div>
                                        <div className='carousel-item'>
                                            <img src='./img/image/project1-3.jpg' class='d-block w-100' />
                                        </div>
                                        <div className='carousel-item'>
                                            <img src='./img/image/project1-4.jpg' class='d-block w-100' />
                                        </div>
                                    </div>
                                    <button className='carousel-control-prev' type='button' data-bs-target='#project-1' data-bs-slide='prev'>
                                  <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                                  <span className='visually-hidden'>Previous</span>
                                </button>
                                    <button className='carousel-control-next' type='button' data-bs-target='#project-1' data-bs-slide='next'>
                                  <span className='carousel-control-next-icon' aria-hidden='true'></span>
                                  <span className='visually-hidden'>Next</span>
                                </button>
                                </div>
                            </div>
                            <div className='modal-project-text-container'>
                                <h5 className='modal-subtitle'>Descripción</h5>
                                <div className='separator-b'></div>
                                <p className='modal-text'>
                                </p>
                                <a className='links-bold btn modal-page-button' href='https://behindthecode.netlify.app' target='blank' rel='noopener noreferrer'>Sitio web</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Modal;