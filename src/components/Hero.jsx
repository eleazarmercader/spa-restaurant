import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <Carousel>
            <Carousel.Item className="w-full h-screen">
                <img
                    className="d-block w-full h-full object-cover"
                    src="/assets/slide-1.png"
                    alt="First slide"
                />
                <Carousel.Caption className="absolute bottom-0 p-4">
                    <div className="bg-black bg-opacity-50 max-w-max p-4 mb-80 rounded">
                        <h2>Welcome to Silk & Olive</h2>
                        <p className="text-white text-sm mb-8">Where cultures meet in every dish</p>
                        <Link to="/menu" className="checkout-btn">I want to know more</Link>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
			<Carousel.Item className="w-full h-screen">
                <img
                    className="d-block w-full h-full object-cover md:object-center"
                    src="/assets/slide-2.png"
                    alt="Second slide"
                />
                <Carousel.Caption className="absolute bottom-0 p-4">
                    <div className="bg-black bg-opacity-50 max-w-max p-4 mb-80 rounded">
                        <h3>Flavor Without Borders</h3>
                        <p className="text-white text-sm mb-8">Discover our Chef&#39;s unique creations</p>
                        <Link to="/menu" className="checkout-btn">Our delicious menu</Link>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="w-full h-screen">
                <img
                    className="d-block w-full h-full object-cover md:object-center"
                    src="/assets/slide-3.png"
                    alt="Third slide"
                />
                <Carousel.Caption className="absolute bottom-0 p-4">
                    <div className="bg-black bg-opacity-50 max-w-max p-4 mb-80 rounded">
                        <h3>Freshness in Every Bite</h3>
                        <p className="text-white text-sm mb-8">Ingredients lovingly selected</p>
                        <Link to="/menu" className="checkout-btn">See sugestions</Link>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Hero;
