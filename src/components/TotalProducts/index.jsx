import React from "react";
import Card from "../Card";

function TotalProducts() {
  return (
    <Card title="Productos por categoria">
      <>
      <div className="card-body">
                  <h4 className="small font-weight-bold">Remeras <span className="float-right">40%</span></h4>
                  <div className="progress mb-4">
                    <div className="progress-bar bg-danger" role="progressbar" style={{width: "40%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <h4 className="small font-weight-bold">Billeteras <span className="float-right">60%</span></h4>
                  <div className="progress mb-4">
                    <div className="progress-bar bg-warning" role="progressbar" style={{width: "60%"}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <h4 className="small font-weight-bold">Total de productos <span className="float-right">Complete!</span></h4>
                  <div className="progress">
                    <div className="progress-bar bg-success" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
      </>
    </Card>
  );
}
export default TotalProducts;
