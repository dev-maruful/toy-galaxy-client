import React from "react";
import { useLoaderData } from "react-router-dom";

const AllToys = () => {
  const allToysDetails = useLoaderData();
  console.log(allToysDetails);

  return (
    <div>
      <h3>all toys are here</h3>
    </div>
  );
};

export default AllToys;
