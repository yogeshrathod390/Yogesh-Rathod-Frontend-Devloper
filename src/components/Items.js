import React from "react";

function Items(props) {
  let {
    wikipedia,
    company,
    country,
    costLaunch,
    Active,
    firstFlight,
    mass,
    diameter,
    height,
    name,
    UnikeId,
    type,
    description,
    imageUrl,
  } = props;
  return (
    <div className="container">
      <div className="card ">
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">
            {name} <span className="fs-6"> ({type}) </span>
          </h5>
          <p className="card-text">{description}</p>
          <a
            href="#"
            target="_blank"
            className="btn btn-sm btn-primary"
            data-bs-toggle="modal"
            data-bs-target={`#popup${UnikeId}`}
          >
            Show More
          </a>
        </div>

        <div
          className="modal fade"
          id={`popup${UnikeId}`}
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  {name}
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div
                  id={`carousel${UnikeId}Interval`}
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div
                      className="carousel-item active"
                      data-bs-interval="10000"
                    >
                      <img
                        src={imageUrl[0]}
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                      <img
                        src={imageUrl[1]}
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={imageUrl[2]}
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target={`#carousel${UnikeId}Interval`}
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden"> Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target={`#carousel${UnikeId}Interval`}
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden"> Next</span>
                  </button>
                </div>
              </div>
              <div className="container">
                <h3 style={{ textAlign: "center" }}>
                  {country} <span className="fs-6">({company})</span>
                </h3>
              </div>
              <div className="row rocket-info">
                <div className="col-sm-4">
                  <h4>Height</h4>
                  <p>{height} Feet</p>
                </div>
                <div className="col-sm-4">
                  <h4>Diameter</h4>
                  <p>{diameter} Meters </p>
                </div>
                <div className="col-sm-4">
                  <h4>Mass</h4>
                  <p>{mass} Tonne</p>
                </div>
                <div className="col-sm-4">
                  <h4>First Flight</h4>
                  <p>{firstFlight} </p>
                </div>
                <div className="col-sm-4">
                  <h4>Active</h4>
                  <p>{Active} </p>
                </div>
                <div className="col-sm-4">
                  <h4>cost/Launch</h4>
                  <p>{costLaunch} Million</p>
                </div>
              </div>
              <div className="modal-footer">
                <a
                  href={wikipedia}
                  type="button"
                  target="_blank"
                  className="btn btn-primary "
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Items;
