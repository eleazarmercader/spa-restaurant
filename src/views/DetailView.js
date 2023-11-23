import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import menuItemsData from '../data/menuItems.json';

function DetailView() {
    const { itemId } = useParams();
    const item = menuItemsData.find(i => i.id.toString() === itemId);

    return (
        <div className="container mt-3">
            {item ? (
                <div>
                    <h2>{item.name}</h2>
                    <img src={item.image} alt={item.name} className="img-fluid" />
                    <p>{item.description}</p>
                    {/* Muestra más detalles del plato aquí */}
                </div>
            ) : (
                <p>Ítem no encontrado.</p>
            )}
        </div>
    );
}

DetailView.propTypes = {
	item: PropTypes.shape({
			id: PropTypes.number.isRequired,
			image: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired,
            description: PropTypes.string.isRequired,
            ingredients: PropTypes.string.isRequired
	}).isRequired
};


export default DetailView;