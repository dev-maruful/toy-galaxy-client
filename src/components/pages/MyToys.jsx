import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import ToyDetailsForUpdateAndDelete from "./ToyDetailsForUpdateAndDelete";
import useTitle from "../../hooks/useTitle";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  useTitle("My Toys");

  const url = `https://assignment-11-server-iota-brown.vercel.app/allToysDetails?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [url]);

  const handleAscending = () => {
    fetch(`http://localhost:5000/ascending?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  };

  const handleDescending = () => {
    fetch(`http://localhost:5000/descending?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  };

  return (
    <div className="mt-10 mb-28">
      {myToys.length === 0 && (
        <h1 className="text-5xl font-bold leading-[50px] text-center mb-10">
          Add some toys to view here
        </h1>
      )}
      <div className="dropdown">
        <label tabIndex={0} className="btn m-1">
          Click
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <button onClick={handleAscending}>Item 1</button>
          </li>
          <li>
            <button onClick={handleDescending}>Item 2</button>
          </li>
        </ul>
      </div>
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
              <ToyDetailsForUpdateAndDelete
                key={singleToyDetails._id}
                index={index}
                singleToyDetails={singleToyDetails}
                myToys={myToys}
                setMyToys={setMyToys}
              ></ToyDetailsForUpdateAndDelete>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
