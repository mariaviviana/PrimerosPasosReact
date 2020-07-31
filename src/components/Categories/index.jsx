import React, { Component } from "react";
import Card from "../Card";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  onClickRemeras() {
    fetch("http://localhost:3001/api/products")
      .then((response) => {
        return response.json();
      })
      .then((respuestaDeLaApi) => {
        let productos = respuestaDeLaApi.arrayListaProductos;
        const remeras = productos.filter((producto) => {
          return producto.category === "Remeras";
        });
        this.setState({ products: remeras });
      });
  }

  onClickBilleteras() {
    fetch("http://localhost:3001/api/products")
      .then((response) => {
        return response.json();
      })
      .then((respuestaDeLaApi) => {
        let productos = respuestaDeLaApi.arrayListaProductos;
        const billeteras = productos.filter((producto) => {
          return producto.category === "Billeteras";
        });

        this.setState({ products: billeteras });
      });
  }

  render() {
    const { products = [] } = this.state;
    return (
      <Card title="Categorias">
        <ul>
          {products.map((prod, i) => (
            <li key={prod + i}> 
            <img height="50" src={`http://localhost:3001${prod.image}`}/> 
            </li>
          ))}
        </ul>
        <>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-6 mb-12">
                <div
                  onClick={() => {
                    debugger
                    this.onClickRemeras()
                  }}
                  className="card bg-info text-white shadow"
                >
                  <div className="card-body">Remeras</div>
                </div>
              </div>
              <div className="col-lg-6 mb-12">
                <div
                  onClick={() => this.onClickBilleteras()}
                  className="card bg-info text-white shadow"
                >
                  <div className="card-body">Billeteras</div>
                </div>
              </div>
            </div>
          </div>
        </>
      </Card>
    );
  }
}

export default Category;

// Primero convertir componente a state-full
// Luego agregar 2 onClick en cada .card, y vas a crear 2 funcion, `onClickRemeras` `onClickBilleras`
// Luego de cada funcion, vamos a hacer un `fetch` a la api de la misma manera que hicimos en el otro componente dentro de didMount, PERO NO VA en DIDMount, va dentro de eta function.
// Una vez que tenes esa consucuenca(data) marcada, vamos a hacer un `this.setState({productos: data})`
// Dentro del render, vamos a obtener los products que pusimos en el STATE. ---> `const {products} = this.state;`
// Con esos productos podemos generar las imagemes dentro del render.
