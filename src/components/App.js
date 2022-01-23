import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { listProducto } from '../actions/actionRegProducto';
import { ListarProducto } from './ListarProducto'
// import ShoppingCart from './ShoppingCart';



const App = (history) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducto());
      }, [dispatch])

    return (
        <div>
     
        <ListarProducto />
{/* 
        <hr>
        <ShoppingCart />
        </hr>  */}
        </div>
    )
}

export default App
