import React, { useState } from "react";
import "../styles/styleCliente.css";
import Inicio from "./inicio";
import datos from "../archivo.json";

function Cliente() {
  const volver = () => {
    setBarra((barra = <Inicio />));
    setInicio((inicio = ""));
    setProductos((productos = []));
    setCarrito((carrito = ""));
  };

  function inicializacion() {
    setInicio((inicio = imagen));
    setProductos((productos = []));
    setCarrito((carrito = ""));
  }

  function visualizacion() {
    setInicio((inicio = ""));
    setProductos((productos = datos));
    setCarrito((carrito = ""));
  }

  function carro() {
    let mod = (
    
        <div>
          <table className="table1">
            <thead>
              <tr className="table1">
                <th className="table1">Imagen</th>
                <th className="table1">Cantidad</th>
                <th className="table1">Poducto</th>
                <th className="table1">Valor</th>
                <th className="table1">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table1">
              <td className="table1">{imagen1}</td>
              <td className="table1">2</td>
              <td className="table1">Sol de espuma</td>
              <td className="table1">$50</td>
              <td className="table1">$100</td>

              </tr>
              <tr className="table1">
              <td className="table1">{imagen2}</td>
              <td className="table1">1</td>
              <td className="table1">Corazon Juguete</td>
              <td className="table1">$50</td>
              <td className="table1">$50</td>

              </tr>

              <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>Total:</td>
              <td>$150</td>

              </tr>          

            </tbody>

          </table>

        <button> Finalizar compra </button>        <button> Cancelar </button>

      </div>
    );
    setCarrito((carrito = mod));
    setInicio((inicio = ""));
    setProductos((productos = []));
  }

  let init = (
    <div className="blockCliente">
      <button onClick={inicializacion} className="buttonCliente">
        {" "}
        Inicio{" "}
      </button>
      <button onClick={visualizacion} className="buttonCliente">
        {" "}
        Lista <br></br>Productos{" "}
      </button>
      <button onClick={carro} className="buttonCliente">
        {" "}
        Carrito{" "}
      </button>
      <button onClick={volver} className="buttonCliente">
        {" "}
        Volver{" "}
      </button>
    </div>
  );
  let imagen = (
    <img className="img" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.espacios.media%2Fwp-content%2Fuploads%2F2020%2F02%2Fobjetivos-ventas-incrementa-ingresos.jpg&f=1&nofb=1&ipt=b48b029125c4e4d1b10b241a42f4b32b1fd034719736d0e7e8869d2ad37584b4&ipo=images"></img>
  );
  let imagen1 = (
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.babyinfanti.com.pe%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fthumbnail%2F1200x%2F040ec09b1e35df139433887a97daa66f%2F0%2F5%2F05612217270-1.jpg&f=1&nofb=1&ipt=c4452dd0df66d4bbdaa1a7b16b5378d8dcb7475928a10e20e0262a113b79c2eb&ipo=images"></img>
  );
  let imagen2 = (
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F2992%2F2084%2Fproducts%2F843460015085_700x.jpg%3Fv%3D1618901321&f=1&nofb=1&ipt=712340f6ede4e58efdcfdae1b7c6c0493351b5d9ccb6e1c2a2a0df50ff49e8f4&ipo=images"></img>
  );

  let [barra, setBarra] = useState(init);
  let [inicio, setInicio] = useState(imagen);
  let [productos, setProductos] = useState([]);
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
            <button>Comprar </button>


          </div>
        );
      })}
      {carrito}
    </div>
  );
}
export default Cliente;
