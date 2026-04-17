import React from "react";

const CoffeeCard = ({coffee}) => {
  const { _id, name, price, photo } = coffee;
  console.log("This is coffee", coffee);
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
  <div className="flex  justify-between items-center gap-5"> 
    {/* photo  */}
  <div>
<figure>
    <img
      src={photo} className=""
      alt="coffee" />
  </figure>
  </div>
  {/* content  */}
  <div>
<h3 className="card-title">{name}</h3>
    <p>Price: {price}</p>
    <p></p>
  </div>
  
    {/* buttons  */}
    <div className="flex flex-col space-y-3">
      <button className="btn btn-primary">Details</button>
      <button className="btn btn-accent">Edit</button>
      <button className="btn btn-error">X</button>
    </div>
</div>

  </div>
  );
};

export default CoffeeCard;
