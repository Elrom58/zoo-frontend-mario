import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Animal = () => {

  const { id } = useParams();
  const [animal, setAnimal] = useState(null);

  const getData = () => {
    axios
      .get(`http://localhost:5000/api/animals/${id}`)
      .then((reponse) => setAnimal(reponse.data))
      .catch((error) => console.log(error))
  }
  useEffect(() => {
    getData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  
  return (
    <div className="single-animal-container">
      {animal && (
        <>
          <div className="row">
            <h1 className="px-5 pt-5">{animal.Name}</h1>
            <p className="px-5">{animal.ShortDescription}</p>
            <div className="col-sm-12">
              <img
                src={animal.Picture}
                className="animal-picture"
                alt="Tier"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 p-5">
            <div dangerouslySetInnerHTML={{ __html: animal.LongDescription }} />
            </div>
          </div>
          <div className="row">
            <div className="text-start d-flex justify-content-center">
             {console.log(animal.Characteristics[1])}
              <ul>
            
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
            <Link to="/" className="btn btn-primary my-4">
              Zurück
            </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Animal;
