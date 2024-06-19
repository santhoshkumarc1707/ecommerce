import { createContext, useState, useEffect, useCallback } from 'react';

export const CartContext = createContext();

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(
        () => JSON.parse(localStorage.getItem('cartItems')) || []
    );

    const addToCart = useCallback((item, quantity = 1) => {
        setCartItems((prevCartItems) => {
            const isItemInCart = prevCartItems.find((cartItem) => cartItem.id === item.id);

            if (isItemInCart) {
                return prevCartItems.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + quantity, total: (cartItem.quantity + quantity) * cartItem.price }
                        : cartItem
                );
            } else {
                return [...prevCartItems, { ...item, quantity }];
            }
        });
    }, []);

    const removeFromCart = useCallback((item) => {
        setCartItems((prevCartItems) => {
            const isItemInCart = prevCartItems.find((cartItem) => cartItem.id === item.id);

            if (isItemInCart.quantity === 1) {
                return prevCartItems.filter((cartItem) => cartItem.id !== item.id);
            } else {
                return prevCartItems.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity - 1, total: (cartItem.quantity - 1) * cartItem.price }
                        : cartItem
                );
            }
        });
    }, []);
    const deleteFromCart = useCallback((item) => {
        setCartItems((prevCartItems) => prevCartItems.filter((cartItem) => cartItem.id !== item.id));
    }, []);
    const clearCart = useCallback(() => {
        setCartItems([]);
    }, []);

    const getCartTotal = useCallback(() => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    }, [cartItems]);
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                deleteFromCart,
                clearCart,
                getCartTotal,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
