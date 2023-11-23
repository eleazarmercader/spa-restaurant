import { Carousel } from 'react-bootstrap';

function Hero() {
    return (
        <Carousel>
            <Carousel.Item className="h-128 max-h-screen">
                <img
                    className="d-block w-100"
                    src="/assets/slide-1.png"
                    alt="First slide"
                />
                {/* <Carousel.Caption>
                    <h3 className='primary'>Welcome to Silk & Olive</h3>
                    <p>Donde las culturas se encuentran en cada plato</p>
                    <button className="button">Learn More</button>
                </Carousel.Caption> */}
            </Carousel.Item>
						<Carousel.Item className="h-128 max-h-screen">
                <img
                    className="d-block w-100"
                    src="/assets/slide-2.png"
                    alt="Second slide"
                />
            </Carousel.Item>
						<Carousel.Item className="h-128 max-h-screen">
                <img
                    className="d-block w-100"
                    src="/assets/slide-3.png"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default Hero;
