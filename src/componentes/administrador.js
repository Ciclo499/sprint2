import React, { useState } from "react";
import "../styles/styleAdministrador.css";
import Inicio from "./inicio";
import datos from "../archivoAdmin.json";


function Admin() {
  const volver = () => {
    setBarra((barra = <Inicio />));
    setProductos((productos = []));
  };
  function lista() {
    setProductos((productos = []));
  }

  function modificar() {
    setProductos((productos = datos));
  }
  function ventas() {
    setProductos((productos = datos));
  }

  function ventas() {
    let mod = (
      <div>
          <table className="table1">
            <thead>
              <tr className="table1">
                <th className="table1">Fecha</th>
                <th className="table1">Cantidad</th>
                <th className="table1">Poducto</th>
                <th className="table1">Valor</th>
                <th className="table1">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table1">
              <td className="table1">2</td>
              <td className="table1">Sol de espuma</td>
              <td className="table1">$50</td>
              <td className="table1">$100</td>

              </tr>
              <tr className="table1">
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
    </div>
    );
    setVenta((ventas = mod));
    setProductos((productos = []));

  }

  let init = (
    <div className="blockCliente">
      <button onClick={lista} className="buttonCliente">
        {" "}
        Lista <br></br>Productos{" "}      </button>
      <button onClick={modificar} className="buttonCliente">
        {" "}
        Modificar <br></br>Productos{" "}
      </button>
      <button onClick={ventas} className="buttonCliente">
        {" "}
        Lista <br></br>Ventas{" "}
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
  let [barra, setBarra] = useState(init);
  let [productos, setProductos] = useState([]);
  let [ventas, setVenta] = useState("");
  return <div>{barra}</div>;

  return (
    <div>
      {barra}
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



export default Admin;
