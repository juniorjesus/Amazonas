import { Form, Button } from 'react-bootstrap';
import { useForm } from '../hooks/useForm';
import { useDispatch } from 'react-redux'
import { deleteProducto, editar } from '../actions/actionRegProducto';
import { Link } from 'react-router-dom';


export const Editar = (dataPro) => {

    let ediPro = dataPro.history.location.dataPro.imagen
    let id = ediPro.id;

    const dispatch = useDispatch();


    const [formValues, handleInputChange, reset] = useForm({
        nom: ediPro.nom,
        precio: ediPro.precio,
        detPre: ediPro.detPre,
        color: ediPro.color,
        detProducto: ediPro.detProducto

    });

    const { nom, precio, detPre, color, detProducto } = formValues;

    const handleRegistro = (e) => {
        e.preventDefault();
        dispatch(editar(nom, precio, detPre, color, detProducto, id));
    }


    return (
        <div>
            <Form className="formEdi" onSubmit={handleRegistro}>
                <Form.Group className="mb-3 " controlId="formBasicName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter name"
                        name="nom"
                        value={nom}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPrecio">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="precio"
                        name="precio"
                        value={precio}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDetPre">
                    <Form.Label>Detalle precio</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="detPre"
                        name="detPre"
                        value={detPre}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicColor">
                    <Form.Label>Color</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="color"
                        name="color"
                        value={color}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDetProducto">
                    <Form.Label>Detalle del Producto</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="detProducto"
                        name="detProducto"
                        value={detProducto}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Link
                to ="/"
                >
                <Button variant="primary" type="submit">
                    Guardar Cambios
                </Button>
                <Link
                to ="/"
                >
                 </Link>
                <Button 
                onClick={() => dispatch(deleteProducto(ediPro.id))}
                style={{ margin:"10px"}}
                variant="danger" type="botton">
                    Eliminar Registro
                </Button>
                </Link>
                <Link
                to ="/"
                >
                <Button 
                onClick={() => reset()}
                variant="danger" type="button">
                    Cancelar
                </Button>
                </Link>
            </Form>

        </div>
    )
}