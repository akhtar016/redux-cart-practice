import { ADD_TO_CART, REMOVE_FROM_CART } from "../Actions/cartActions";

const initialState = {
    cart: [],
    products : [  {name:'Lenevo Laptop', id:1},
    {name:'Asus Laptop', id:2},
    {name:'Dell Laptop', id:3},
    {name:'HP Laptop', id:4},
    {name:'Toshiba Laptop', id:5}]
}

const cartReducers = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CART:
                console.log(action);
                
                const newItem = {
                    productId: action.id,
                    name: action.name,
                    cartId: state.cart.length + 1}
                const newCart = [...state.cart,newItem]
                return{...state, cart: newCart};
        
        case REMOVE_FROM_CART:
            const id = action.id;
            const remainingCart = state.cart.filter(item => item.cartId !== id);
            return {...state, cart: remainingCart}
                
            
        default:
            return state;
    }
}

export default cartReducers;