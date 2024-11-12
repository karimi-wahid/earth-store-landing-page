import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItem: [],
    price: 0,
    quantity: 0,
}


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action){
            const itemToAdd = action.payload;
            const existingItem = state.cartItem.find((item) => item.id === itemToAdd.id);
            if(existingItem){
                existingItem.quantity += itemToAdd.quantity;
            }else{
                state.cartItem.push({...itemToAdd, quantity: itemToAdd.quantity})
            }

            // updating total quantity, price
            state.quantity = state.cartItem.reduce((total, item) => total + item.quantity, 0)
            state.price = state.cartItem.reduce((total, item) => total + (item.price * item.quantity), 0)
        },
        removeFromCart(state, action){
            const itemId = action.payload
            state.cartItem = state.cartItem.filter((item) => item.id !== itemId)

            // updating total quantity, price
            state.quantity = state.cartItem.reduce((total, item) => total + item.quantity, 0)
            state.price = state.cartItem.reduce((total, item) => total + (item.price * item.quantity), 0)
        },
        updateQuantityCart(state, action){
            const {id, quantity} = action.payload
            const existingItem = state.cartItem.find((item) => item.id === id)
            if(existingItem){
                existingItem.quantity = quantity
            }
            // updating total quantity, price
            state.quantity = state.cartItem.reduce((total, item) => total + item.quantity, 0)
            state.price = state.cartItem.reduce((total, item) => total + (item.price * item.quantity), 0)
        },
        clearAllCart(state, action){}
    }
})


export const {addToCart, removeFromCart, updateQuantityCart ,clearAllCart} = cartSlice.actions
export default cartSlice.reducer; 