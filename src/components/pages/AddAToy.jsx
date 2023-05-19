import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const AddAToy = () => {
  const { user } = useContext(AuthContext);

  const handleAddAToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const sellerName = form.seller_name.value;
    const sellerEmail = form.seller_email.value;
    const subcategory = form.subcategory.value;
    const price = form.price.value;
    const rating = parseFloat(form.rating.value);
    const availableQuantity = form.availableQuantity.value;
    const description = form.description.value;

    const productDetails = {
      photo,
      name,
      sellerEmail,
      subcategory,
      price,
      sellerName,
      rating,
      availableQuantity,
      description,
    };
    console.log(productDetails);

    fetch("http://localhost:5000/allToysDetails", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("toy added successfully");
        }
      });
  };

  return (
    <div className="mt-10 mb-28">
      <h2 className="text-4xl text-center font-bold">Please add a toy</h2>
      <div className="hero">
        <div className="hero-content">
          <div className="card w-full shadow-2xl bg-base-100">
            <form onSubmit={handleAddAToy} className="card-body">
              <div className="flex gap-5">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg font-medium">
                      Toy Photo URL
                    </span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="photo url"
                    name="photo"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg font-medium">
                      Toy Name
                    </span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="toy name"
                    name="name"
                    className="input input-bordered"
                  />
                </div>
              </div>
              <div className="flex gap-5">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg font-medium">
                      Seller Name
                    </span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="seller name"
                    name="seller_name"
                    className="input input-bordered"
                    defaultValue={user?.displayName}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg font-medium">
                      Seller Email
                    </span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="seller email"
                    name="seller_email"
                    className="input input-bordered"
                    defaultValue={user?.email}
                    readOnly
                  />
                </div>
              </div>
              <div className="flex gap-5">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg font-medium">
                      Subcategory
                    </span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="subcategory"
                    name="subcategory"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg font-medium">
                      Price
                    </span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="price (write in dollar)"
                    name="price"
                    className="input input-bordered"
                  />
                </div>
              </div>
              <div className="flex gap-5">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg font-medium">
                      Ratings
                    </span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="ratings"
                    name="rating"
                    className="input input-bordered"
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
                    required
                    placeholder="available quantity"
                    name="availableQuantity"
                    className="input input-bordered"
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
                  required
                  className="textarea textarea-bordered textarea-lg w-full"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-outline btn-primary">Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAToy;
