import React from "react";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AmountProducts from "./components/AmountProducts";
import AmountUsers from "./components/AmountUsers";
import LastProduct from "./components/LastProduct";
import Category from "./components/Categories";

function App() {
  return (
    <div className="App">
      <div id="wrapper">
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Header />
            <div className="container-fluid">
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
              </div>
              <div className="row">
                <div className="col-md-6 mb-12">
                  <AmountProducts />
                </div>
                
                <div className="col-md-6 mb-12">
                  <AmountUsers />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 mb-4">
                  <LastProduct />
                </div>
                <div className="col-lg-6 mb-4">
                  <Category />
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
