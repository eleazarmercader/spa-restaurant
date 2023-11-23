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
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
            <img className="w-full" src={item.image} alt={item.name} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{item.name}</div>
                <p className="text-gray-700 text-base">{item.description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
            {!isAdded ? (
                <button onClick={handleAddToCart} className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
                    Add to Cart
                </button>
            ) : (
                <>
                    <p>Added to your cart!</p>
                    <button onClick={handleAddToCart} className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">Add another one</button>
                    <Link to="/cart">View Cart</Link>
                </>
            )}
            </div>
        </div>
    );
}

MenuItem.propTypes = {
	item: PropTypes.shape({
			id: PropTypes.number.isRequired,
			image: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired
	}).isRequired
};

export default MenuItem;