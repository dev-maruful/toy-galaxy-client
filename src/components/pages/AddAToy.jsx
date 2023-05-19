import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const AddAToy = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <div className="mt-10 mb-28">
      <div className="hero">
        <div className="hero-content">
          <div className="card w-full shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="flex gap-5">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg font-medium">
                      Photo URL
                    </span>
                  </label>
                  <input
                    type="text"
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
                    type="number"
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
                    type="number"
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
                  className="textarea textarea-bordered textarea-lg w-full"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-outline btn-primary">Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAToy;
