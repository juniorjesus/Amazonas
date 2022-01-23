import React from 'react';
// import { Form, Button, Container, FormControl } from 'react-bootstrap';
import { Link } from "react-router-dom";
import {useForm } from '../hooks/useForm';
import {useDispatch, useSelector} from 'react-redux';
import {loginEmailPassword, loginFacebook, loginGoogle} from '../actions/actionLogin';
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl"
import OutlinedInput from "@mui/material/OutlinedInput";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";


function Login({history}) {

    const dispatch = useDispatch();
    const {loading} = useSelector(state => state.ui);

    const [ values, handleInputChange ] = useForm({
        email: 'juniorlopez3@live.com',
        password: '1234567'
    })

    const {email,password} = values;

    const handleLogin = (e) => {
       e.preventDefault();
       dispatch(loginEmailPassword(email,password));
       history.replace('/auth');
    }
    const handleFacebook = () => {
        dispatch(loginFacebook());
        history.replace('/auth');
    }
    const handleGoogle = () => {
         dispatch(loginGoogle());
         history.replace('/auth');
    }

    return (
        
        <Box
        sx={{
          display: "flex",
          textAlign: "center",
          alignItems: "center",
  
          justifyContent: "center",
          "& > :not(style)": {
            m: 5,
            width: 350,
            height: 510,
          },
        }}
      >
          {/* <div className='container'>
              <img
                src="https://res.cloudinary.com/djbaqvlnn/image/upload/v1641664990/Amazonas/logo-amazonas_wwdtch.png"
                alt="logo"
                id="icon" 
                    // alt="User Icon" 
                    width="200px"
              />
              </div> */}

        <form onSubmit={handleLogin}
        className="animate__animated animate__fadeIn animate__faster"
        >
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
              <Typography>Iniciar sesión</Typography>
              <FormControl sx={{ width: "30ch" }}>
                <OutlinedInput
                  sx={{ border: "1px solid #F0AD64", color: "white", m: 1 }}
                  placeholder="Ingrese email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl sx={{ width: "30ch" }}>
                <OutlinedInput
                  sx={{ border: "1px solid #F0AD64", color: "white", m: 1 }}
                  placeholder="Ingrese contraseña"
                  name="password"
                  type="password"
                  value={password}
                  onChange={handleInputChange}
                />
              </FormControl>
              <div>
                <Button
                  variant="contained"
                  size="small"
                  type="submit"
                  sx={{ bgcolor: "#F0AD64", color: "black", p: 1, width: "33ch" }}
                  disabled = {loading}
                >
                  Continuar
                </Button>
  
                <Button
                  variant="outlined"
                  sx={{ color: "white", width: "30ch", m: 1 }}
                  onClick={handleGoogle}
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
                  onClick={handleFacebook}
                >
                  Iniciar sesión con{" "}
                  <img
                    src="https://res.cloudinary.com/djbaqvlnn/image/upload/v1642200372/Amazonas/facebook-logo-3-1_fegy6m_aebzrr.png"
                    alt=""
                  ></img>
                </Button>
              </div>
              <p>
                Al continuar, aceptas las Condiciones de uso y el Aviso de
                privacidad de Amazonas.
              </p>
              <p>¿Eres nuevo en Amazonas?</p>
              <div>
                <Link to="Registro">
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
                    Crea tu cuenta de Amazonas
                  </Button>
                </Link>
              </div>
            </div>
          </Paper>
        </form>
      </Box>
    );
  };


//         <Form onSubmit={handleLogin}>
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//                 <Form.Label>Correo</Form.Label>
//                 <Form.Control
//                     type="email"
//                     placeholder="Enter email"
//                     name="email"
//                     value={email}
//                     onChange={handleInputChange} />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicPassword">
//                 <Form.Label>Contraseña</Form.Label>
//                 <Form.Control
//                     type="password"
//                     placeholder="Password"
//                     name="password"
//                     value={password}
//                     onChange={handleInputChange} />
//             </Form.Group>
//             <Button variant="primary" type="submit">
//                 Enviar
//             </Button>

//             <Container className="auth__social-networks" >
//                 <Container
//                     className="google-btn"
//                     onClick={handleGoogle}

//                 >
//                     <Container className="google-icon-wrapper" style={{width:"50px",display:"flex", margin: "-40px"}}>
//                         <img className="google-icon" width="70px"  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
//                     </Container>
//                 </Container>

//                 <Container
//                     className="google-btn"
//                     onClick={handleFacebook}

//                 >
//                     <Container className="google-icon-wrapper" style={{width:"50px", display:"flex"}}>
//                         <img className="google-icon" width="40px" src="https://res.cloudinary.com/dky22nhv5/image/upload/v1632679406/facebook_gqfii0.png" alt="Facebook button" />
//                     </Container>
//                 </Container>
//             </Container>
//             <Link to="/registro">Registrarse</Link>

//         </Form>

//     );
// }

export default Login;
