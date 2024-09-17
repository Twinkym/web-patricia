import React from 'react';
import { Carousel } from 'react-bootstrap';

const ImageSlider = () => {
    return (
        <div className="image-slider-container">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slider-image"
                        src="https://picsum.photos/id/237/800/600"
                        alt="Historia de Excel"
                    />
                    <Carousel.Caption>
                        <h3>Historia de Excel en la gestión de datos</h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slider-image"
                        src="https://picsum.photos/200/300/?blur=6"
                        alt="El papel de las Administrativas" 
                    />

                    <Carousel.Caption>
                        <h3>El papel de las administrativas.</h3>
                        <p>El papel de las administrativas.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
        
    );
};

export default ImageSlider;