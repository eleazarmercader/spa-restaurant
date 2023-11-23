import { useParams } from 'react-router-dom';
import menuItemsData from '../data/menuItems.json';

function DetailView() {
    const { itemId } = useParams();
    const item = menuItemsData.find(i => i.id.toString() === itemId);

    return (
        <div className="container mt-3">
            {item ? (
                <div>
                    <h2>{item.name}</h2>
                    <img src={item.image} alt={item.name} />
                    <p>{item.description}</p>
                    {/* Otros detalles que quieras mostrar */}
                </div>
            ) : (
                <p>Ítem no encontrado.</p>
            )}
        </div>
    );
}

export default DetailView;