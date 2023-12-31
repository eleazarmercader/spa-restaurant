import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useCart } from './useCart';

function MenuItem({ item }) {
    const { addToCart } = useCart();
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToCart = () => {
        addToCart(item);
        setIsAdded(true);
    };

    return (
        <div className="card">
            <img
                src={item.image}
                alt={item.name}
                className="card-img-top transition-transform duration-300 ease-in-out md:hover:scale-105"
            />
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <Link to={`/detail/${item.id}`} className="info-btn">
                    Description & ingredients
                </Link>
                <p className="card-text font-semibold mt-2">CHF {item.price}</p>
                <div className='flex justify-around'>
                    {!isAdded ? (
                        <button onClick={handleAddToCart} className="add-btn">
                            Add to Cart
                        </button>
                    ) : (
                        <div>
                            <button onClick={handleAddToCart} className="add-btn">
                                Add 1+
                            </button>
                            <Link to="/cart" className="ml-4 info-btn">
                                Go to cart
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

MenuItem.propTypes = {
	item: PropTypes.shape({
			id: PropTypes.number.isRequired,
			image: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired
	}).isRequired
};

export default MenuItem;