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
            <img src={item.image} alt={item.name} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">${item.price}</p>
                <Link to={`/detail/${item.id}`} className="btn btn-primary">
                    Details
                </Link>
                {!isAdded ? (
                    <button onClick={handleAddToCart} className="btn btn-secondary">
                        Add to Cart
                    </button>
                ) : (
                    <button onClick={handleAddToCart} className="btn btn-success">
                        Add another one
                    </button>
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
			price: PropTypes.number.isRequired
	}).isRequired
};

export default MenuItem;