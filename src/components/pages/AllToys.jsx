import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const AllToys = () => {
  const [searchText, setSearchText] = useState("");
  const [toysDetails, setToysDetails] = useState([]);
  const allToysDetails = useLoaderData();
  useEffect(() => {
    setToysDetails(allToysDetails);
  }, []);

  const handleSearch = () => {
    fetch(`http://localhost:5000/toySearchByName/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setToysDetails(data);
      });
  };

  return (
    <div className="mt-10 mb-28">
      <div className="text-center mb-10">
        <input
          onChange={(e) => setSearchText(e.target.value)}
          className="border border-primary rounded-full pl-2 py-2 mr-1"
          type="search"
          placeholder="search by name"
          name="search"
          id="search"
        />
        <button onClick={handleSearch} className="btn btn-primary rounded-full">
          Search
        </button>
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
            {toysDetails.map((singleToyDetails, index) => (
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
