import {addShopping} from '../types/types'

const initialState ={
    items:[],
}


export const shopingReducers = (state = initialState, action)=>{
    switch (action.type) {
        case addShopping.add_to_cart:
            let newItem = action.payload
            let itemInCart = state.items.find((item) => item.name === newItem.name);
            return itemInCart
            ? {
                ...state,
                items: state.items.map((it) =>
                  it.name === newItem.name
                    ? { ...it, quantity: it.quantity + 1 }
                    : it
                ),
              }
            : {
                ...state,
                items: [...state.items, { ...newItem, quantity: 1 }],
              };
            case addShopping.remove_one_from_cart:
                let itemToDelete = state.items.find((item) => item.name === action.payload);
                return itemToDelete.quantity > 1
                    ? {
                        ...state,
                        items: state.items.map((item) =>
                        item.name === action.payload
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                        ),
                    }
                    : {
                        ...state,
                        items: state.items.filter((item) => item.name !== action.payload),
                    };
    
            case addShopping.remove_all_from_cart:
                return{
                    ...state,
                    items: state.items.filter((item) => item.name !== action.payload),
                  };
            case addShopping.clear_cart:
                return{
                    items:[]
                }
    
        default:
            return state;
    }
}