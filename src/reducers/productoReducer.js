import { typesProducto } from "../types/types";

const initialState = {
    producto: [],
    active: null
}

export const productoReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesProducto.register:
            return {
                producto: [action.payload]
            }
        case typesProducto.list:
            return {
                producto: [...action.payload]
            }
         case typesProducto.edit:
                return {
                    producto: [...action.payload]
                }
        case typesProducto.delete:
            return {
                producto: state.producto.filter(est => est.id !== action.id)
            }

        default:
            return state;
    }

}