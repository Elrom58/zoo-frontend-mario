import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function AllAnimals({ animals }) {

  return (
    <div className="wrapper pb-5">
      <div className="row mb-5">
        {animals
          ? animals.map((animal) => (
              <div key={animal.ID} className="col-lg-4 mb-5">
                <div
                  className="card h-100 m-5 d-flex align-items-stretch"
                  style={{ width: "25rem" }}
                >
                  <img
                    src={animal.Picture}
                    className="card-img-top img-fluid mt-3"
                    alt={animal.Name}
                  />
                  <div className="card-body h-75">
                    <h5 className="card-title">{animal.Name}</h5>
                    <p className="card-text h-50">
                      {animal.ShortDescription}
                    </p>
                    <Link to={`/${animal.ID}`} className="btn btn-primary mt-4">
                      Weiterlesen
                    </Link>
                  </div>
                </div>
              </div>
            ))
          : "Loading..."}
      </div>
    </div>
  );
}
