// import { Form, Button} from 'react-bootstrap';
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useForm } from '../hooks/useForm';
import {registroEmailPasswordNombre} from '../actions/actionRegister';
import validator from 'validator'
import {useDispatch, useSelector} from 'react-redux'
import { removeError, setError } from '../actions/ui';
import React from "react";






export const Registro = ({history}) => {

    const dispatch = useDispatch();
    const {msgError} = useSelector(state => state.ui);
   

    const [formValues, handleInputChange] = useForm({
        nombre: 'junior',
        email: 'juniorlopez3@live.com',
        pass1: '1234567',
        pass2: '1234567'
    });

    const { nombre, email, pass1, pass2 } = formValues;  

    const handleRegistro = (e) => {
        e.preventDefault();
        dispatch(registroEmailPasswordNombre(email,pass1,nombre))

        console.log(nombre, email, pass1, pass2)

        if ( isFormValid() ) {
            dispatch(registroEmailPasswordNombre(email, pass1, nombre));
        }
    }

    const isFormValid = () => {


        if (nombre.trim().length === 0 ) {
            dispatch(setError( 'Nombre es requerido'))
            return false;
            
        }else if ( !validator.isEmail( email)) {
            dispatch( setError ('Email no Válido'))
            return false;
            
        }else if (pass1 !== pass2 || pass1.length < 5) {
            dispatch( setError ('La contraseña debe tener al menos 6 carácteres y coincidir entre si'))
            return false;
        }
        dispatch ( removeError());
        return true;
    }
   

    return (
        // <div>
        //     <Form onSubmit={handleRegistro}>

        //       { 
        //       msgError &&
        //       (
        //       <div className='auth__alert-error'>{msgError}</div>
        //       )}
        //         <Form.Group className="mb-3" controlId="formBasicName">
        //             <Form.Label>Nombre</Form.Label>
        //             <Form.Control
        //                 type="text"
        //                 placeholder="Enter name"
        //                 name="nombre"
        //                 value={nombre}
        //                 onChange={handleInputChange}
        //             />
        //         </Form.Group>

        //         <Form.Group className="mb-3" controlId="formBasicEmail">
        //             <Form.Label>Correo</Form.Label>
        //             <Form.Control
        //                 type="email"
        //                 placeholder="email"
        //                 name="email"
        //                 value={email}
        //                 onChange={handleInputChange}
        //             />
        //         </Form.Group>

        //         <Form.Group className="mb-3" controlId="formBasicPassword">
        //             <Form.Label>Contraseña</Form.Label>
        //             <Form.Control
        //                 type="password"
        //                 placeholder="Password"
        //                 name="pass1"
        //                 value={pass1}
        //                 onChange={handleInputChange}
        //             />
        //         </Form.Group>

        //         <Form.Group className="mb-3" controlId="formBasicRepitPassword">
        //             <Form.Label>Repita contraseña</Form.Label>
        //             <Form.Control
        //                 type="password"
        //                 placeholder="Password"
        //                 name="pass2"
        //                 value={pass2}
        //                 onChange={handleInputChange}
        //             />
        //         </Form.Group>


        //         <Button variant="primary" type="submit">
        //             Registrarse
        //         </Button>

        //         <Link to="/login">Login</Link>

        //     </Form>

        // </div>
//     )
// }


<Box
sx={{
  display: "flex",
  textAlign: "center",
  alignItems: "center",

  justifyContent: "center",
  "& > :not(style)": {
    m: 3,
    width: 350,
    height: 510,
  },
}}
>
<form onSubmit={handleRegistro}
 className="animate__animated animate__fadeIn animate__faster"
>

    
     { 
              msgError &&
              (
              <div className='auth__alert-error'>{msgError}</div>
              )}
  <Paper
    sx={{
      p: 2,
      display: "grid",
      bgcolor: "#131921",
      color: "white",
    }}
  >
    <div>
      <img
        src="https://res.cloudinary.com/djbaqvlnn/image/upload/v1641664990/Amazonas/logo-amazonas_wwdtch.png"
        alt="logo"
      />
      <Typography>Registrate</Typography>
      <FormControl sx={{ width: "30ch" }}>
        <OutlinedInput
          sx={{ border: "1px solid #F0AD64", color: "white", m: 1 }}
          placeholder="Ingrese nombre"
          type="text"
          name="nombre"
          value={nombre}
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl sx={{ width: "30ch" }}>
        <OutlinedInput
          sx={{ border: "1px solid #F0AD64", color: "white", m: 1 }}
          placeholder="Ingrese email"
          type="email"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl sx={{ width: "30ch" }}>
        <OutlinedInput
          sx={{ border: "1px solid #F0AD64", color: "white", m: 1 }}
          placeholder="Ingrese contraseña"
          type="password"
          name="pass1"
          value={pass1}
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl sx={{ width: "30ch" }}>
        <OutlinedInput
          sx={{ border: "1px solid #F0AD64", color: "white", m: 1 }}
          placeholder="Repita contraseña"
          type="password"
          name="pass2"
          value={pass2}
          onChange={handleInputChange}
        />
      </FormControl>
      <div>
        <Button
          variant="contained"
          size="small"
          type="submit"
          sx={{ bgcolor: "#F0AD64", color: "black", p: 1, width: "30ch" }}
        >
          Registrarse
        </Button>

        <Button
          variant="outlined"
          sx={{ color: "white", width: "30ch", m: 1 }}
        >
          Iniciar sesión con{" "}
          <img
            src="https://res.cloudinary.com/djbaqvlnn/image/upload/v1642200347/Amazonas/2000px-Google_G_Logo.svg__afs75y_sot9wb.png"
            alt=""
          ></img>
        </Button>
        <Button
          variant="outlined"
          sx={{ color: "white", width: "30ch", m: 1 }}
        >
          Iniciar sesión con{" "}
          <img
            src="https://res.cloudinary.com/djbaqvlnn/image/upload/v1642200372/Amazonas/facebook-logo-3-1_fegy6m_aebzrr.png"
            alt=""
          ></img>
        </Button>
      </div>
      <p>
        Al crear una cuenta, aceptas las Condiciones de Uso y el Aviso de
        Privacidad de amazonas.com.
      </p>
      <p>¿Ya tienes una cuenta? </p>
      <div>
        <Link to="/auth">
          <Button
            variant="outlined"
            sx={{
              color: "white",
              p: 1,
              width: "35ch",
              border: "1px solid #F0AD64",
            }}
          >
            {" "}
            Iniciar sesión
          </Button>
        </Link>
      </div>
    </div>
  </Paper>
</form>
</Box>
);
};

export default Registro;

