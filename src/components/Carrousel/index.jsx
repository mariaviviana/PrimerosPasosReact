import React from "react";

function Carrousel(props) {
  debugger;
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        {props.fotos.map((prod, i) => (
          <div key={prod.title} className={`carousel-item ${ i === 0 ? 'active' : ''}`}>
              <img
                src={`http://localhost:3001${prod.image}`}
                heigth="50"
                className="d-block w-100"
                alt="#"
              ></img>
            
          </div>
        ))}
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}
export default Carrousel;
