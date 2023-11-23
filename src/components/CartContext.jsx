import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (newItem) => {
			setCartItems(prevItems => {
					const existingItem = prevItems.find(item => item.id === newItem.id);
					if (existingItem) {
							// Incrementa la cantidad si el ítem ya está en el carrito
							return prevItems.map(item =>
									item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
							);
					}
					// Añade el nuevo ítem al carrito
					return [...prevItems, { ...newItem, quantity: 1 }];
			});
	};

    const value = {
        items: cartItems,
        addToCart
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

CartProvider.propTypes = {
    children: PropTypes.node.isRequired
};