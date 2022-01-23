import { typesCarrito } from "../types/types";

export const AgregarCarrito = (producto) => {
    return{
        type: typesCarrito.agregar,
        payload: producto
    }
}

export const BorrarCarrito = (id) => {
    return{
        type: typesCarrito.borrar,
        payload: id
    }
}

export const ActualizarCarrito = (id, cantidad) => {
    return{
        type: typesCarrito.actualizar,
        payload: {
            id, 
            cantidad
        }
    }
}

export const VaciarCarrito = () => {
    return{
        type: typesCarrito.vaciar,
        payload: {}
    }
}