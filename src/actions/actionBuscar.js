import { types } from "../types/types"

export const busquedaActiva = (q) => {
    console.log(q)
    return{
        type: types.buscar,
        payload:{q}
    }

}
