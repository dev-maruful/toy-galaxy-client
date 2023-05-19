import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";

const ToyDetailsForCategory = () => {
  const toyData = useLoaderData();
  const { name, picture, price, rating } = toyData;

  return (
    <div className="mt-10 mb-28">
      <div className="card card-side bg-base-100 shadow-xl max-w-xl mx-auto">
        <figure>
          <img className="h-[400px]" src={picture} alt="" />
        </figure>
        <div className="flex flex-col justify-center px-5">
          <h2 className="card-title text-2xl font-bold mb-3">{name}</h2>
          <p className="font-medium mb-2">Price : {price}</p>
          <p className="font-medium mb-2">Ratings : {rating}</p>
          <Rating
            className="text-warning text-lg"
            emptySymbol={<FaRegStar></FaRegStar>}
            fullSymbol={<FaStar></FaStar>}
            initialRating={rating}
            readonly
          />
          <div className="card-actions mt-5">
            <button className="btn btn-outline btn-primary">Buy now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetailsForCategory;
