import {types} from '../types/types';


export const buscarReducer = (state = "", action) => {
    switch (action.type) {
        case types.buscar:

        return{
            
            busqueda: action.payload.q
        }
        default:
          return state;
    }
}