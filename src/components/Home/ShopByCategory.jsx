import React, { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ShopByCategory = () => {
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/toyGalaxyCategory")
      .then((res) => res.json())
      .then((data) => {
        setCategoryProducts(data);
      });
  }, []);

  return (
    <div className="mb-28">
      <h1 className="text-5xl font-bold leading-[50px] text-center mb-5">
        Shop By Category
      </h1>
      <Tabs className={`p-3 md:p-0`}>
        <TabList>
          <Tab>Avengers</Tab>
          <Tab>Star Wars</Tab>
          <Tab>Transformers</Tab>
        </TabList>

        <TabPanel>
          <div className="flex gap-10">
            <div className="card w-96 bg-base-100 shadow-xl mt-10">
              <figure>
                <img src={categoryProducts[0]?.picture} alt="" />
              </figure>
              <div className="card-body p-3 md:p-6">
                <h2 className="card-title text-xl md:text-2xl font-bold">
                  {categoryProducts[0]?.name}
                </h2>
                <p className="my-1 font-medium">
                  Price : {categoryProducts[0]?.price}
                </p>
                <div className="flex flex-col md:flex-row md:items-center">
                  <p className="mb-3 font-medium">
                    Ratings : {categoryProducts[0]?.rating}
                  </p>
                  <Rating
                    className="text-warning text-lg"
                    emptySymbol={<FaRegStar></FaRegStar>}
                    fullSymbol={<FaStar></FaStar>}
                    initialRating={categoryProducts[0]?.rating}
                    readonly
                  />
                </div>
                <div className="card-actions">
                  <Link to={`/toyGalaxyCategory/${categoryProducts[0]?._id}`}>
                    <button className="btn btn-outline btn-primary">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl mt-10">
              <figure>
                <img src={categoryProducts[4]?.picture} alt="" />
              </figure>
              <div className="card-body p-3 md:p-6">
                <h2 className="card-title text-xl md:text-2xl font-bold">
                  {categoryProducts[4]?.name}
                </h2>
                <p className="my-1 font-medium">
                  Price : {categoryProducts[4]?.price}
                </p>
                <div className="flex flex-col md:flex-row md:items-center">
                  <p className="mb-3 font-medium">
                    Ratings : {categoryProducts[4]?.rating}
                  </p>
                  <Rating
                    className="text-warning text-lg"
                    emptySymbol={<FaRegStar></FaRegStar>}
                    fullSymbol={<FaStar></FaStar>}
                    initialRating={categoryProducts[4]?.rating}
                    readonly
                  />
                </div>
                <div className="card-actions">
                  <Link to={`/toyGalaxyCategory/${categoryProducts[4]?._id}`}>
                    <button className="btn btn-outline btn-primary">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex gap-10">
            <div className="card w-96 bg-base-100 shadow-xl mt-10">
              <figure>
                <img src={categoryProducts[2]?.picture} alt="" />
              </figure>
              <div className="card-body p-3 md:p-6">
                <h2 className="card-title text-xl md:text-2xl font-bold">
                  {categoryProducts[2]?.name}
                </h2>
                <p className="my-1 font-medium">
                  Price : {categoryProducts[2]?.price}
                </p>
                <div className="flex flex-col md:flex-row md:items-center">
                  <p className="mb-3 font-medium">
                    Ratings : {categoryProducts[2]?.rating}
                  </p>
                  <Rating
                    className="text-warning text-lg"
                    emptySymbol={<FaRegStar></FaRegStar>}
                    fullSymbol={<FaStar></FaStar>}
                    initialRating={categoryProducts[2]?.rating}
                    readonly
                  />
                </div>
                <div className="card-actions">
                  <Link to={`/toyGalaxyCategory/${categoryProducts[2]?._id}`}>
                    <button className="btn btn-outline btn-primary">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl mt-10">
              <figure>
                <img src={categoryProducts[5]?.picture} alt="" />
              </figure>
              <div className="card-body p-3 md:p-6">
                <h2 className="card-title text-xl md:text-2xl font-bold">
                  {categoryProducts[5]?.name}
                </h2>
                <p className="my-1 font-medium">
                  Price : {categoryProducts[5]?.price}
                </p>
                <div className="flex flex-col md:flex-row md:items-center">
                  <p className="mb-3 font-medium">
                    Ratings : {categoryProducts[5]?.rating}
                  </p>
                  <Rating
                    className="text-warning text-lg"
                    emptySymbol={<FaRegStar></FaRegStar>}
                    fullSymbol={<FaStar></FaStar>}
                    initialRating={categoryProducts[5]?.rating}
                    readonly
                  />
                </div>
                <div className="card-actions">
                  <Link to={`/toyGalaxyCategory/${categoryProducts[5]?._id}`}>
                    <button className="btn btn-outline btn-primary">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex gap-4 md:gap-10">
            <div className="card w-96 bg-base-100 shadow-xl mt-10">
              <figure>
                <img src={categoryProducts[1]?.picture} alt="" />
              </figure>
              <div className="card-body p-3 md:p-6">
                <h2 className="card-title text-xl md:text-2xl font-bold">
                  {categoryProducts[1]?.name}
                </h2>
                <p className="my-1 font-medium">
                  Price : {categoryProducts[1]?.price}
                </p>
                <div className="flex flex-col md:flex-row md:items-center">
                  <p className="mb-3 font-medium">
                    Ratings : {categoryProducts[1]?.rating}
                  </p>
                  <Rating
                    className="text-warning text-lg"
                    emptySymbol={<FaRegStar></FaRegStar>}
                    fullSymbol={<FaStar></FaStar>}
                    initialRating={categoryProducts[1]?.rating}
                    readonly
                  />
                </div>
                <div className="card-actions">
                  <Link to={`/toyGalaxyCategory/${categoryProducts[1]?._id}`}>
                    <button className="btn btn-outline btn-primary">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl mt-10">
              <figure>
                <img src={categoryProducts[3]?.picture} alt="" />
              </figure>
              <div className="card-body p-3 md:p-6">
                <h2 className="card-title text-xl md:text-2xl font-bold">
                  {categoryProducts[3]?.name}
                </h2>
                <p className="my-1 font-medium">
                  Price : {categoryProducts[3]?.price}
                </p>
                <div className="flex flex-col md:flex-row md:items-center">
                  <p className="mb-3 font-medium">
                    Ratings : {categoryProducts[3]?.rating}
                  </p>
                  <Rating
                    className="text-warning text-lg"
                    emptySymbol={<FaRegStar></FaRegStar>}
                    fullSymbol={<FaStar></FaStar>}
                    initialRating={categoryProducts[3]?.rating}
                    readonly
                  />
                </div>
                <div className="card-actions">
                  <Link to={`/toyGalaxyCategory/${categoryProducts[3]?._id}`}>
                    <button className="btn btn-outline btn-primary">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
