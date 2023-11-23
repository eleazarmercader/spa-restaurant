import { useCart } from '../components/useCart';

function CartView() {
    const { items } = useCart();

    return (
        <div className="container mt-3">
            <h1>Tu Carrito</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.name} - {item.description}</li>
                ))}
            </ul>
            {/* Otros elementos del carrito */}
        </div>
    );
}

export default CartView;