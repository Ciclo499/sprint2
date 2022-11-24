import React, { useState } from "react";
import "../styles/styleAdministrador.css";
import Inicio from "./inicio";
import datosA from "../archivoAdmin.json";
import datos from "../archivo.json";



function Admin() {
  const volver = () => {
    setBarra((barra = <Inicio />));
    setInicio((inicio = ""));
    setProductos((productos = []));
    setCarrito((carrito = ""));
  };

  function modificar() {
    setInicio((inicio = imagen));
    setProductosA((productosA = datosA));
    setCarrito((carrito = ""));
  }

  function visualizacion() {
    setInicio((inicio = ""));
    setProductos((productos = datos));
    setCarrito((carrito = ""));
  }



  function venta() {
    let mod = (
    
        <div>
          <table className="table1">
            <thead>
              <tr className="table1">
                <th className="table1">Fecha</th>
                <th className="table1">idVenta</th>
                <th className="table1">Valor</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table1">
              <td className="table1">Sol de espuma</td>
              <td className="table1">$50</td>
              <td className="table1">$100</td>

              </tr>
              <tr className="table1">
              <td className="table1">Corazon Juguete</td>
              <td className="table1">$50</td>
              <td className="table1">$50</td>

              </tr>

              <tr>
              <td></td>
              <td>Total:</td>
              <td>$150</td>

              </tr>          

            </tbody>

          </table>

      </div>
    );
    setCarrito((carrito = mod));
    setInicio((inicio = ""));
    setProductos((productos = []));
    setProductosA((productosA = []));

  }

  let init = (
    <div className="blockAdmin">
      <button onClick={modificar} className="buttonCliente">
        {" "}
       Modificar <br></br> Productos{" "}
      </button>
      <button onClick={visualizacion} className="buttonCliente">
        {" "}
        Lista <br></br>Productos{" "}
      </button>
      <button onClick={venta} className="buttonCliente">
        {" "}
        Lista  <br></br> Ventas{" "}
      </button>
      <button onClick={volver} className="buttonCliente">
        {" "}
        Volver{" "}
      </button>
    </div>
  );

  let imagen1 = (
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.babyinfanti.com.pe%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fthumbnail%2F1200x%2F040ec09b1e35df139433887a97daa66f%2F0%2F5%2F05612217270-1.jpg&f=1&nofb=1&ipt=c4452dd0df66d4bbdaa1a7b16b5378d8dcb7475928a10e20e0262a113b79c2eb&ipo=images"></img>
  );
  let imagen = (
    <img className="img1" src="https://scontent.fbog15-1.fna.fbcdn.net/v/t1.15752-9/315310255_716175522891632_287334351779433145_n.png?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHK57eQPNRYuxsh2XclDctAlgzSIOBdwY-WDNIg4F3BjwIMnAAn5sEhJ5X2bgc9XTY&_nc_ohc=Wy87-E9ki4AAX_yugYI&_nc_ht=scontent.fbog15-1.fna&oh=03_AdSl7pTrAUvr3G7jCXISJYZUGUfXWL2HK3l02biZZrDJ0A&oe=63A6F1BC"></img>
  );

  let [barra, setBarra] = useState(init);
  let [inicio, setInicio] = useState([]);
  let [productos, setProductos] = useState([]);
  let [productosA, setProductosA] = useState([]);

  let [carrito, setCarrito] = useState("");


  return (
    <div>
      {barra}
      {inicio}
      {productos.map((elem, idx) => {
        return (
          <div className="objetos">
            {imagen1}<br></br>
            <strong> {idx + 1} : </strong>{" "}
            {elem.nombre}<br></br>
            {"Precio: $"+  elem.precio}<br></br>
            {"Stock:" + elem.stock} <br></br>

          </div>
        );
      })}
      {carrito}
    </div>
    
  );


}


export default Admin;
