import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <Carousel>
            <Carousel.Item className="h-128 max-h-screen">
                <img
                    className="d-block w-100"
                    src="/assets/slide-1.png"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <div className="bg-black bg-opacity-50 max-w-max p-4 mb-80 rounded">
                        <h2>Welcome to Silk & Olive</h2>
                        <p className="text-white text-sm mb-8">The place where cultures meet in every dish</p>
                        <Link to="/menu" className="checkout-btn">I want to know more</Link>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
			<Carousel.Item className="h-128 max-h-screen">
                <img
                    className="d-block w-100"
                    src="/assets/slide-2.png"
                    alt="Second slide"
                />
            <Carousel.Caption>
                <div className="bg-black bg-opacity-50 max-w-max p-4 mb-80 rounded">
                    <h3>Flavor Without Borders</h3>
                    <p className="text-white text-sm mb-8">Discover our Chef&#39;s unique creations</p>
                    <Link to="/menu" className="checkout-btn">Our delicious menu</Link>
                </div>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="h-128 max-h-screen">
                <img
                    className="d-block w-100"
                    src="/assets/slide-3.png"
                    alt="Third slide"
                />
            <Carousel.Caption>
                <div className="bg-black bg-opacity-50 max-w-max p-4 mb-80 rounded">
                    <h3>Freshness in Every Bite</h3>
                    <p className="text-white text-sm mb-8">Ingredients lovingly selected for perfect dishes</p>
                    <Link to="/menu" className="checkout-btn">See sugestions</Link>
                </div>
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Hero;
