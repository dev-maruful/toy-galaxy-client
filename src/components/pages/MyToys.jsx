import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);

  const url = `http://localhost:5000/allToysDetails?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [url]);

  return (
    <div className="mt-10 mb-28">
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th>

              <th className="text-xl font-semibold text-center">Toy Name</th>
              <th className="text-xl font-semibold text-center">Toy Image</th>

              <th className="text-xl font-semibold text-center">Price</th>
              <th className="text-xl font-semibold text-center">
                Available Quantity
              </th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {myToys.map((singleToyDetails, index) => (
              <tr key={singleToyDetails?._id}>
                <th className="text-lg">{index + 1}</th>
                <td className="text-lg font-medium text-center">
                  {singleToyDetails?.name}
                </td>
                <td className="text-center">
                  <div className="avatar">
                    <div className="w-24 rounded">
                      <img src={singleToyDetails?.photo} />
                    </div>
                  </div>
                </td>
                <td className="text-lg font-medium text-center">
                  ${singleToyDetails?.price}
                </td>
                <td className="text-lg font-medium text-center">
                  ${singleToyDetails?.availableQuantity}
                </td>
                <td className="text-lg font-medium text-center">
                  <Link to={`/toyDetails/${singleToyDetails?._id}`}>
                    <button className="btn btn-outline btn-primary">
                      Update
                    </button>
                  </Link>
                </td>
                <td>
                  <Link to={`/toyDetails/${singleToyDetails?._id}`}>
                    <button className="btn btn-error">Delete</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
