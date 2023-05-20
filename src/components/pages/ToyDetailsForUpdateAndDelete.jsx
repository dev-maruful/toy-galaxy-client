import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ToyDetailsForUpdateAndDelete = ({
  singleToyDetails,
  index,
  myToys,
  setMyToys,
}) => {
  const { _id, name, photo, price, availableQuantity } = singleToyDetails;

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
        fetch(
          `https://assignment-11-server-iota-brown.vercel.app/alltoysDetails/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your toy has been deleted.", "success");
              const remaining = myToys.filter((mt) => mt._id !== _id);
              setMyToys(remaining);
            }
          });
      }
    });
  };

  return (
    <tr>
      <th className="text-lg">{index + 1}</th>
      <td className="text-lg font-medium text-center">{name}</td>
      <td className="text-center">
        <div className="avatar">
          <div className="w-24 rounded">
            <img src={photo} />
          </div>
        </div>
      </td>
      <td className="text-lg font-medium text-center">${price}</td>
      <td className="text-lg font-medium text-center">
        {availableQuantity} pcs
      </td>

      {/* update toy modal */}
      <td className="text-lg font-medium text-center">
        <Link to={`/updateToy/${singleToyDetails?._id}`}>
          <button className="btn btn-primary btn-outline">Update</button>
        </Link>
      </td>
      <td>
        <button onClick={() => handleDelete(_id)} className="btn btn-error">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ToyDetailsForUpdateAndDelete;
