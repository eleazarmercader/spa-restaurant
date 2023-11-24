import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const CartContext = createContext();

export function CartProvider({ children }) {
	const [cartItems, setCartItems] = useState([]);

	const addToCart = (item) => {
		setCartItems(prevItems => {
			const existingItem = prevItems.find(i => i.id === item.id);
			if (existingItem) {
				return prevItems.map(i =>
					i.id === item.id
						? { ...i, quantity: i.quantity + 1 }
						: i
				);
			}
			return [...prevItems, { ...item, quantity: 1 }];
		});
	};

	const removeFromCart = (itemId) => {
		setCartItems(prevItems => prevItems.filter(i => i.id !== itemId));
	};

	const updateQuantity = (itemId, quantity) => {
		setCartItems(prevItems => 
			prevItems.map(i => 
				i.id === itemId
					? { ...i, quantity: quantity }
					: i
			)
		);
	};

	const totalPrice = cartItems.reduce((total, item) =>
		total + item.price * item.quantity, 0);

	const value = {
		items: cartItems,
		addToCart,
		removeFromCart,
		updateQuantity,
		totalPrice
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

CartProvider.propTypes = {
    children: PropTypes.node.isRequired
};