import React from "react";
const RenderedCard = props => (
  <div className="card">
    <img src={props.image} className="card-img-top" />
    <div className="card-body">
      <p>{props.description}</p>
      <a href={props.ULRAdreess} className="btn btn-primary">
        {props.name}
      </a>
    </div>
  </div>
);
const TouristInfoCard = props => {
  return props.cities.map((city, index) => (
    <RenderedCard key={index.toString()} {...city} />
  ));
  //return props.cities.map((city, index) => <RenderedCard key={index.toString()} name={city.name} image={city.image} description={city.description} ULRAdreess={city.ULRAdreess}/>)
};

export default TouristInfoCard;
