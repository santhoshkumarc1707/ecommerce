import { createContext, useState, useEffect, useCallback } from 'react';
export const CartContext = createContext();
// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(
        () => JSON.parse(localStorage.getItem('cartItems')) || []
    );
    const [cartCount, setCartCount] = useState(() => JSON.parse(localStorage.getItem('cartCount')) || 0);
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
                return [...prevCartItems, { ...item }];
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
        setCartCount((pre) => pre - item.quantity);

    }, []);

    const clearCart = useCallback(() => {
        setCartItems([]);
        setCartCount('0')
    }, []);


    const getCartTotal = useCallback(() => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    }, [cartItems]);
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);
    useEffect(() => {
        localStorage.setItem("cartCount", JSON.stringify(cartCount));
    }, [cartCount]);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                deleteFromCart,
                clearCart,
                getCartTotal,
                setCartCount,
                cartCount,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};