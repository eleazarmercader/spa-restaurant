import { useCart } from '../components/useCart';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';

function CartView() {
    const { items, removeFromCart, updateQuantity } = useCart();

    const handleQuantityChange = (item, quantity) => {
        updateQuantity(item.id, Math.max(0, quantity));
    };

    if (items.length === 0) {
        return (
            <div className="text-center mt-16">
                <h2>Your cart is empty</h2>
                <Link to={"/menu"} className="info-btn">
                    Return to menu
                </Link>
            </div>
        );
    }

    return (
        <div className="container mt-3">
            <h1 className="text-center my-8">Your Cart</h1>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th className="w-3/6 m-4">Product</th>
                            <th className="w-1/4 text-center">Quantity</th>
                            <th className="w-1/4 text-right">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item => (
                            <tr key={item.id} className="product-row align-middle">
                                <td className="flex items-center">
                                    <img src={item.image} alt={item.name} className="w-12 md:w-24 h-12 md:h-24 rounded my-1 mr-4" />
                                    <div>
                                        <div className="title-cart">{item.name}</div>
                                        <div className="text-sm">CHF {item.price}.00</div>
                                    </div>
                                </td>
                                <td className="text-center">
                                    <div className="flex items-center justify-end">
                                        <button
                                            onClick={() => handleQuantityChange(item, item.quantity - 1)}
                                            className="hover:font-bold"
                                        >-
                                        </button>
                                        <input
                                            className="text-right w-12 p-1 font-semibold"
                                            type="number"
                                            value={item.quantity}
                                            onChange={(e) => handleQuantityChange(item, parseInt(e.target.value))}
                                        />
                                        <button
                                            onClick={() => handleQuantityChange(item, item.quantity + 1)}
                                            className="hover:font-bold"
                                        >+
                                        </button>
                                        <FaTrash
                                            onClick={() => removeFromCart(item.id)}
                                            className="cursor-pointer mx-8 hover:text-[#bca27c]"
                                        />
                                    </div>
                                </td>
                                <td className="text-right font-bold">
                                    ${(item.price * item.quantity).toFixed(2)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="text-right mt-8">
                <Link to="/menu" className="checkout-btn">Continue Shopping</Link>
                <p className="font-bold mt-12 mr-1">Subtotal: CHF {items.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</p>
                <Link to="#" className="checkout-btn">Checkout*</Link>
                <p className="text-xs mt-2">*Not implemented... yet</p>
            </div>
        </div>
    );
}

export default CartView;