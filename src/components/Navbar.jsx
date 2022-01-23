import { List, makeStyles, Drawer, Toolbar, IconButton, Divider } from '@material-ui/core';
import React, { useEffect, useRef } from 'react'
import MenuTwoToneIcon from '@material-ui/icons/MenuTwoTone';
import { useState } from "react"
import CancelIcon from '@material-ui/icons/Cancel';
import { useDispatch } from 'react-redux';
import { busquedaActiva } from '../actions/actionBuscar';
import { Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { logout } from '../actions/actionLogin';


const Navbar = ({history}) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState('')
    const searchref = useRef()
    const dispatch = useDispatch();
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [posicion, setPosicion] = useState({
        center: {
          lat:0,
          lng: 0
        },
        zoom: 0
      });
      
    navigator.geolocation.getCurrentPosition(
        function (position) {
          setPosicion({
            center: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
            zoom: 15
          });
        },
        function (error) {
          console.error("Error Code = " + error.code + " - " + error.message);
        },
        {
          enableHighAccuracy: true,
         }
         );

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user?.uid) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }

        });
    }, [setIsLoggedIn])


    const handleSubmit = (e) => {
        e.preventDefault()
        let q = { search }
        dispatch(busquedaActiva(q.search))
    }
 
    const handleInputChange = (e,) => {
        setSearch(e.target.value)
    }
    return (
        <header>
            


            <Toolbar className={classes.toolbar}>

                <Link to="/">
                    <img src="https://res.cloudinary.com/dky22nhv5/image/upload/v1633400651/logo_echeqy.png" className={classes.logo} alt="Logo" />
                </Link>

                <List edge="end" className={classes.list}>

                    <Link
                        to={{
                            pathname: "/auth/map",
                            posicion1: posicion
                        }}
                        spy={true}
                        smooth={true}
                    >Elige tu dirección</Link>


                    <form
                        onSubmit={handleSubmit}>
                        <input
                            name="search"
                            ref={searchref}
                            placeholder="Buscar"
                            value={search}
                            onChange={handleInputChange}
                            className={classes.inBusca}
                            style={{ width: "400px", marginLeft: "-1120px" }}
                        />

                    </form>
                    <div style={{ width: "200px", marginLeft: "-600px" }}>
                        {
                            isLoggedIn
                                ?
                                <Link
                                    onClick={() => { dispatch(logout()) }}
                                    to="/"
                                    spy={true}
                                    smooth={true}
                                >Cerrar sesión</Link>
                                :
                                <Link
                                    to="/login"
                                    spy={true}
                                    smooth={true}
                                >Iniciar sesión</Link>
                                

                        }
                     
                    </div>
                    <Link
                                    to="/auth/regproducto"
                                    spy={true}
                                    smooth={true}
                                >Agregar Producto</Link>

{/* <Link to="/carrito" className='links'> */}
                            {/* {cantidadProduct()!==0? */}
                            {/* <div className='cantidadNumCarrito'>{cantidadProduct()}</div> */}
                            {/* :<div></div>} */}
                            {/* <img src="https://img.icons8.com/material-rounded/45/FFFFFF/shopping-cart.png"/> */}
                            {/* <label className='bold-label'>Carrito</label>
                        </Link> */}

                                
                </List>
                <IconButton edge="end" className={classes.listbottom} onClick={() => setOpen(true)}>
                    <MenuTwoToneIcon fontSize="large" />
                </IconButton>
            </Toolbar>

            <Drawer anchor="right" open={open} onClose={() => setOpen(false)} className={classes.menul}>
                <IconButton onClick={() => setOpen(false)} className={classes.close}>
                    <CancelIcon fontSize="large" />
                </IconButton>
                <Divider />

                <Link
                    to="/atencionmedica"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-64}>Elige tu dirección</Link>

                <Link
                    to="/"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-64}>{isLoggedIn}</Link>


                

            </Drawer>


        </header>
        
    )
}


const useStyles = makeStyles((theme) => ({

    toolbar: {
        display: "flex",
        alignItems: "center",
        backgroundColor: "#131921",
        marginBottom: "2rem",
        "& img": {
            height: '3rem',
            width: "8rem",
        }
    },
    Logo: {
        objectFit: "contain",
        "&:hover": {
            cursor: 'pointer',
        }
    },
    list: {
        alignItems: "center",
        display: "flex",
        margin: "auto 50px",

        color: "#fff",

        [theme.breakpoints.down("sm")]: {
            // display:"none"
        },
        "& a": {
            color: "#fff",
            fontSize: "1rem",
            fontWeight: 'bold',
            margin: " auto 10px",
            width: "59rem",
            textDecoration: "none"
        },
        "& a:hover": {
            cursor: "pointer",
            color: "tomato",
            paddingLeft: "5px",
            borderBottom: "2px solid tomato",
            borderLeft: "2px solid tomato",
            boxShadow: "-2px 2px 5px tomato"
        }
    },
    listbottom: {
        display: "none",
        [theme.breakpoints.down("sm")]: {
            display: "block",
            color: "#fff",
            position: "absolute",
            top: 0,
            right: 10,
        }
    },
    menul2: {
        color: "blue",
        width: "30vw",
        [theme.breakpoints.down("sm")]: {
            width: "60vw",
        },
    },
    menul: {

        "& a": {
            margin: theme.spacing(5, 0, 0, 4),
            fontSize: "1.4rem",
            color: "#333",
            fontWeight: "bold",
        },
        "& a:hover": {
            color: "tomato",
            cursor: "pointer",
        }

    },
    close: {
        color: "red",
        position: "absolute",
        top: 0,
        right: 10,
    }
}))

export default Navbar

