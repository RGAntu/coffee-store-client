import React from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const updateCoffee = useLoaderData();
  const { _id, name, chef, price, supplier, taste, category, details, photo } =
    updateCoffee;
  const handleUpdateCoffee = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const updatedCoffee = Object.fromEntries(formData.entries());

    fetch(`http://localhost:3000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Coffee Updated Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div>
      <div className="text-center my-8">
        <h2 className="text-4xl font-semibold">Update Coffee</h2>
        <p className="text-md w-4/5 mx-auto mt-5">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>

      <form onSubmit={handleUpdateCoffee}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              defaultValue={name}
              className="input w-full"
              placeholder="Enter Coffee Name"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <label className="label">Chef</label>
            <input
              type="text"
              name="chef"
              defaultValue={chef}
              className="input w-full"
              placeholder="Enter Coffee Chef"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <label className="label">Price</label>
            <input
              type="text"
              name="price"
              defaultValue={price}
              className="input w-full"
              placeholder="Coffee Price"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <label className="label">Supplier</label>
            <input
              type="text"
              name="supplier"
              defaultValue={supplier}
              className="input w-full"
              placeholder="Enter Coffee Supplier"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <label className="label">Taste</label>
            <input
              type="text"
              name="taste"
              defaultValue={taste}
              className="input w-full"
              placeholder="Enter Coffee Taste"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <label className="label">Category</label>
            <input
              type="text"
              name="category"
              defaultValue={category}
              className="input w-full"
              placeholder="Enter Coffee Category"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <label className="label">Details</label>
            <input
              type="text"
              name="datails"
              defaultValue={details}
              className="input w-full"
              placeholder="Enter Coffee Details"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <label className="label">Photo</label>
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              className="input w-full"
              placeholder="Enter Photo URL"
            />
          </fieldset>
        </div>
        <div className="p-6">
          <input
            type="submit"
            value="Update Coffee"
            className="btn primary-bg-color text-color w-full text-lg font-semibold"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateCoffee;
