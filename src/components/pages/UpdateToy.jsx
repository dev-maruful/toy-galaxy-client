import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const UpdateToy = () => {
  useTitle("Update Toy");
  const toyDetails = useLoaderData();
  const { _id, name, price, availableQuantity, description } = toyDetails;

  const handleUpdateToy = (event) => {
    event.preventDefault();

    const form = event.target;
    const price = form.price.value;
    const availableQuantity = form.availableQuantity.value;
    const description = form.description.value;
    const updatedInfo = { price, availableQuantity, description };

    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://assignment-11-server-iota-brown.vercel.app/updateToy/${_id}`,
          {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(updatedInfo),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              Swal.fire("Deleted!", "Your toy has been updated.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="mt-10 mb-28">
      <h2 className="text-4xl text-center font-bold">Update Toy : {name}</h2>
      <div className="hero">
        <div className="hero-content">
          <div className="card w-full shadow-2xl bg-base-100">
            <form onSubmit={handleUpdateToy} className="card-body">
              <div className="flex gap-5">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg font-medium">
                      Price
                    </span>
                  </label>
                  <input
                    type="number"
                    placeholder="price"
                    name="price"
                    className="input input-bordered"
                    defaultValue={price}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg font-medium">
                      Available Quantity
                    </span>
                  </label>
                  <input
                    type="number"
                    placeholder="available quantity"
                    name="availableQuantity"
                    className="input input-bordered"
                    defaultValue={availableQuantity}
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-medium">
                    Description
                  </span>
                </label>
                <textarea
                  placeholder="description"
                  name="description"
                  className="textarea textarea-bordered textarea-lg w-full"
                  defaultValue={description}
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-outline btn-primary">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateToy;
