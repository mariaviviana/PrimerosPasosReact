import React from "react";

function Carrousel(props) {
  return (
    <div
      id="carouselExampleSlidesOnly"
      class="carousel slide"
      data-ride="carousel"
    >
    <div className="carousel-inner">
        <div className="carousel-item active">
          {props.fotos.map((prod) => (
            <div class="carousel-item">
              <img
                src={`http://localhost:3001${prod.image}`}
                heigth="50"
                className="d-block w-100"
                alt="#"
              ></img>
            </div>
          ))}
        </div>
   </div>
    </div>
  );
}
export default Carrousel;
