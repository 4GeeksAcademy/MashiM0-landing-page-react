import React from "react";

const Card = (props) => {
  const { image, title, description } = props;
  // console.log(props)

  return (
    <div className="card p-0" style={{width: "18rem"}}>
      <img src={image} className="card-img-top img-fluid" style={{ height: '200px', objectFit: 'cover' }}  />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-primary">Look at this!</a>
      </div>
    </div>
  );
};

export default Card;