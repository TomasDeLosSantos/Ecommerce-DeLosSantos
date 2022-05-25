import React, { useState } from "react";

export const Context = React.createContext([]);

const CartContext = ({ defaultValue = [], children }) => {
    const [ cart, setCart ] = useState(defaultValue);

    const isInCart = (id) =>{
        return cart.some(i => i.item.id === id);
    }

    const addExistingItem = (item, ammount) => {
        let newCart = cart;
        let existingItem = newCart.find(i => i.item.id === item.id);
        existingItem.quant += ammount;
        newCart[newCart.findIndex(i => i.item.id === item.id)] = existingItem;
        setCart(newCart);
    }

    const addItem = (item, quant) =>{
        isInCart(item.id) ? (
            addExistingItem(item, quant)
        ) : (
            setCart([...cart, {item: item, quant: quant}])
        );
    }

    const removeItem = (itemId) =>{
        setCart(cart.filter(i => i.item.id === itemId));
    }

    const clear = () =>{
        setCart([]);
    }

    return(
        <Context.Provider value={{cart, isInCart, addItem, removeItem, clear}}>
            {children}
        </Context.Provider>
    );
}

export default CartContext;