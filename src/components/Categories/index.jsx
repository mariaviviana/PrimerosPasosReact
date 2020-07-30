import React from "react";
import Card from "../Card";
function Category() {
  return (
	  <Card title="Categorias">
      <>
      <div className="card-body">
        <div className="row">
          <div className="col-lg-6 mb-12">
            <div className="card bg-info text-white shadow">
              <div className="card-body">Remeras</div>
            </div>
          </div>
          <div className="col-lg-6 mb-12">
            <div className="card bg-info text-white shadow">
              <div className="card-body">Billeteras</div>
            </div>
          </div>
          
        </div>
      </div>
      </>
	 </Card>
  );
}
export default Category;
