import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : { cartItems: [] };

const minFreeShipping = 100;

const addDecimals = (num) =>
{
    return (Math.round(num * 100) / 100).toFixed(2);
}

const calculateShipping = (itemsPrice) => itemsPrice > minFreeShipping ? 0 : 10;

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:
    {
        addToCart: (state, action) =>
        {
            const item = action.payload;
            const existItem = state.cartItems.find(x => x.product === item.product);

            if (existItem)
            {
                state.cartItems = state.cartItems.map(x => x.product === existItem.product ? item : x);
            }
            else
            {
                state.cartItems = [...state.cartItems, item];
            }

            //calculate items price
            state.itemsPrice = addDecimals(state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0));
            //claculate shipping price
            state.shippingPrice = addDecimals(calculateShipping);
            //calculate tax price
            state.taxPrice = addDecimals(Number((0.19 * state.itemsPrice).toFixed(2)));
            //calculate total price
            state.totalPrice = addDecimals(state.totalPrice = (
                Number(state.itemsPrice) +
                Number(state.shippingPrice) +
                Number(state.taxPrice)
            ).toFixed(2));

            localStorage.setItem('cart', JSON.stringify(state));
        }
    }
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;