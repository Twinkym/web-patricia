import React from 'react';


const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <h2>Sobre mi</h2>
                <div className="about-content">
                <img className='profile-image' src={`${process.env.PUBLIC_URL}/img/FOTO_CV_PATI_2020_COPIA.jpg`} alt="Patricia" />

                    <p>Patricia ha sido auxiliar administrativa durante más de 10 años....</p>
                </div>
            </div>
        </section>
    );
};

export default About;
