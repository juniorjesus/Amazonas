/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";

export const ListarProducto = () => {
  const [end, setEnd] = useState(10);
  const [noEncontre, setNoEncontre] = useState("");
  let noFind = "";
  let noFind2 = "";
  let noFind3 = "";
  const { producto } = useSelector((store) => store.productos);
  const { busqueda } = useSelector((store) => store.buscar);

  useEffect(() => {
    setNoEncontre(document.getElementById("noFindDiv"));
    window.scroll({ top: 0 });
    setEnd(10);
    if (!busqueda && busqueda === "") {
      noEncontre.style.display = "none";
    }
  }, [busqueda]);

  let producto2 = producto;

  if (busqueda && busqueda !== "") {
    console.log(busqueda);
    console.log(producto);
    console.log(producto.nom);
    let busq = busqueda.valueOf().toLowerCase();
    producto2 = producto.filter((prod) =>
      prod.nom.toLowerCase().includes(busq)
    );
    if (!producto2.length) {
      console.log("no encontre");
      noEncontre.style.display = "block";
      noFind =
        "https://res.cloudinary.com/djbaqvlnn/image/upload/v1639429249/block-master/buscar_xsyvmf_wtcez7.png";
      noFind2 = `No se encontraron resultados para "${busqueda}"`;
      noFind3 = `Sigue intentado`;
    }
  }

  let prodImp = producto2.slice(0, end);
  return (
    <>
      <InfiniteScroll
        dataLength={prodImp.length}
        next={() => setEnd(end + 2)}
        hasMore={true}
      >
        <div className="contProd">
          {(prodImp) ? (
            prodImp.map((element, index) => (
              <Link
                key={index}
                style={{ textDecoration: "none", color: "black" }}
                to={{
                  pathname: "/auth/detalle",
                  data: { element },
                }}
              >
                <div className="contProducto">
                  <img
                    className="imgPro"
                    src={element.img[0].response}
                    alt=""
                  />
                  <h1 className="nomPro">{element.nom}</h1>
                  <h1 className="prePro">US$ {element.precio}</h1>
                  <h1 className="detpPro">{element.detPre}</h1>
                </div>
              </Link>
            ))
          ) : 
            <p>Datos no disponibles</p>
          }
        </div>
      </InfiniteScroll>
      <div className="noFind" id="noFindDiv">
        <img
          style={{
            margin: "auto",
            display: "flex",
            width: "420px",
            height: "330px",
          }}
          src={noFind}
          alt=""
        />
        <h1
          style={{
            width: "100%",
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            textalign: "center",
          }}
        >
          {noFind2}
        </h1>

        <h1
          style={{
            width: "100%",
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            textalign: "center",
          }}
        >
          {noFind3}
        </h1>
      </div>
    </>
  );
};
