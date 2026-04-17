import React from "react";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const handleDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  const { _id, name, price, photo } = coffee;
  console.log("This is coffee", coffee);
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <div className="flex  justify-between items-center gap-5">
        {/* photo  */}
        <div>
          <figure>
            <img src={photo} className="" alt="coffee" />
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
          <button onClick={() => handleDelete(_id)} className="btn btn-error">
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
