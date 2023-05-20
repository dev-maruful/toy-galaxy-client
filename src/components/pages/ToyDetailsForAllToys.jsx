import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const ToyDetailsForAllToys = () => {
  useTitle("Toy Details");
  const toyDetails = useLoaderData();
  const {
    availableQuantity,
    description,
    name,
    price,
    photo,
    rating,
    sellerEmail,
    sellerName,
  } = toyDetails;

  return (
    <div className="mt-10 mb-28">
      <div className="card card-side bg-base-100 shadow-xl max-w-5xl mx-auto">
        <figure className="w-1/2">
          <img className="h-[500px]" src={photo} alt="" />
        </figure>
        <div className="flex flex-col justify-center px-5 w-1/2">
          <h2 className="card-title text-2xl font-bold mb-3">
            Toy name : {name}
          </h2>
          <p className="font-medium mb-2">Seller Name : {sellerName}</p>
          <p className="font-medium mb-2">Seller Email : {sellerEmail}</p>
          <p className="font-medium mb-2">Price : ${price}</p>
          <p className="font-medium mb-2">
            Available Quantity : {availableQuantity} pcs
          </p>
          <div className="flex gap-2">
            <p className="font-medium">Ratings : {rating}</p>
            <Rating
              className="text-warning text-lg"
              emptySymbol={<FaRegStar></FaRegStar>}
              fullSymbol={<FaStar></FaStar>}
              initialRating={rating}
              readonly
            />
          </div>
          <p className="font-medium mb-2">Description : {description}</p>
        </div>
      </div>
    </div>
  );
};

export default ToyDetailsForAllToys;
