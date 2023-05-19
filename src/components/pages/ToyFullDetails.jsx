import React from "react";
import { useLoaderData } from "react-router-dom";

const ToyFullDetails = () => {
  const toyDetails = useLoaderData();
  console.log(toyDetails);

  return <div>hello</div>;
};

export default ToyFullDetails;
