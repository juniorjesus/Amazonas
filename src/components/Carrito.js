import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { BorrarCarrito, ActualizarCarrito, VaciarCarrito } from '../actions/actionCarrito';
import { Button, TextField, Typography } from '@mui/material';
import '../styles/carrito.css'
import { Link } from "react-router-dom";


const Carrito = () => {
    
    const dispatch = useDispatch();

    const { carrito } = useSelector(store => store.carrito);

    const handleVaciar = () =>{
        dispatch(VaciarCarrito())
    }

    const handleBorrar = (id) => {
        dispatch(BorrarCarrito(id))
    }

    const handleActualizar = (id)=>{
        let cantidad = Number(document.getElementById(id).value)
        if(isNaN(cantidad) || cantidad == 0){
            console.log('numero no valido')
        } else {
            dispatch(ActualizarCarrito(id, cantidad))
        }
    }

    const cantidadProduct = () =>{
        let cantidad =0;
        carrito?.forEach(element => {
            cantidad += Number(element.cantidad);
         });
         return cantidad
    }

    const Subtotal = () =>{
        let subtotal=0;
        carrito?.forEach(element => {
           subtotal += Number(element.cantidad)*Number(element.precio)
        });
        return Intl.NumberFormat('es-DE').format(subtotal)
    }

    return (
        <div className='divPrincipalCarrito'>
            <div className='divSubCarrito'>
                {carrito == undefined || carrito.length == 0 ? 
                <div>
                    <Typography variant='h4'>Tu carrito de Amazonas está vacío.</Typography>
                    <hr/>
                    <br/>
                    <hr/>
                </div>
               :
               <div>
                   <Typography variant='h4'>Carrito</Typography>
                   <Button className='vaciarCarrito' onClick={handleVaciar}>Anular la selección de todos los elementos</Button>
                   <hr/>
                    {carrito.map((e=>(
                        <div>
                            <div className='contenedorProducto'>
                                <img src={e.imagenes[0]} className='imagenProducto'/>
                                <div>
                                    <div className='carritoTexto'>
                                        <Typography variant='h6'>
                                            <label className='textoNombre'>
                                                {e.nombre}
                                            </label>
                                        </Typography>
                                    </div>
                                    <Typography variant='body2' className='textoVerdeDisponible'>Disponible</Typography>
                                    <Typography variant='body2' className=''>Envío Gratis a Colombia.</Typography>
                                    <Typography variant='body2' className=''> 
                                      <label className='textoNegrilla'>Color: </label> 
                                      {e.color}
                                    </Typography>
                                    <Typography variant='body2' className=''> 
                                      <label className='textoNegrilla'>Tipo: </label> 
                                      {e.tipo}
                                    </Typography>
                                    <div className='divEliminar-Cantidad'>
                                        <TextField
                                            type='number'
                                            size='small'
                                            className='cantidadProducto'
                                            id={e.id}
                                            label="Cantidad"
                                            name={e.id}
                                            defaultValue={e.cantidad}
                                            onChange={()=>handleActualizar(e.id)}
                                            />
                                            <Typography variant='h6' className='botonAzulEliminar' onClick={() => handleBorrar(e.id)}>Eliminar</Typography>
                                    </div>
                                </div>
                                <div className='Carritoprecio'>
                                    <Typography variant='body1' className='textoNegrilla'>COP ${Intl.NumberFormat('es-DE').format((e.precio))}</Typography>
                                    
                                </div>
                            </div>
                        <hr/>
                        </div>
                        )))}
                    <Typography textAlign={'right'} variant='h6'>
                        Subtotal ({cantidadProduct()} producto{cantidadProduct()>1?'s':''}):
                        <label className='textoNegrillaS'>COP ${Subtotal()}</label>
                    </Typography>
               </div>
                }
                
                
            </div>
            <div className='divCarritoPagar'>
                <Typography variant='body2' className='textoVerdeDisponible'>Tu pedido es elegible para envio gratis</Typography>
                <Typography textAlign={'left'} variant='h6' sx={{mt:2}}>
                    Subtotal ({cantidadProduct()} producto{cantidadProduct()>1?'s':''}):
                    <label className='textoNegrillaS'>COP ${Subtotal()}</label>
                </Typography>
                <Link to="/formulario" className='links'>
                    <Button variant='contained' fullWidth sx={{mt:2}} color='warning'>Proceder al pago</Button>
                </Link>
            </div>
        </div>
    )
}

export default Carrito