import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';

const initialState = {
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    wishlist: JSON.parse(localStorage.getItem('wishlist')) || [],
    products: [],
    loading: true,
    searchQuery: '',      
    activeCategory: 'all' 
};

const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return { ...state, products: action.payload, loading: false };
        
        case 'SET_SEARCH_QUERY':
            return { ...state, searchQuery: action.payload };

        case 'SET_CATEGORY':
            return { ...state, activeCategory: action.payload };

        case 'ADD_TO_CART':
            const itemInCart = state.cart.find(i => i.id === action.payload.id);
            const updatedCart = itemInCart 
                ? state.cart.map(i => i.id === action.payload.id ? { ...i, qty: i.qty + 1 } : i)
                : [...state.cart, { ...action.payload, qty: 1 }];
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return { ...state, cart: updatedCart };

        case 'REMOVE_FROM_CART':
            const filteredCart = state.cart.filter(i => i.id !== action.payload);
            localStorage.setItem('cart', JSON.stringify(filteredCart));
            return { ...state, cart: filteredCart };

        case 'UPDATE_QTY':
            const qtyCart = state.cart.map(i => i.id === action.id ? { ...i, qty: action.qty } : i);
            localStorage.setItem('cart', JSON.stringify(qtyCart));
            return { ...state, cart: qtyCart };

        case 'TOGGLE_WISHLIST':
            const isFav = state.wishlist.find(i => i.id === action.payload.id);
            const newWish = isFav 
                ? state.wishlist.filter(i => i.id !== action.payload.id)
                : [...state.wishlist, action.payload];
            localStorage.setItem('wishlist', JSON.stringify(newWish));
            return { ...state, wishlist: newWish };

        default:
            return state;
    }
};

const store = createStore(shopReducer, applyMiddleware(thunk));
export default store;