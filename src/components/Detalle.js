/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react'
import {Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';



export const Detalle = (data) => {

    let imagen = data.history.location.data.element
    let imag = imagen.img
    let imgInit = imag[0];
    const [selecImg, setSelecImg] = useState(imgInit.response)
    const [picture, setPicture] = useState("")
    const [scrolly, setScrolly] = useState("")
    const [zoom, setZoom] = useState("")
    const [rect, setRect] = useState("")
  

useEffect(() => {
    
     setPicture(document.querySelector('#pictures'))
     setRect(document.querySelector('#rect'))
     setZoom(document.querySelector('#zoom'))
     if(zoom){
     zoom.style.backgroundImage = "url(" + imgInit.response + ")";
     }
     window.onscroll = function() {
        setScrolly(window.scrollY)
        
      };

    },[zoom])

    const changeImg = (imgSrc) => {
      
     setSelecImg(imgSrc)
    zoom.style.backgroundImage = "url(" + imgSrc + ")";
}
let w1 = picture.offsetWidth;
let x, y, xx, yy;

const move = (e) => {

    xx = (x-144) * 4.8;
    yy = (y-148) * 4.6; 
    x = e.pageX;
    y = e.clientY;
    if(x < (w1+80)){
        x=w1+80
    }
 
    if(scrolly > 0){
      
        y = scrolly + y;
    }
    if(y < (158)){
        y=158
    }
    if(y > (508)){
        y=508
    }

    if (x > (w1+430)) {
        x=w1+430
       
    }
    
    rect.style.left= (x) + 'px';
    rect.style.top= (y) + 'px';
  


    zoom.style.backgroundPosition = "-" + xx + "px -" + yy + "px";
}






    return (
        <>
        <div className="contgrid animate__animated animate__fadeIn animate__faster">
              <div className="container" style={{marginRight:"-70px"}}>
            <div className="pictures" id="pictures">
            {
                        (imag) ?
                            (

                                imag.map((element, index) => (
                                    <div className="contProducto" key={index}>
                                    <img className="img" 
                                    onMouseMove={()=> changeImg(element.response, index)} 
                                    id={index} 
                                    style={{width: "50px"}}
                                    src={element.response} 
                                    alt=""/>  
                                    </div>
                                )
                                )

                            ) :
                            <p>Datos no disponibles</p>
                    }
                 </div>
                
                <div className="picture" id="picture"  onMouseMove={move}>
                
                <img id="pic" src={selecImg} alt=""/>
                </div>
                <div className="rect" id ="rect" ></div>
               
                <div className="zoom" id="zoom"></div>
                <Link
                to ={{
                 pathname:"/auth/editar",
                 dataPro: {imagen}
                }}
                >
                <Button
                style={{ marginLeft:"150px",width:"330px", height:"50px"  }}
                 variant="success"
                 type="button">
                    Editar Registro
                </Button>
                </Link>
                </div>
                <div className="detalleProducto" style={{marginRight:"60px"}}>
                    <p style={{fontWeight:"bold", fontSize:"22px"}}>{imagen.nom}</p>
                    <h1 style={{color:"#f0cd05"}}>US$ {imagen.precio}</h1>
                    <p>{imagen.detPre}</p>
                    <h1 style={{fontSize:"20px"}}>Color: {imagen.color}</h1>
                    <p>{imagen.detProducto}</p>
                </div>
                <div className="detallePrecio">
                    <h1 style={{color:"#f0cd05"}}>US$ {imagen.precio}</h1>
                    <p>{imagen.detPre}</p>
                    <button>Agregar al Carrito</button>
                    <button>Comprar ahora</button>
                </div>
            

        </div>
        </>
    )
}