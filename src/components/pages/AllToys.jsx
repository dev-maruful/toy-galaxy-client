import React from "react";
import { useLoaderData } from "react-router-dom";

const AllToys = () => {
  const allToysDetails = useLoaderData();
  console.log(allToysDetails);

  return (
    <div className="mt-10 mb-28">
      <div className="text-center mb-10">
        <input
          className="border border-primary rounded-full pl-2 py-2 mr-1"
          type="search"
          placeholder="search by name"
          name="search"
          id="search"
        />
        <button className="btn btn-primary rounded-full">Search</button>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th className="text-xl font-semibold text-center">Seller Name</th>
              <th className="text-xl font-semibold text-center">Toy Name</th>
              <th className="text-xl font-semibold text-center">
                Sub-category
              </th>
              <th className="text-xl font-semibold text-center">Price</th>
              <th className="text-xl font-semibold text-center">
                Available Quantity
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allToysDetails.map((singleToyDetails, index) => (
              <tr key={singleToyDetails?._id}>
                <th className="text-lg">{index + 1}</th>
                <td className="text-lg font-medium text-center">
                  {singleToyDetails?.sellerName}
                </td>
                <td className="text-lg font-medium text-center">
                  {singleToyDetails?.name}
                </td>
                <td className="text-lg font-medium text-center">
                  {singleToyDetails?.subcategory}
                </td>
                <td className="text-lg font-medium text-center">
                  ${singleToyDetails?.price}
                </td>
                <td className="text-lg font-medium text-center">
                  {singleToyDetails?.availableQuantity} pcs
                </td>
                <td>
                  <button className="btn btn-primary btn-outline">
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;

/**
 * <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Littel, Schaden and Vandervort</td>
              <td>Canada</td>
              <td>12/16/2020</td>
              <td>
                <button className="btn btn-primary btn-outline">
                  View Details
                </button>
              </td>
            </tr>
          </tbody>
 */
