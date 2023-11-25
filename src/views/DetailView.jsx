import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import menuItemsData from '../data/menuItems.json';
import { useCart } from '../components/useCart';

function DetailView() {
    const { itemId } = useParams();
    const item = menuItemsData.find(i => i.id.toString() === itemId);

    const { addToCart } = useCart();
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToCart = () => {
        addToCart(item);
        setIsAdded(true);
    };

    if (!item) {
        return (
            <div className="text-center mt-16">
                <h2>Item not found</h2>
                <Link to={"/menu"} className="info-btn">
                    Return to menu
                </Link>
            </div>
        );
    }

    return (
        <div className='container mt-4 d-flex justify-content-center'>
            <div className="detail-view">
                <div className="detail-image-container">
                    <img src={item.image} alt={item.name} className="detail-image" />
                </div>
                <div className="detail-info">    
                    <h1>{item.name}</h1>
                    <h4>CHF {item.price}</h4>
                    <p>{item.description}</p>
                    <p><small>{item.ingredients}</small></p>
                    {!isAdded ? (
                        <button
                            onClick={handleAddToCart}
                            className="add-btn my-4"
                        > Add to Cart
                        </button>
                    ) : (
                        <button
                            onClick={handleAddToCart}
                            className="add-btn my-4"
                        > Add another one
                        </button>
                    )}
                    <div>
                        <Link
                            to={"/menu"}
                            className="info-btn ml-1"
                        >
                            Back to menu
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailView;