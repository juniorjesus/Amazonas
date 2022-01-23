import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { fileUpload } from '../helpers/FileUpload';
import { registerProducto } from '../actions/actionRegProducto';
import { Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';


export const RegProducto = () => {
  
    
  
    const [imagen, setImagen] = useState([])
    const [imagenText, setImagenText] = useState("Agregar Imagen")
    const dispatch = useDispatch();
    let imagen2 = "";


    const formik = useFormik({
        initialValues: {
           nombre: "",
           precio: "",
           detallePrecio: "",
           color: "",
           detalleProducto: "",
           

        },
        validationSchema: Yup.object({
            nombre: Yup.string().required(),
            precio: Yup.string().required(),
            detallePrecio: Yup.string().required(),
            color: Yup.string().required(),
            detalleProducto: Yup.string().required(),
          }),
          onSubmit: (data,onSubmitProps) => {
            
                  handleRegistro(data)
                  onSubmitProps.setSubmitting(false)
                  onSubmitProps.resetForm() 
                 
            },
   
     })
     const handleRegistro = (data ) => {
      
        dispatch(registerProducto(data.nombre, data.precio, data.detallePrecio, data.color, data.detalleProducto,imagen))
        setImagen([])
        document.getElementById('image').innerHTML =""
    }
    const handlePictureClick= () => {
     
        document.querySelector('#fileSelector').click();
        
   }

   const handleFileChanged = (e) => {

 const file = e.target.files[0];
 fileUpload(file)
 .then(response => {
    if(!imagen){
        setImagen({response})
    }
    setImagen([ ...imagen, {response}])
   imagen2= response
   document.getElementById('image').innerHTML +=
   ` 
   <img src=${imagen2} alt="" width="130px" />
   `;
    setImagenText("Agregar Otra Imagen")

 })
 .catch(error => {
     console.log(error.message);
 })
}
const handleReset = () =>{
    setImagen([])
    document.getElementById('image').innerHTML =""
}
    // const handleLogout = () => {
    //     dispatch(logout());
    //     history.replace('/login');
    // }
 

console.log(imagen)
    return (
        <div className="formRegPro animate__animated animate__fadeIn animate__faster">

            <Form className="fP" onSubmit={formik.handleSubmit}>
            <h1 className="title">Registro de Productos</h1>
 <br/>
                <Form.Group className="mb-3 " controlId="formBasicNombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        name="nombre"
                        onChange={formik.handleChange}
                        error={formik.errors.nombre}

                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicprecio">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control
                        type="text"
                        name="precio"
                        onChange={formik.handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicdetallePrecio">
                    <Form.Label>DetallePrecio</Form.Label>
                    <Form.Control
                        type="text"
                        name="detallePrecio"
                        onChange={formik.handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasiccolor">
                    <Form.Label>Color</Form.Label>
                    <Form.Control
                        type="text"
                        name="color"
                        onChange={formik.handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3 " controlId="formBasicdetalleProducto">
                    <Form.Label>DetalleProducto</Form.Label>
                    <Form.Control className="detalleP"
                        type="text"
                        name="detalleProducto"
                        onChange={formik.handleChange}
                    />
                </Form.Group>
             
                
                        <div id ="image">
                       </div>
             
                        <input
                            id="fileSelector"
                            type="file"
                            name="file"
                            style={{ display: 'none' }}
                            onChange={handleFileChanged}
                        />
                <Button variant="primary" type="submit">
                    Enviar
                </Button>
              
                <Button
                 onClick={handlePictureClick}
                 style={{ margin: '20px' }}
                 variant="success"
                 type="button">
                    {imagenText}
                </Button>
                <Button onClick={handleReset} variant="danger" id="reset" type="reset">
                    Cancelar
                </Button>
            </Form>

        </div>
    )
}
